'use client';

import { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { NewsArticle } from '@/types/components';

export default function NewsSection() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      // Récupérer seulement les actualités publiées
      const response = await fetch('/api/news?published=true');
      const data = await response.json();
      
      if (data.success && data.data) {
        // Limiter à 3 articles les plus récents
        setNews(data.data.slice(0, 3));
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  // Afficher un message de chargement
  if (loading) {
    return (
      <section id="actualites" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">Chargement des actualités...</p>
          </div>
        </div>
      </section>
    );
  }

  // Si aucune actualité, ne rien afficher
  if (news.length === 0) {
    return null;
  }

  return (
    <section id="actualites" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Actualités récentes
          </h2>
          <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 transition">
            Toutes les actualités
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((article) => (
            <article key={article.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="relative overflow-hidden">
                <img 
                  src={article.imageUrl || '/api/placeholder/400/200'} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.publishedAt)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <a 
                  href="#"
                  className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 transition"
                >
                  Lire la suite
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}