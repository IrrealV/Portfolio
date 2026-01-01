/**
 * Network Background - Main initialization
 * Animated particle network with mouse interaction
 */
import type { Particle } from './types';
import { CONFIG } from './types';
import {
  isMobileDevice,
  getParticleColor,
  createParticle,
  applyMouseRepulsion,
  moveParticle,
  drawParticle,
  drawConnection,
} from './particle';

export function initNetworkBackground(): void {
  // Cancel any existing animation loop to prevent stacking during SPA navigation
  if (window._networkBg?.animationId) {
    cancelAnimationFrame(window._networkBg.animationId);
    window._networkBg.animationId = 0;
  }

  // Skip if already running and canvas is still in DOM
  if (window._networkBg?.initialized && window._networkBg.canvas) {
    if (document.body.contains(window._networkBg.canvas)) {
      // Restart the animation loop (single instance)
      const canvas = window._networkBg.canvas;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const isMobile =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
          );
        const { connectionDistance } = isMobile
          ? CONFIG.mobile
          : CONFIG.desktop;

        const animate = (): void => {
          if (!window._networkBg?.initialized) return;
          const particles = window._networkBg.particles;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const color = document.documentElement.classList.contains('dark')
            ? 'rgba(99, 102, 241, 0.6)'
            : 'rgba(79, 70, 229, 0.4)';
          particles.forEach((p, i) => {
            moveParticle(p, canvas.width, canvas.height);
            drawParticle(ctx, p, color);
            for (let j = i + 1; j < particles.length; j++) {
              drawConnection(ctx, p, particles[j], connectionDistance, color);
            }
          });
          window._networkBg.animationId = requestAnimationFrame(animate);
        };
        window._networkBg.animationId = requestAnimationFrame(animate);
      }
      return;
    }
  }

  const canvas = document.getElementById('network-canvas') as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d')!;
  if (!ctx) return;

  const isMobile = isMobileDevice();
  const { particleCount, connectionDistance } = isMobile
    ? CONFIG.mobile
    : CONFIG.desktop;

  // State
  let mouse = { x: -1000, y: -1000 };
  let lastWidth = 0;

  // Initialize global state
  window._networkBg = {
    initialized: true,
    particles: [],
    animationId: 0,
    canvas,
  };

  // Setup canvas size
  function setupCanvas(): boolean {
    const newWidth = window.innerWidth;

    // On mobile, only resize when WIDTH changes (orientation change)
    if (lastWidth > 0 && isMobile && newWidth === lastWidth) {
      return false;
    }

    canvas.width = newWidth;
    canvas.height = isMobile ? window.screen.height : window.innerHeight;
    lastWidth = newWidth;
    return true;
  }

  // Create particles
  function createParticles(): void {
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(canvas.width, canvas.height));
    }
    window._networkBg!.particles = particles;
  }

  // Animation loop
  function animate(): void {
    if (!window._networkBg?.initialized) return;

    const particles = window._networkBg.particles;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const color = getParticleColor();

    particles.forEach((p, i) => {
      if (!isMobile) {
        applyMouseRepulsion(p, mouse.x, mouse.y);
      }

      moveParticle(p, canvas.width, canvas.height);
      drawParticle(ctx, p, color);

      for (let j = i + 1; j < particles.length; j++) {
        drawConnection(ctx, p, particles[j], connectionDistance, color);
      }
    });

    window._networkBg.animationId = requestAnimationFrame(animate);
  }

  // Event handlers
  const handleMouseMove = (e: MouseEvent) => {
    if (!isMobile) mouse = { x: e.clientX, y: e.clientY };
  };

  const handleMouseLeave = () => {
    mouse = { x: -1000, y: -1000 };
  };

  // Debounce resize
  let resizeTimeout: number;
  const handleResize = () => {
    if (resizeTimeout) cancelAnimationFrame(resizeTimeout);
    resizeTimeout = requestAnimationFrame(() => {
      if (setupCanvas() && window._networkBg?.particles.length === 0) {
        createParticles();
      }
    });
  };

  // Initialize
  setupCanvas();
  createParticles();
  window._networkBg.animationId = requestAnimationFrame(animate);

  // Attach event listeners
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', handleMouseLeave);
  window.addEventListener('resize', handleResize);

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    if (window._networkBg) {
      cancelAnimationFrame(window._networkBg.animationId);
      window._networkBg.initialized = false;
    }
  });
}
