/**
 * Network Background - Animated particle network with mouse interaction
 * Creates a constellation-like effect with connecting lines between particles
 */

// ============================================
// TYPES
// ============================================

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  size: number;
}

interface NetworkState {
  initialized: boolean;
  particles: Particle[];
  animationId: number;
  canvas: HTMLCanvasElement | null;
}

// Extend Window to store global state
declare global {
  interface Window {
    _networkBg?: NetworkState;
  }
}

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
  desktop: { particleCount: 60, connectionDistance: 150 },
  mobile: { particleCount: 35, connectionDistance: 100 },
  particleSpeed: 0.4,
  mouseRadius: 120,
  mouseRepelStrength: 3,
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

function isMobileDevice(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

function getParticleColor(): string {
  const isDark = document.documentElement.classList.contains('dark');
  return isDark ? 'rgba(99, 102, 241, 0.8)' : 'rgba(99, 102, 241, 0.6)';
}

function createParticle(canvasWidth: number, canvasHeight: number): Particle {
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

function applyMouseRepulsion(
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

function moveParticle(
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

function drawParticle(
  ctx: CanvasRenderingContext2D,
  particle: Particle,
  color: string,
): void {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawConnection(
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

// ============================================
// MAIN INITIALIZATION
// ============================================

export function initNetworkBackground(): void {
  // Skip if already running
  if (window._networkBg?.initialized && window._networkBg.canvas) {
    if (document.body.contains(window._networkBg.canvas)) {
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
    const newHeight = window.innerHeight;

    // On mobile, only resize for orientation changes
    if (lastWidth > 0 && isMobile && Math.abs(newWidth - lastWidth) < 100) {
      return false;
    }

    canvas.width = newWidth;
    canvas.height = newHeight;
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
      // Apply mouse interaction (desktop only)
      if (!isMobile) {
        applyMouseRepulsion(p, mouse.x, mouse.y);
      }

      moveParticle(p, canvas.width, canvas.height);
      drawParticle(ctx, p, color);

      // Draw connections to other particles
      for (let j = i + 1; j < particles.length; j++) {
        drawConnection(ctx, p, particles[j], connectionDistance, color);
      }
    });

    window._networkBg.animationId = requestAnimationFrame(animate);
  }

  // Event handlers
  const handleMouseMove = (e: MouseEvent) => {
    if (!isMobile) {
      mouse = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseLeave = () => {
    mouse = { x: -1000, y: -1000 };
  };

  const handleResize = () => {
    if (setupCanvas() && window._networkBg?.particles.length === 0) {
      createParticles();
    }
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
