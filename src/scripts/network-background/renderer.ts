import type { Particle } from './types';

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
