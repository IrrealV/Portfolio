# Victor Heras Portfolio

Portfolio personal desarrollado con **Astro 5**, **TailwindCSS** y **TypeScript**. Diseño moderno y modular con animaciones fluidas, modo oscuro/claro y arquitectura limpia donde ningún archivo supera las 100 líneas.

## ✨ Características

- 🌗 **Modo Oscuro/Claro** - Persistente con localStorage, iconos dinámicos (sol/luna)
- 🎭 **View Transitions** - Navegación fluida con ClientRouter
- 📱 **Responsive** - Optimizado para móvil y desktop
- 🎮 **Easter Egg** - Click en el logo para una sorpresa 😉
- ⬆️ **Controles Flotantes** - Botón volver arriba + toggle tema
- 📊 **Timelines Interactivos** - Experiencia y educación con hover
- ⚡ **Performance** - Zero JavaScript innecesario
- 📄 **Descarga de CV** - Generación dinámica de PDF con html2pdf.js
- 🔔 **Notificaciones Toast** - Feedback visual para acciones del usuario
- ✨ **Fondo de Red Animado** - Partículas con líneas conectoras (desktop) / patrón estático (móvil)

## 🚀 Optimizaciones (PageSpeed 100/100)

El proyecto ha sido auditado y optimizado al máximo nivel técnico:

| Categoría         | Puntuación | Optimizaciones Clave                                                                  |
| :---------------- | :--------- | :------------------------------------------------------------------------------------ |
| **Rendimiento**   | **100**    | LCP optimizado (`content-visibility`), CSS Inline, JS Lazy Loading, Imágenes WebP.    |
| **Accesibilidad** | **100**    | Cumplimiento **WCAG AA**, colores de alto contraste, semántica HTML.                  |
| **SEO**           | **100**    | Keywords semánticas, metadatos dinámicos, sitemap XML, etiquetas OpenGraph completas. |
| **Prácticas**     | **100**    | Source maps activados, sin errores de consola, HTTPS estricto.                        |

### 🛡️ Seguridad Implementada

- **CSP (Content Security Policy)**: Política estricta con protección contra XSS.
- **Trusted Types**: Refuerzo contra inyección de DOM.
- **HSTS**: Preload habilitado (2 años) para forzar HTTPS.
- **COOP**: Aislamiento de origen cruzado para prevenir ataques side-channel.
- **Ofuscación de Email**: Protección contra scrapers de spam.

