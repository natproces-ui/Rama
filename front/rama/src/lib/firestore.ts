// src/lib/firestore.ts
import { 
  collection, 
  addDoc, 
  getDocs, 
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
  // Subscribe to newsletter
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
        subscribedAt: new Date(),
        isActive: true
      });
      
      return docRef.id;
    } catch (error: any) {
      throw new Error(error.message || 'Erreur lors de l\'inscription');
    }
  },

  // Get all subscribers
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
    const querySnapshot = await getDocs(collection(db, 'impactStats'));
    if (querySnapshot.empty) return null;
    
    return {
      id: querySnapshot.docs[0].id,
      ...convertTimestamp(querySnapshot.docs[0].data())
    } as ImpactStats;
  }
};