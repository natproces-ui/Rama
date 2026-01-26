// src/services/admin/stats.service.ts
import { db } from '@/lib/firebase';
import { collection, getDocs, doc, updateDoc, addDoc } from 'firebase/firestore';
import { ImpactStats } from '@/types/components';

export const adminStatsService = {
  async getStats(): Promise<ImpactStats | null> {
    try {
      const querySnapshot = await getDocs(collection(db, 'impactStats'));
      if (querySnapshot.empty) return null;
      
      const data = querySnapshot.docs[0].data();
      return {
        womenHelped: data.womenHelped || 0,
        communitiesSensitized: data.communitiesSensitized || 0,
        medicalPartners: data.medicalPartners || 0,
        yearsOfExperience: data.yearsOfExperience || 0
      };
    } catch (error) {
      console.error('Error fetching stats:', error);
      return null;
    }
  },

  async updateStats(stats: ImpactStats): Promise<boolean> {
    try {
      const querySnapshot = await getDocs(collection(db, 'impactStats'));
      
      if (querySnapshot.empty) {
        await addDoc(collection(db, 'impactStats'), {
          ...stats,
          lastUpdated: new Date()
        });
      } else {
        const docRef = doc(db, 'impactStats', querySnapshot.docs[0].id);
        await updateDoc(docRef, {
          ...stats,
          lastUpdated: new Date()
        });
      }
      return true;
    } catch (error) {
      console.error('Error updating stats:', error);
      return false;
    }
  }
};