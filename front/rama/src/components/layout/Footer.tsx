// src/components/rama/layout/Footer.tsx
'use client';

import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { FooterProps } from '@/types/components';

export default function Footer({ email, setEmail, handleNewsletterSubmit, loading, message }: FooterProps) {
  return (
    <footer id="contact" className="bg-purple-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Fondation Rama</h4>
            <p className="text-purple-100 leading-relaxed mb-4">
              Ensemble, luttons contre la fistule obstétricale et redonnons dignité et espoir aux femmes touchées.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-purple-500 hover:bg-purple-400 rounded-full flex items-center justify-center transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-500 hover:bg-purple-400 rounded-full flex items-center justify-center transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-500 hover:bg-purple-400 rounded-full flex items-center justify-center transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-500 hover:bg-purple-400 rounded-full flex items-center justify-center transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-100 hover:text-white transition">Accueil</a></li>
              <li><a href="#a-propos" className="text-purple-100 hover:text-white transition">À propos</a></li>
              <li><a href="#fistule" className="text-purple-100 hover:text-white transition">Fistule obstétricale</a></li>
              <li><a href="#actualites" className="text-purple-100 hover:text-white transition">Actualités</a></li>
              <li><a href="#contact" className="text-purple-100 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-purple-100">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Rue de l&apos;Espoir, Ville, Pays</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@fondationrama.org</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="text-purple-100 mb-4">
              Inscrivez-vous pour recevoir nos actualités
            </p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button 
                onClick={handleNewsletterSubmit}
                disabled={loading}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Inscription...' : 'S\'inscrire'}
              </button>
              {message && (
                <p className={`text-sm ${message.includes('succès') || message.includes('réussie') ? 'text-green-300' : 'text-red-300'}`}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500 pt-8 text-center">
          <p className="text-purple-100">
            © 2025 - Fondation Rama. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}