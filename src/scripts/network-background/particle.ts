/**
 * Particle physics and rendering functions
 */
import type { Particle } from './types';
import { CONFIG } from './types';

// ============================================
// UTILITY FUNCTIONS
// ============================================

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

// ============================================
// PARTICLE PHYSICS
// ============================================

export function applyMouseRepulsion(
  particle: Particle,
  mouseX: number,
  mouseY: number,
): void {
  const dx = particle.x - mouseX;
  const dy = particle.y - mouseY;
  const dist = Math.sqrt(dx * dx + dy * dy);

  if (dist < CONFIG.mouseRadius && dist > 0) {
    const force = (CONFIG.mouseRadius - dist) / CONFIG.mouseRadius;
    const angle = Math.atan2(dy, dx);
    particle.vx =
      particle.baseVx + Math.cos(angle) * force * CONFIG.mouseRepelStrength;
    particle.vy =
      particle.baseVy + Math.sin(angle) * force * CONFIG.mouseRepelStrength;
  } else {
    // Gradually return to base velocity
    particle.vx += (particle.baseVx - particle.vx) * 0.05;
    particle.vy += (particle.baseVy - particle.vy) * 0.05;
  }
}

export function moveParticle(
  particle: Particle,
  canvasWidth: number,
  canvasHeight: number,
): void {
  particle.x += particle.vx;
  particle.y += particle.vy;

  // Bounce off horizontal edges
  if (particle.x < 0 || particle.x > canvasWidth) {
    particle.vx *= -1;
    particle.baseVx *= -1;
    particle.x = Math.max(0, Math.min(canvasWidth, particle.x));
  }

  // Bounce off vertical edges
  if (particle.y < 0 || particle.y > canvasHeight) {
    particle.vy *= -1;
    particle.baseVy *= -1;
    particle.y = Math.max(0, Math.min(canvasHeight, particle.y));
  }
}

// ============================================
// RENDERING
// ============================================

export function drawParticle(
  ctx: CanvasRenderingContext2D,
  particle: Particle,
  color: string,
): void {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

export function drawConnection(
  ctx: CanvasRenderingContext2D,
  p1: Particle,
  p2: Particle,
  connectionDistance: number,
  baseColor: string,
): void {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const dist = Math.sqrt(dx * dx + dy * dy);

  if (dist < connectionDistance) {
    const opacity = (1 - dist / connectionDistance) * 0.6;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.strokeStyle = baseColor
      .replace('0.8', String(opacity))
      .replace('0.6', String(opacity));
    ctx.lineWidth = 0.8;
    ctx.stroke();
  }
}
