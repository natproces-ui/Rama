'use client';

import { useState } from 'react';
import { Menu, X,  UserCog } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Afficher le menu complet uniquement sur la page d'accueil
  const showFullMenu = pathname === '/' || pathname === '/rama';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Toujours visible */}
          <Link 
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img 
              src="/images/rama-logo.jpeg" 
              alt="Fondation Rama" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation Desktop - SEULEMENT sur page d'accueil */}
          {showFullMenu && (
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={scrollToTop}
                className="text-gray-700 hover:text-purple-600 font-medium transition"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('a-propos')}
                className="text-gray-700 hover:text-purple-600 font-medium transition"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('fistule')}
                className="text-gray-700 hover:text-purple-600 font-medium transition"
              >
                Fistule obstétricale
              </button>
              <button 
                onClick={() => scrollToSection('actualites')}
                className="text-gray-700 hover:text-purple-600 font-medium transition"
              >
                Actualités
              </button>
              <button 
                onClick={() => scrollToSection('don')}
                className="text-gray-700 hover:text-purple-600 font-medium transition"
              >
                Faire un don
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-purple-600 font-medium transition"
              >
                Contact
              </button>
            </nav>
          )}

          {/* Boutons à droite - Toujours visibles */}
          <div className="flex items-center gap-4">
            {/* Lien Admin */}
            <Link 
              href="/admin"
              className="hidden md:flex items-center gap-2 text-gray-600 hover:text-purple-600 transition"
              title="Administration"
            >
              < UserCog className="w-5 h-5" />
            </Link>

            {/* Bouton Don - change selon la page */}
            {showFullMenu ? (
              // Sur page d'accueil : scroll vers section
              <button 
                onClick={() => scrollToSection('don')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
              >
                Faire un don
              </button>
            ) : (
              // Sur autres pages : lien vers page d'accueil
              <Link 
                href="/#don"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
              >
                Faire un don
              </Link>
            )}
            
            {/* Menu mobile - SEULEMENT sur page d'accueil */}
            {showFullMenu && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-purple-600"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}
          </div>
        </div>

        {/* Menu Mobile - SEULEMENT sur page d'accueil */}
        {showFullMenu && mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={scrollToTop}
                className="text-gray-700 hover:text-purple-600 font-medium transition text-left"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('a-propos')}
                className="text-gray-700 hover:text-purple-600 font-medium transition text-left"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('fistule')}
                className="text-gray-700 hover:text-purple-600 font-medium transition text-left"
              >
                Fistule obstétricale
              </button>
              <button 
                onClick={() => scrollToSection('actualites')}
                className="text-gray-700 hover:text-purple-600 font-medium transition text-left"
              >
                Actualités
              </button>
              <button 
                onClick={() => scrollToSection('don')}
                className="text-gray-700 hover:text-purple-600 font-medium transition text-left"
              >
                Faire un don
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-purple-600 font-medium transition text-left"
              >
                Contact
              </button>
              
              {/* Lien Admin Mobile */}
              <Link 
                href="/admin"
                className="flex items-center gap-2 text-gray-700 hover:text-purple-600 font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                < UserCog className="w-5 h-5" />
                Administration
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}