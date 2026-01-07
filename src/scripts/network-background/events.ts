import { isMobileDevice } from './utils';

export function handleMouseMove(e: MouseEvent): void {
  const isMobile = isMobileDevice();
  if (!isMobile && window._networkBg) {
    window._networkBg.mouse = { x: e.clientX, y: e.clientY };
  }
}

export function handleMouseLeave(): void {
  if (window._networkBg) {
    window._networkBg.mouse = { x: -1000, y: -1000 };
  }
}

export function setupEventListeners(): void {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', handleMouseLeave);
}
