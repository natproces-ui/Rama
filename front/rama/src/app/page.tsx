// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { ImpactStats } from '@/types/components';

// Layout

import Footer from '@/components/layout/Footer';


// Home
import HeroSection from '@/components/home/HeroSection';
import CTASection from '@/components/home/CTASection';

// About
import MissionSection from '@/components/about/MissionSection';
import VisionSection from '@/components/about/VisionSection';
import HistorySection from '@/components/about/HistorySection';
import TeamSection from '@/components/about/TeamSection';

// Fistula
import ExplanationSection from '@/components/fistula/ExplanationSection';
import TestimonialsSection from '@/components/fistula/TestimonialsSection';
import ResourcesSection from '@/components/fistula/ResourcesSection';

// Impact
import ImpactSection from '@/components/impact/ImpactSection';

// News & Partners
import NewsSection from '@/components/news/NewsSection';
import PartnersSection from '@/components/partners/PartnersSection';

// Donation
import DonationInfoSection from '@/components/donation/DonationInfoSection';

// Contact
import ContactSection from '@/components/contact/ContactSection';

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
      setMessage('Veuillez entrer une adress email valide');
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
    
      <HeroSection />
      <MissionSection />
      <VisionSection />
      <ImpactSection stats={stats} />
      <HistorySection />
      <TeamSection />
      <ExplanationSection />
      <TestimonialsSection />
      <ResourcesSection />
      <CTASection />
      <NewsSection />
      <PartnersSection />
      <DonationInfoSection />
      <ContactSection />
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