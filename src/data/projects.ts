import type { Project } from '../types/portfolio';
import scrumPokerImg from '../assets/images/ScrumPoker.png';
import superPromptImg from '../assets/images/SuperPrompt.png';
import serDeAguaImg from '../assets/images/ser-de-agua.png';
import mesonSantosImg from '../assets/images/meson-santos.png';
import gentleAiImg from '../assets/images/gentle-ai.png';

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
    image: scrumPokerImg,
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
    image: superPromptImg,
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
    image: serDeAguaImg,
    url: 'https://ser-de-agua.vercel.app',
  },
  {
    slug: 'meson-santos',
    title: 'Mesón Santos',
    tagline:
      'Web gastronómica con carta interactiva 3D y SEO local avanzado para máxima visibilidad.',
    problem:
      'Los restaurantes tradicionales carecen de presencia digital efectiva. Sus webs suelen ser lentas, sin optimización SEO local y con cartas en PDF difíciles de navegar en móvil, perdiendo clientes que buscan "restaurantes cerca de mí".',
    solution:
      'Una web ultra-optimizada con puntuación perfecta (100/100) en todos los tests de PageSpeed. Incluye un flipbook 3D interactivo para explorar la carta de forma inmersiva, SEO local avanzado con datos estructurados y despliegue en Firebase para máxima disponibilidad.',
    stack: ['Astro 5', 'TailwindCSS v4', 'Firebase', 'SEO Local'],
    features: [
      '100/100 en todos los tests de PageSpeed',
      'Flipbook 3D interactivo para la carta',
      'SEO local avanzado con datos estructurados',
    ],
    image: mesonSantosImg,
    url: 'https://mesonsantos.com',
  },
  {
    slug: 'gentle-ai-contributor',
    title: 'Contribuidor Open Source & Orquestador de IA @ Gentle-AI (Gentleman Programming)',
    tagline:
      'Contribución OSS orientada a arquitectura de agentes, fiabilidad MCP y hardening de seguridad en Go.',
    problem:
      'El ecosistema multiagente de Gentle-AI necesitaba mejorar compatibilidad real entre IDEs (Windsurf), robustez de enrutamiento MCP y capacidad de desinstalación reversible sin fricción. Además, había inconsistencias en detección de monorepos profundos y riesgos técnicos en operaciones de escritura y limpieza de configuración.',
    solution:
      'Diseñé e implementé propuestas técnicas completas mediante PRs e issues trazables en GitHub: soporte nativo de Windsurf, corrección de path absoluto para Engram en MCP y mejoras de detección de raíz de workspace. También abrí y desarrollé una implementación avanzada de desinstalación granular con refuerzo de seguridad (atomic writes, validaciones anti-symlink, preservación de EOL y parsing numérico seguro), alineada con el modelo de reversibilidad del proyecto.',
    stack: [
      'Go 1.24',
      'Bubble Tea (TUI)',
      'MCP',
      'Golden Tests',
      'Docker',
      'GitHub PR/Issue Flow',
      'AI Orchestration',
    ],
    features: [
      'Issue #92 (status:approved -> completed): soporte nativo de Windsurf desplegado en release v1.11.0+ con adapter, detección, inyección de prompt/SDD y configuración MCP.',
      'Issue #123 (closed/completed): fix de enrutamiento MCP por path absoluto + mejora de detección de monorepos; publicado en v1.11.3.',
      'PR #163 (abierto): implementación de uninstall granular en TUI + hardening de seguridad en Go (atomic writes, límites de lectura, protección symlink, preservación CRLF y UseNumber en JSON).',
    ],
    image: gentleAiImg,
    urls: [
      { label: 'Mi Fork', url: 'https://github.com/IrrealV/gentle-ai' },
      { label: 'Repo Oficial', url: 'https://github.com/Gentleman-Programming/gentle-ai' },
    ],
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
