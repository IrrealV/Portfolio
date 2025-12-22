import type { ProjectItem, TechItem } from '../types/portfolio';

export const SITE_INFO = {
  title: 'Victor Heras | Portfolio',
  description:
    'SysAdmin & Fullstack Developer. Especialista en Astro, NestJS y DevOps.',
  email: 'contact@victorheras.me',
};

export const STACK: TechItem[] = [
  { name: 'NestJS', colorClass: 'text-red-500' },
  { name: 'Next.js', colorClass: 'text-white' },
  { name: 'Azure', colorClass: 'text-blue-500' },
  { name: 'Docker', colorClass: 'text-blue-400' },
  { name: 'Linux/Fedora', colorClass: 'text-blue-300' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'stack',
    title: 'Tech Stack',
    colSpan: 2, // Bento wide
  },
  {
    id: 'scrum-poker',
    title: 'ScrumPoker Live',
    url: 'https://poker.victorheras.me',
    description: 'Planificación WebSocket en tiempo real.',
    badge: 'Real-time',
    badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    colSpan: 1,
  },
  {
    id: 'super-prompt',
    title: 'SuperPrompt',
    url: 'https://superprompt.victorheras.me',
    description: 'Optimiza tus interacciones con IA.',
    badge: 'AI Tool',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    colSpan: 2,
  },
  {
    id: 'voice-booker',
    title: 'VoiceBooker',
    description: 'Agente de voz con IA.',
    badge: 'Coming Soon',
    badgeColor: 'bg-neutral-800 text-neutral-400',
    isComingSoon: true,
    colSpan: 1,
  },
  {
    id: 'contact',
    title: 'Contact',
    url: `mailto:${SITE_INFO.email}`,
    colSpan: 1,
  },
];
