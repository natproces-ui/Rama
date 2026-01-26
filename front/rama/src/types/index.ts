// src/types/index.ts

export interface Newsletter {
  id?: string;
  email: string;
  subscribedAt: Date;
  isActive: boolean;
}

export interface ImpactStats {
  id?: string;
  womenHelped: number;
  communitiesSensitized: number;
  medicalPartners: number;
  yearsOfExperience: number;
  lastUpdated?: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  region: string;
  text: string;
  avatarUrl?: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}


export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  isPublished?: boolean;
  createdAt?: any;
}

// src/types/index.ts ou components.ts
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content?: string;  // ← Ajouté
  author?: string;   // ← Ajouté
  category?: string; // ← Ajouté
  imageUrl: string;
  publishedAt: string;
  isPublished?: boolean;
  createdAt?: any;
}