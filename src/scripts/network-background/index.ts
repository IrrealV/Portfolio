/**
 * Network Background - Main initialization
 * Animated particle network with mouse interaction
 */
import type { Particle } from './types';
import { CONFIG } from './types';
import { isMobileDevice, getParticleColor, createParticle } from './utils';
import { applyMouseRepulsion, moveParticle } from './physics';
import { drawParticle, drawConnection } from './renderer';
import { setupEventListeners, handleMouseLeave } from './events';

export function initNetworkBackground(): void {
  // Cancel any existing animation loop
  if (window._networkBg?.animationId) {
    cancelAnimationFrame(window._networkBg.animationId);
    window._networkBg.animationId = 0;
  }

  const canvas = document.getElementById('network-canvas') as HTMLCanvasElement;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let lastWidth = 0;

  // Initialize global state
  window._networkBg = {
    initialized: true,
    particles: [],
    animationId: 0,
    canvas,
    mouse: { x: -1000, y: -1000 },
  };

  const isMobile = isMobileDevice();
  const { particleCount, connectionDistance } = isMobile
    ? CONFIG.mobile
    : CONFIG.desktop;

  function setupCanvas(): boolean {
    const newWidth = window.innerWidth;
    // On mobile, only resize when WIDTH changes (orientation change)
    if (lastWidth > 0 && isMobile && newWidth === lastWidth) return false;

    canvas.width = newWidth;
    canvas.height = isMobile ? window.screen.height : window.innerHeight;
    lastWidth = newWidth;
    return true;
  }

  function createParticles(): void {
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(canvas.width, canvas.height));
    }
    window._networkBg!.particles = particles;
  }

  function animate(): void {
    if (!window._networkBg?.initialized) return;
    const { particles, mouse } = window._networkBg;

    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    const color = getParticleColor();

    particles.forEach((p, i) => {
      if (!isMobile && mouse) applyMouseRepulsion(p, mouse.x, mouse.y);
      moveParticle(p, canvas.width, canvas.height);
      drawParticle(ctx!, p, color);
      for (let j = i + 1; j < particles.length; j++) {
        drawConnection(ctx!, p, particles[j], connectionDistance, color);
      }
    });
    window._networkBg.animationId = requestAnimationFrame(animate);
  }

  // Orchestrate resize
  let resizeTimeout: number;
  const handleResize = () => {
    if (resizeTimeout) cancelAnimationFrame(resizeTimeout);
    resizeTimeout = requestAnimationFrame(() => {
      if (setupCanvas() && window._networkBg?.particles.length === 0) {
        createParticles();
      }
    });
  };

  setupCanvas();
  createParticles();
  setupEventListeners();
  window.addEventListener('resize', handleResize);

  // Cleanup
  window.addEventListener('beforeunload', () => {
    if (window._networkBg) {
      cancelAnimationFrame(window._networkBg.animationId);
      window._networkBg.initialized = false;
    }
  });

  window._networkBg.animationId = requestAnimationFrame(animate);
}
