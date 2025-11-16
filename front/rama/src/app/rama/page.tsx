'use client';

import { useState, useEffect } from 'react';
import { Heart, Users, Award, Calendar, ArrowRight, Facebook, Instagram, Twitter, Linkedin, Menu, X } from 'lucide-react';

interface ImpactStats {
  womenHelped: number;
  communitiesSensitized: number;
  medicalPartners: number;
  yearsOfExperience: number;
}

interface Testimonial {
  id: string;
  name: string;
  region: string;
  text: string;
  avatarUrl?: string;
}

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
}

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

// Component 1: Header - Navigation complète avec mobile
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          {/* Logo cliquable */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img 
              src="/images/rama-logo.jpeg" 
              alt="Fondation Rama" 
              className="h-12 w-auto"
            />
          </button>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={scrollToTop}
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
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
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              Contact
            </button>
          </nav>

          {/* Bouton Don + Menu Mobile */}
          <div className="flex items-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold transition shadow-md hover:shadow-lg">
              Faire un don
            </button>
            
            {/* Bouton Menu Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-purple-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={scrollToTop}
                className="text-gray-700 hover:text-purple-600 font-medium transition text-left"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-gray-700 hover:text-purple-600 font-medium transition text-left"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
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
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-purple-600 font-medium transition text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Component 2: Hero Section
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ensemble contre la fistule obstétricale
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Redonnons dignité et espoir aux femmes touchées
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition shadow-lg text-lg">
              Faire un don
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition text-lg">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component 3: Mission Section
function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La Fondation Rama lutte activement contre la fistule obstétricale à travers la
            sensibilisation, la prise en charge médicale et la réinsertion sociale des femmes touchées.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sensibilisation</h3>
            <p className="text-gray-600 leading-relaxed">
              Nous informons les communautés sur les causes de la fistule obstétricale et comment la prévenir.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prise en charge</h3>
            <p className="text-gray-600 leading-relaxed">
              Nous facilitons l'accès aux soins médicaux et chirurgicaux pour les femmes atteintes.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Réinsertion</h3>
            <p className="text-gray-600 leading-relaxed">
              Nous accompagnons les femmes dans leur réinsertion sociale et économique après leur guérison.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component 4: Impact Section
function ImpactSection({ stats }: { stats: ImpactStats }) {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Grâce à votre soutien, nous avons pu accomplir des progrès significatifs dans la lutte
            contre la fistule obstétricale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-purple-600 mb-2">
              {stats.womenHelped}+
            </h3>
            <p className="text-gray-700 font-medium">Femmes soignées</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-purple-600 mb-2">
              {stats.communitiesSensitized}+
            </h3>
            <p className="text-gray-700 font-medium">Communautés sensibilisées</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-purple-600 mb-2">
              {stats.medicalPartners}+
            </h3>
            <p className="text-gray-700 font-medium">Partenaires médicaux</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-purple-600 mb-2">
              {stats.yearsOfExperience}+
            </h3>
            <p className="text-gray-700 font-medium">Années d'expérience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component 5: Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      id: '1',
      name: 'Aminata K.',
      region: 'Région de Kaolack',
      text: '"Grâce à la Fondation Rama, j\'ai pu retrouver ma dignité et réintégrer ma communauté. Je suis maintenant une femme nouvelle, pleine d\'espoir."',
      avatarUrl: '/api/placeholder/50/50'
    },
    {
      id: '2',
      name: 'Fatoumata D.',
      region: 'Région de Dakar',
      text: '"Après des années de souffrance et d\'isolement, ma vie a changé. Aujourd\'hui, je suis guérie et je redécouvre le bonheur avec ma famille."',
      avatarUrl: '/api/placeholder/50/50'
    },
    {
      id: '3',
      name: 'Kadiatou T.',
      region: 'Région de Mboki',
      text: '"Je pensais que ma vie était finie quand j\'ai développé une fistule. La Fondation Rama m\'a non seulement soignée mais aussi formée à un métier."',
      avatarUrl: '/api/placeholder/50/50'
    }
  ];

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
                  src={testimonial.avatarUrl} 
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

// Component 6: CTA Section (Rejoignez notre combat)
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/api/placeholder/1920/400" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Rejoignez notre combat
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Votre soutien peut transformer des vies. Ensemble, mettons fin à la souffrance causée par 
          la fistule obstétricale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition shadow-lg text-lg">
            Faire un don
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold transition text-lg">
            Devenir bénévole
          </button>
        </div>
      </div>
    </section>
  );
}

// Component 7: News Section (Actualités récentes)
function NewsSection() {
  const news: NewsArticle[] = [
    {
      id: '1',
      title: 'Campagne de sensibilisation dans la région de Kayes',
      excerpt: 'Notre équipe a mené une campagne de sensibilisation auprès de 10 villages de la région de Kayes...',
      imageUrl: '/api/placeholder/400/200',
      publishedAt: '12 jan 2025'
    },
    {
      id: '2',
      title: 'Nouveau partenariat avec l\'hôpital régional',
      excerpt: 'La Fondation a initié un partenariat avec l\'hôpital régional de Sikasso pour améliorer l\'accès aux soins...',
      imageUrl: '/api/placeholder/400/200',
      publishedAt: '08 jan 2025'
    },
    {
      id: '3',
      title: 'Formation des agents de santé communautaire',
      excerpt: 'Nous avons formé 40 agents sur la détection précoce des complications liées à la grossesse...',
      imageUrl: '/api/placeholder/400/200',
      publishedAt: '05 jan 2025'
    }
  ];

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
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {article.publishedAt}
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

// Component 8: Partners Section
function PartnersSection() {
  const partners: Partner[] = [
    { id: '1', name: 'Partenaire 1', logoUrl: '/api/placeholder/120/60' },
    { id: '2', name: 'Partenaire 2', logoUrl: '/api/placeholder/120/60' },
    { id: '3', name: 'Partenaire 3', logoUrl: '/api/placeholder/120/60' },
    { id: '4', name: 'Partenaire 4', logoUrl: '/api/placeholder/120/60' },
    { id: '5', name: 'Partenaire 5', logoUrl: '/api/placeholder/120/60' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos partenaires
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec des organisations partageant notre vision pour maximiser notre impact.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="bg-white rounded-xl p-6 flex items-center justify-center min-h-[120px] shadow-sm hover:shadow-md transition group"
            >
              <img 
                src={partner.logoUrl} 
                alt={partner.name}
                className="max-w-full h-auto opacity-70 group-hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Component 9: Footer with Newsletter
function Footer({ email, setEmail, handleNewsletterSubmit, loading, message }: any) {
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
              <li><a href="#" className="text-purple-100 hover:text-white transition">À propos</a></li>
              <li><a href="#" className="text-purple-100 hover:text-white transition">Fistule obstétricale</a></li>
              <li><a href="#" className="text-purple-100 hover:text-white transition">Actualités</a></li>
              <li><a href="#" className="text-purple-100 hover:text-white transition">Contact</a></li>
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
                <span>123 Rue de l'Espoir, Ville, Pays</span>
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

// Main Page Component
export default function RamaPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [stats, setStats] = useState<ImpactStats>({
    womenHelped: 500,
    communitiesSensitized: 50,
    medicalPartners: 20,
    yearsOfExperience: 10
  });

  // Fetch stats on mount
  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats');
      const data = await response.json();
      if (data.success && data.data) {
        setStats(data.data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const handleNewsletterSubmit = async () => {
    if (!email || !email.includes('@')) {
      setMessage('Veuillez entrer une adresse email valide');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message || 'Inscription réussie !');
        set
        setEmail('');
      } else {
        setMessage(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setMessage('Erreur lors de l\'inscription');
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <MissionSection />
      <ImpactSection stats={stats} />
      <TestimonialsSection />
      <CTASection />
      <NewsSection />
      <PartnersSection />
      <Footer 
        email={email}
        setEmail={setEmail}
        handleNewsletterSubmit={handleNewsletterSubmit}
        loading={loading}
        message={message}
      />
    </div>
  );
}