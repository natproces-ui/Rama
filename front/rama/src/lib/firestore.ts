// src/lib/firestore.ts
import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc,
  doc,
  setDoc,
  query, 
  where,
  Timestamp,
  DocumentData
} from 'firebase/firestore';
import { db } from './firebase';
import { Newsletter, ImpactStats } from '@/types';

// Helper function to convert Firestore timestamp to Date
const convertTimestamp = (data: DocumentData) => {
  const converted: any = { ...data };
  Object.keys(converted).forEach(key => {
    if (converted[key] instanceof Timestamp) {
      converted[key] = converted[key].toDate();
    }
  });
  return converted;
};

// ==================== NEWSLETTER ====================
export const newsletterService = {
  async subscribe(email: string): Promise<string> {
    try {
      const q = query(
        collection(db, 'newsletters'),
        where('email', '==', email)
      );
      const snapshot = await getDocs(q);
      
      if (!snapshot.empty) {
        throw new Error('Cet email est déjà inscrit');
      }

      const docRef = await addDoc(collection(db, 'newsletters'), {
        email,
        subscribedAt: Timestamp.now(),
        isActive: true
      });
      
      return docRef.id;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de l\'inscription');
    }
  },

  async getAll(): Promise<Newsletter[]> {
    const querySnapshot = await getDocs(collection(db, 'newsletters'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...convertTimestamp(doc.data())
    } as Newsletter));
  }
};

// ==================== IMPACT STATS ====================
export const impactStatsService = {
  // Get current stats
  async get(): Promise<ImpactStats | null> {
    try {
      // CHANGÉ ICI : 'impactStats' au lieu de 'settings'
      const statsDocRef = doc(db, 'impactStats', 'impactStats');
      const statsDoc = await getDoc(statsDocRef);
      
      if (!statsDoc.exists()) {
        return null;
      }
      
      return convertTimestamp(statsDoc.data()) as ImpactStats;
    } catch (error) {
      console.error('Error getting stats:', error);
      throw error;
    }
  },

  // Update stats
  async update(stats: ImpactStats): Promise<void> {
    try {
      // CHANGÉ ICI : 'impactStats' au lieu de 'settings'
      const statsDocRef = doc(db, 'impactStats', 'impactStats');
      await setDoc(statsDocRef, {
        ...stats,
        lastUpdated: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating stats:', error);
      throw error;
    }
  }
};