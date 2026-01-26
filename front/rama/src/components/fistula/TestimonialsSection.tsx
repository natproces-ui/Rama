'use client';

import { useState, useEffect } from 'react';
import { Testimonial } from '@/types/components';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      // Récupérer seulement les témoignages publiés
      const response = await fetch('/api/testimonials?published=true');
      const data = await response.json();
      
      if (data.success && data.data) {
        setTestimonials(data.data);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  // Afficher un message de chargement
  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">Chargement des témoignages...</p>
          </div>
        </div>
      </section>
    );
  }

  // Si aucun témoignage publié, ne rien afficher (ou afficher un message)
  if (testimonials.length === 0) {
    return null; // Ou affichez un message si vous préférez
  }

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Témoignages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les histoires inspirantes de femmes que nous avons pu aider grâce à votre soutien.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition">
              <div className="text-6xl text-purple-600 opacity-30 mb-4">❝</div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatarUrl || '/api/placeholder/50/50'} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.region}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}