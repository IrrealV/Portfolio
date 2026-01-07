import { CONFIG, type Particle } from './types';

export function isMobileDevice(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

export function getParticleColor(): string {
  const isDark = document.documentElement.classList.contains('dark');
  return isDark ? 'rgba(99, 102, 241, 0.8)' : 'rgba(99, 102, 241, 0.6)';
}

export function createParticle(
  canvasWidth: number,
  canvasHeight: number,
): Particle {
  const vx = (Math.random() - 0.5) * CONFIG.particleSpeed;
  const vy = (Math.random() - 0.5) * CONFIG.particleSpeed;
  return {
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    vx,
    vy,
    baseVx: vx,
    baseVy: vy,
    size: Math.random() * 2 + 1,
  };
}
