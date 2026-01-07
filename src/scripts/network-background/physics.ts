import { CONFIG, type Particle } from './types';

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
