import type { Project } from '../types/portfolio';

// Portfolio projects
export const PROJECTS: Project[] = [
  {
    slug: 'scrum-poker',
    title: 'ScrumPoker Live',
    tagline: 'Planificación ágil en tiempo real, sin fricción y ultra-rápida.',
    problem:
      'Las sesiones de estimación (Planning Poker) en equipos remotos suelen ser tediosas. Las herramientas existentes obligan a registros complejos, son lentas o están llenas de publicidad. Los equipos pierden tiempo configurando la sala en lugar de estimando tareas.',
    solution:
      'Una plataforma de votación en tiempo real diseñada bajo la filosofía "Zero-Friction". Sin bases de datos persistentes para usuarios invitados, garantizando privacidad y velocidad instantánea. Permite a los equipos unirse mediante un simple ID de sala y votar simultáneamente.',
    stack: [
      'Next.js 15',
      'NestJS',
      'Socket.io',
      'TailwindCSS',
      'Bun',
      'Docker',
      'Azure',
    ],
    features: [
      'Comunicación bidireccional con Websockets',
      'Arquitectura Monorepo',
      'Diseño Mobile-First',
    ],
    image: '/ScrumPoker.webp',
    url: 'https://poker.victorheras.me',
  },
  {
    slug: 'super-prompt',
    title: 'SuperPrompt',
    tagline:
      'Ingeniería de Prompts asistida para maximizar el potencial de la IA.',
    problem:
      'El síndrome del "lienzo en blanco" al usar LLMs. La mayoría de usuarios obtienen resultados mediocres porque no saben estructurar el contexto, el rol y las restricciones necesarias.',
    solution:
      'Una interfaz estructurada que guía al usuario para componer el "Prompt Perfecto". Separa lógicamente la instrucción, el contexto y el formato de salida. Genera plantillas reutilizables y optimizadas para diferentes modelos de IA.',
    stack: ['Astro 5', 'NestJS', 'Bun', 'Docker', 'Azure'],
    features: [
      'Rendimiento extremo (<100ms)',
      'Gestión de contexto sin alucinaciones',
      'Diseño modular y accesible',
    ],
    image: '/SuperPrompt.webp',
    url: 'https://superprompt.victorheras.me',
  },
  {
    slug: 'ser-de-agua',
    title: 'Ser de Agua',
    tagline:
      'Rediseño web moderno para un psicólogo, priorizando rendimiento y experiencia de usuario.',
    problem:
      'La web original (serdeagua.com) tenía un diseño anticuado, tiempos de carga lentos y no estaba optimizada para dispositivos móviles, lo que afectaba la captación de clientes potenciales.',
    solution:
      'Una refactorización completa con un diseño limpio, minimalista y profesional. Optimización extrema de rendimiento (100/100 PageSpeed), SEO mejorado y experiencia mobile-first para transmitir confianza y profesionalidad.',
    stack: ['Astro 5', 'TailwindCSS', 'TypeScript', 'Vercel'],
    features: [
      'Diseño minimalista y profesional',
      'Rendimiento 100/100 PageSpeed',
      'SEO optimizado para servicios locales',
    ],
    image: '/ser-de-agua.webp',
    url: 'https://ser-de-agua.vercel.app',
  },
  {
    slug: 'voice-booker',
    title: 'VoiceBooker',
    tagline:
      'IA Conversacional para automatizar la gestión de reservas en hostelería.',
    problem:
      'Los restaurantes pierden reservas en horas punta porque no pueden atender el teléfono. El personal interrumpe el servicio para anotar mesas, generando estrés y errores humanos.',
    solution:
      'Un agente de voz basado en IA capaz de mantener una conversación natural telefónica, consultar disponibilidad en tiempo real y cerrar reservas sin intervención humana.',
    stack: ['LLM', 'Text-to-Speech', 'NestJS', 'Serverless'],
    features: [
      'Conversación natural telefónica',
      'Integración con libro de reservas',
      'Escalado automático',
    ],
    isComingSoon: true,
  },
];
