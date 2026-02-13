// ============================================
// TECH & STACK
// ============================================

export interface TechItem {
  name: string;
  icon?: string;
  colorClass?: string;
}

// ============================================
// EXPERIENCE & EDUCATION
// ============================================

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

// ============================================
// PROJECTS
// ============================================

import type { ImageMetadata } from 'astro';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
  image?: ImageMetadata;
  url?: string;
  isComingSoon?: boolean;
}

// ============================================
// SOCIAL
// ============================================

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
