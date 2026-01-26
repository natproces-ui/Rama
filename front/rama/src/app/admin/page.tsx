'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, MessageSquare, Newspaper, X, Plus, Edit, Trash2 } from 'lucide-react';
import { ImpactStats, Testimonial, NewsArticle } from '@/types/components';
import StatsForm from '@/components/admin/forms/StatsForm';
import TestimonialForm from '@/components/admin/forms/TestimonialForm';
import NewsForm from '@/components/admin/forms/NewsForm';

type ModalType = 'stats' | 'testimonials' | 'news' | null;
type FormMode = 'create' | 'edit';

export default function AdminDashboard() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [formMode, setFormMode] = useState<FormMode>('create');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  
  // Stats
  const [stats, setStats] = useState<ImpactStats>({
    womenHelped: 500,
    communitiesSensitized: 50,
    medicalPartners: 20,
    yearsOfExperience: 10
  });

  // Testimonials
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // News
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Fetch stats
    try {
      const statsRes = await fetch('/api/stats');
      const statsData = await statsRes.json();
      if (statsData.success && statsData.data) {
        setStats(statsData.data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }

    // Fetch testimonials
    try {
      const testimonialsRes = await fetch('/api/testimonials?published=false');
      const testimonialsData = await testimonialsRes.json();
      if (testimonialsData.success && testimonialsData.data) {
        setTestimonials(testimonialsData.data);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }

    // Fetch news
    try {
      const newsRes = await fetch('/api/news?published=false');
      const newsData = await newsRes.json();
      if (newsData.success && newsData.data) {
        setNews(newsData.data);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const openModal = (type: ModalType, mode: FormMode = 'create', item: any = null) => {
    setActiveModal(type);
    setFormMode(mode);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedItem(null);
    fetchData();
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce témoignage ?')) return;
    
    try {
      await fetch(`/api/testimonials?id=${id}`, { method: 'DELETE' });
      fetchData();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  const handleDeleteNews = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) return;
    
    try {
      await fetch(`/api/news?id=${id}`, { method: 'DELETE' });
      fetchData();
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Admin - Fondation Rama</h1>
          <p className="text-gray-600 mt-1">Gérez le contenu du site</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => openModal('stats')}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-left group"
          >
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <span className="text-sm text-gray-500">Modifier</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Statistiques</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="font-semibold text-purple-600">{stats.womenHelped}+</div>
                <div className="text-gray-600 text-xs">Femmes</div>
              </div>
              <div>
                <div className="font-semibold text-purple-600">{stats.communitiesSensitized}+</div>
                <div className="text-gray-600 text-xs">Communautés</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => openModal('testimonials', 'create')}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-left group"
          >
            <div className="flex items-center justify-between mb-4">
              <MessageSquare className="w-8 h-8 text-blue-600" />
              <Plus className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Témoignages</h3>
            <p className="text-gray-600 text-sm">{testimonials.length} témoignage(s)</p>
          </button>

          <button
            onClick={() => openModal('news', 'create')}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition text-left group"
          >
            <div className="flex items-center justify-between mb-4">
              <Newspaper className="w-8 h-8 text-green-600" />
              <Plus className="w-6 h-6 text-gray-400 group-hover:text-green-600 transition" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Actualités</h3>
            <p className="text-gray-600 text-sm">{news.length} article(s)</p>
          </button>
        </div>

        {/* Testimonials List */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Témoignages</h2>
            <button
              onClick={() => openModal('testimonials', 'create')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              <Plus className="w-5 h-5" />
              Ajouter
            </button>
          </div>
          <div className="space-y-4">
            {testimonials.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Aucun témoignage</p>
            ) : (
              testimonials.map((testimonial) => (
                <div key={testimonial.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{testimonial.region}</p>
                      <p className="text-gray-700 line-clamp-2">{testimonial.text}</p>
                      <div className="mt-2">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          testimonial.isPublished ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {testimonial.isPublished ? 'Publié' : 'Brouillon'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => openModal('testimonials', 'edit', testimonial)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteTestimonial(testimonial.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* News List */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Actualités</h2>
            <button
              onClick={() => openModal('news', 'create')}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              <Plus className="w-5 h-5" />
              Ajouter
            </button>
          </div>
          <div className="space-y-4">
            {news.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Aucune actualité</p>
            ) : (
              news.map((article) => (
                <div key={article.id} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">{article.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{article.publishedAt}</p>
                      <p className="text-gray-700 line-clamp-2">{article.excerpt}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => openModal('news', 'edit', article)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteNews(article.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Modals */}
      {activeModal === 'stats' && (
        <Modal title="Modifier les Statistiques" onClose={closeModal}>
          <StatsForm initialData={stats} onClose={closeModal} />
        </Modal>
      )}

      {activeModal === 'testimonials' && (
        <Modal title={formMode === 'create' ? 'Ajouter un Témoignage' : 'Modifier le Témoignage'} onClose={closeModal}>
          <TestimonialForm mode={formMode} initialData={selectedItem} onClose={closeModal} />
        </Modal>
      )}

      {activeModal === 'news' && (
        <Modal title={formMode === 'create' ? 'Ajouter une Actualité' : 'Modifier l\'Actualité'} onClose={closeModal}>
          <NewsForm mode={formMode} initialData={selectedItem} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}

// Modal Component
function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {children}
        </div>
      </div>
    </div>
  );
}