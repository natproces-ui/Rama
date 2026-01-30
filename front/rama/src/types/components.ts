// src/types/components.ts

export interface ImpactStats {
  womenHelped: number;
  communitiesSensitized: number;
  medicalPartners: number;
  yearsOfExperience: number;
}

export interface FooterProps {
  email: string;
  setEmail: (email: string) => void;
  handleNewsletterSubmit: () => void;
  loading: boolean;
  message: string;
}

export interface ImpactSectionProps {
  stats: ImpactStats;
}

export interface Newsletter {
  id?: string;
  email: string;
  subscribedAt: Date;
  isActive: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  region: string;
  text: string;
  avatarUrl?: string;
  isPublished?: boolean;  // ← Ajoutez cette ligne
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

export interface Contact {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status?: 'new' | 'in-progress' | 'resolved';
  createdAt?: Date;
}

export interface Donation {
  id?: string;
  donorName: string;
  donorEmail: string;
  amount: number;
  currency: string;
  message?: string;
  isAnonymous: boolean;
  status: 'pending' | 'completed' | 'failed';
  createdAt?: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}