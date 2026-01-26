'use client';

import { useState } from 'react';
import { ImpactStats } from '@/types/components';
import { Save } from 'lucide-react';

interface StatsFormProps {
  initialData: ImpactStats;
  onClose: () => void;
}

export default function StatsForm({ initialData, onClose }: StatsFormProps) {
  const [stats, setStats] = useState<ImpactStats>(initialData);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/stats', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stats)
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Statistiques mises à jour !');
        setTimeout(() => onClose(), 1500);
      } else {
        setMessage('Erreur lors de la mise à jour');
      }
    } catch (error) {
      setMessage('Erreur lors de la mise à jour');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Femmes soignées
          </label>
          <input
            type="number"
            value={stats.womenHelped}
            onChange={(e) => setStats({ ...stats, womenHelped: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Communautés sensibilisées
          </label>
          <input
            type="number"
            value={stats.communitiesSensitized}
            onChange={(e) => setStats({ ...stats, communitiesSensitized: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Partenaires médicaux
          </label>
          <input
            type="number"
            value={stats.medicalPartners}
            onChange={(e) => setStats({ ...stats, medicalPartners: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Années d&apos;expérience
          </label>
          <input
            type="number"
            value={stats.yearsOfExperience}
            onChange={(e) => setStats({ ...stats, yearsOfExperience: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
            required
          />
        </div>
      </div>

      {message && (
        <div className={`px-4 py-3 rounded-lg ${message.includes('succès') || message.includes('mis') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={saving}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
      >
        <Save className="w-5 h-5" />
        {saving ? 'Enregistrement...' : 'Enregistrer'}
      </button>
    </form>
  );
}