src/
├── components/
│ ├── icons/ # Iconos SVG como componentes
│ │ ├── SocialIcon.astro # GitHub, LinkedIn, Email
│ │ ├── TechIcon.astro # Iconos de tecnologías
│ │ └── icons.ts # Paths SVG centralizados
│ │
│ ├── sections/ # Secciones de página completas
│ │ ├── Hero.astro # Header con foto, nombre, social, CV
│ │ ├── AboutSection.astro # Sobre mí
│ │ ├── ExperienceEducation.astro # Timelines lado a lado
│ │ ├── ProjectsSection.astro # Grid de proyectos
│ │ ├── StackSection.astro # Tecnologías
│ │ ├── ContactSection.astro # CTA de contacto
│ │ └── ProjectDetail.astro # Detalle de proyecto individual
│ │
│ ├── ui/ # Componentes reutilizables
│ │ ├── Section.astro # Wrapper de sección
│ │ ├── TechPill.astro # Badge de tecnología
│ │ ├── Timeline.astro # Timeline horizontal
│ │ ├── TimelinePanel.astro # [NEW] Panel de detalle de timeline
│ │ ├── Typewriter.astro # Animación de texto
│ │ ├── ProjectCard.astro # Card de proyecto
│ │ ├── ThemeToggle.astro # Botón cambio de tema
│ │ ├── FloatingControls.astro # Botones flotantes (tema + scroll)
│ │ ├── NetworkBackground.astro # Fondo animado de partículas
│ │ └── ProfilePhoto.astro # [NEW] Foto de perfil con flip card
│ │
│ └── seo/ # [NEW] Componentes SEO y Metadatos
│ ├── SEOHead.astro # Metatags, OpenGraph, JSON-LD
│ └── ThemeScript.astro # Script de hidratación de tema (inline)
│
├── data/ # Datos separados por entidad
│ ├── index.ts # Barrel export (punto de entrada único)
│ ├── site.ts # Info del sitio (título, email)
│ ├── social.ts # Redes sociales
│ ├── stack.ts # Tecnologías del stack
│ ├── experience.ts # Experiencia laboral
│ ├── education.ts # Formación académica
│ └── projects.ts # Proyectos del portfolio
│
├── scripts/ # Lógica JavaScript modular
│ ├── theme.ts # Toggle de tema claro/oscuro
│ ├── typewriter.ts # Animación de texto
│ ├── timeline.ts # Interactividad del timeline
│ ├── navigation.ts # Back-to-top button
│ ├── easter-egg.ts # 🎮 Spin animation
│ ├── cv-generator.ts # Generación de CV en PDF
│ ├── cv-template.ts # Plantilla HTML del CV
│ ├── toast.ts # Sistema de notificaciones toast
│ │
│ └── network-background/ # [MODULAR] Animación de partículas
│ ├── index.ts # Orquestador
│ ├── events.ts # Manejo de eventos (mouse, resize)
│ ├── physics.ts # Física de partículas
│ ├── renderer.ts # Dibujado en canvas
│ ├── utils.ts # Utilidades y detección de dispositivo
│ └── types.ts # Definiciones de tipo
│
├── styles/ # CSS modular
│ ├── global.css # Solo imports
│ ├── theme.css # Variables de tema (colores)
│ ├── base.css # Estilos base (body, scrollbar)
│ ├── utilities.css # Clases utilitarias
│ └── animations.css # Keyframes y flip card
│
├── layouts/
│ └── Layout.astro # Layout principal limpio (<100 líneas)
│
├── pages/
│ ├── index.astro # Home - compone las secciones
│ └── projects/
│ └── [slug].astro # Páginas dinámicas de proyectos
│
└── types/
└── portfolio.ts # Tipos TypeScript

````

## 📦 Principios de Diseño

| Principio                      | Implementación                        |
| ------------------------------ | ------------------------------------- |
| **< 100 líneas**               | Cada archivo tiene máximo ~90 líneas  |
| **Barrel exports**             | `data/index.ts` centraliza exports    |
| **CSS modular**                | Estilos separados por responsabilidad |
| **Scripts externos**           | Lógica en `/scripts`, no inline       |
| **Secciones como componentes** | Cada sección en su archivo            |

## 🎨 Clases Utilitarias CSS

Definidas en `src/styles/utilities.css` para evitar duplicación:

| Clase              | Uso                                    |
| ------------------ | -------------------------------------- |
| `.btn`             | Base para botones (flex, gap, padding) |
| `.btn-primary`     | Botón con fondo de acento              |
| `.btn-secondary`   | Botón con borde (links, toggles)       |
| `.pill`            | Tags pequeños (tecnologías en cards)   |
| `.tech-pill`       | Pills más grandes con borde            |
| `.section-heading` | Headings h2 de sección                 |
| `.link-back`       | Links de navegación con icono          |

## 🚀 Comandos

```bash
# Instalar dependencias
bun install

# Servidor de desarrollo
bun dev

# Servidor accesible desde red local (móvil)
bun dev --host

# Build de producción
bun build

# Preview del build
bun preview
````

## 🔧 Personalización

### Cambiar datos personales

Edita los archivos en `src/data/`:

- `site.ts` - Nombre, email, descripción
- `social.ts` - Redes sociales
- `experience.ts` - Experiencia laboral
- `education.ts` - Formación
- `projects.ts` - Proyectos
- `stack.ts` - Tecnologías

### Cambiar colores del tema

Edita `src/styles/theme.css`:

```css
:root {
  --color-accent: #6366f1; /* Color principal */
}
```

### Añadir nuevos iconos de tecnología

1. Añade el path SVG en `src/components/icons/icons.ts`
2. El componente `TechIcon.astro` lo detectará automáticamente

### Personalizar el CV

Edita `src/scripts/cv-template.ts` para modificar el contenido y estilo del PDF generado.

## 📄 Licencia

MIT © Victor Manuel Heras
