import type {
  TechItem,
  Experience,
  Education,
  Project,
  SocialLink,
} from '../types/portfolio';

// ============================================
// SITE INFO
// ============================================

export const SITE_INFO = {
  title: 'Victor Heras | Portfolio',
  description:
    'Fullstack Developer. Especialista en NestJS, Next.js y DevOps. Estudiante de Ingeniería Telemática.',
  email: 'contact@victorheras.me',
};

// ============================================
// SOCIAL LINKS
// ============================================

export const SOCIALS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/IrrealV',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/vmheras',
    icon: 'linkedin',
  },
];

// ============================================
// TECH STACK (with icons for main display)
// ============================================

export const STACK: TechItem[] = [
  { name: 'NestJS', colorClass: 'text-red-500' },
  { name: 'Next.js', colorClass: 'text-black dark:text-white' },
  { name: 'Astro', colorClass: 'text-orange-500' },
  { name: 'Angular', colorClass: 'text-red-600' },
  { name: 'TypeScript', colorClass: 'text-blue-600' },
  { name: 'Node.js', colorClass: 'text-green-600' },
  { name: 'Docker', colorClass: 'text-blue-500' },
  { name: 'Azure', colorClass: 'text-blue-400' },
  { name: 'Linux', colorClass: 'text-amber-500' },
  { name: 'Git', colorClass: 'text-orange-600' },
];

// ============================================
// EXPERIENCE
// ============================================

export const EXPERIENCE: Experience[] = [
  {
    title: 'Especialista de Asistencia de TI',
    company: 'LA CASA DEL PC S.L.',
    location: 'Linares, España',
    period: 'Sept 2022 – Ago 2025',
    description:
      'Responsable del soporte técnico y operaciones IT en entornos retail/comercial.',
    bullets: [
      'Mantenimiento de hardware, redes y sistemas POS',
      'Aplicación de conocimientos en ciberseguridad para la protección de equipos',
      'Resolución de incidencias críticas bajo presión',
    ],
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'Acerca Solutions Smart Cities',
    location: 'La Carolina, España',
    period: 'Feb 2023 – Jun 2024',
    description:
      'Desarrollo de soluciones tecnológicas para entornos Smart City.',
    bullets: [
      'Implementación de arquitecturas escalables',
      'Trabajo con stack moderno integrando backend y frontend',
    ],
  },
  {
    title: 'Desarrollador Front-end',
    company: 'POKEMILLON',
    location: 'Salou, España (Remoto)',
    period: 'Ene 2022 – Ago 2023',
    description:
      'Desarrollo de interfaces para plataforma de comercio electrónico.',
    bullets: [
      'Optimización de la experiencia de usuario (UX/UI)',
      'Mantenimiento y mejora de funcionalidades en entorno web',
    ],
  },
  {
    title: 'Técnico Informático',
    company: 'Quantion',
    location: 'España',
    period: 'Sept 2020 – Dic 2020',
    description:
      'Soporte técnico y gestión de incidencias en infraestructuras de telecomunicaciones.',
    bullets: [],
  },
];

// ============================================
// EDUCATION
// ============================================

export const EDUCATION: Education[] = [
  {
    degree: 'Grado en Ingeniería Telemática',
    institution: 'Universidad de Jaén (UJA)',
    period: 'Actualidad – 2028',
    description:
      'Especialización en redes, sistemas de telecomunicación y telemática.',
  },
  {
    degree: 'Bootcamp en Ciberseguridad',
    institution: 'La Mina StartUp',
    period: 'Sept 2023 – Dic 2023',
    description:
      'Formación intensiva en seguridad informática y análisis de vulnerabilidades.',
  },
  {
    degree: 'Técnico Superior en DAM',
    institution: 'Estech',
    period: 'Sept 2021 – Jul 2023',
    description:
      'Desarrollo de Aplicaciones Multiplataforma. Programación móvil/web.',
  },
  {
    degree: 'Técnico en SMR',
    institution: 'IES Virgen del Carmen',
    period: '2018 – 2020',
    description:
      'Sistemas Microinformáticos y Redes. Hardware y administración de sistemas.',
  },
];

// ============================================
// PROJECTS
// ============================================

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
    image: '/ScrumPoker.png',
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
    image: '/SuperPrompt.png',
    url: 'https://superprompt.victorheras.me',
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
