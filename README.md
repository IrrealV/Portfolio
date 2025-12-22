# Victor Heras Portfolio

Portfolio personal desarrollado con **Astro 5**, **TailwindCSS** y **TypeScript**. Diseño moderno y modular con animaciones fluidas, modo oscuro/claro y arquitectura limpia donde ningún archivo supera las 100 líneas.

## ✨ Características

- 🌗 **Modo Oscuro/Claro** - Persistente con localStorage
- 🎭 **View Transitions** - Navegación fluida con ClientRouter
- 📱 **Responsive** - Optimizado para móvil y desktop
- 🎮 **Easter Egg** - Click en el logo para una sorpresa 😉
- ⬆️ **Controles Flotantes** - Botón volver arriba + toggle tema
- 📊 **Timelines Interactivos** - Experiencia y educación con hover
- ⚡ **Performance** - Zero JavaScript innecesario

## 🏗️ Arquitectura del Proyecto

```
src/
├── components/
│   ├── icons/              # Iconos SVG como componentes
│   │   ├── SocialIcon.astro    # GitHub, LinkedIn, Email
│   │   ├── TechIcon.astro      # Iconos de tecnologías
│   │   └── icons.ts            # Paths SVG centralizados
│   │
│   ├── sections/           # Secciones de página completas
│   │   ├── Hero.astro              # Header con foto, nombre, social
│   │   ├── AboutSection.astro      # Sobre mí
│   │   ├── ExperienceEducation.astro # Timelines lado a lado
│   │   ├── ProjectsSection.astro   # Grid de proyectos
│   │   ├── StackSection.astro      # Tecnologías
│   │   ├── ContactSection.astro    # CTA de contacto
│   │   └── ProjectDetail.astro     # Detalle de proyecto individual
│   │
│   └── ui/                 # Componentes reutilizables
│       ├── Section.astro           # Wrapper de sección
│       ├── TechPill.astro          # Badge de tecnología
│       ├── Timeline.astro          # Timeline horizontal
│       ├── Typewriter.astro        # Animación de texto
│       ├── ProjectCard.astro       # Card de proyecto
│       └── FloatingControls.astro  # Botones flotantes
│
├── data/                   # Datos separados por entidad
│   ├── index.ts            # Barrel export (punto de entrada único)
│   ├── site.ts             # Info del sitio (título, email)
│   ├── social.ts           # Redes sociales
│   ├── stack.ts            # Tecnologías del stack
│   ├── experience.ts       # Experiencia laboral
│   ├── education.ts        # Formación académica
│   └── projects.ts         # Proyectos del portfolio
│
├── scripts/                # Lógica JavaScript modular
│   ├── theme.ts            # Toggle de tema claro/oscuro
│   ├── typewriter.ts       # Animación de texto
│   ├── timeline.ts         # Interactividad del timeline
│   ├── navigation.ts       # Back-to-top button
│   └── easter-egg.ts       # 🎮 Spin animation
│
├── styles/                 # CSS modular
│   ├── global.css          # Solo imports
│   ├── theme.css           # Variables de tema (colores)
│   ├── base.css            # Estilos base (body, scrollbar)
│   ├── utilities.css       # Clases utilitarias
│   └── animations.css      # Keyframes y flip card
│
├── layouts/
│   └── Layout.astro        # Layout principal con head, footer
│
├── pages/
│   ├── index.astro         # Home - compone las secciones
│   └── projects/
│       └── [slug].astro    # Páginas dinámicas de proyectos
│
└── types/
    └── portfolio.ts        # Tipos TypeScript
```

## 📦 Principios de Diseño

| Principio                      | Implementación                        |
| ------------------------------ | ------------------------------------- |
| **< 100 líneas**               | Cada archivo tiene máximo ~90 líneas  |
| **Barrel exports**             | `data/index.ts` centraliza exports    |
| **CSS modular**                | Estilos separados por responsabilidad |
| **Scripts externos**           | Lógica en `/scripts`, no inline       |
| **Secciones como componentes** | Cada sección en su archivo            |

## 🚀 Comandos

```bash
# Instalar dependencias
bun install

# Servidor de desarrollo
bun dev

# Build de producción
bun build

# Preview del build
bun preview
```

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

## 📄 Licencia

MIT © Victor Manuel Heras
