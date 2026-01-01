/**
 * Types and configuration for Network Background
 */

// ============================================
// TYPES
// ============================================

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  size: number;
}

export interface NetworkState {
  initialized: boolean;
  particles: Particle[];
  animationId: number;
  canvas: HTMLCanvasElement | null;
  mouse: { x: number; y: number };
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

export const CONFIG = {
  desktop: { particleCount: 60, connectionDistance: 150 },
  mobile: { particleCount: 35, connectionDistance: 100 },
  particleSpeed: 0.4,
  mouseRadius: 120,
  mouseRepelStrength: 3,
};
