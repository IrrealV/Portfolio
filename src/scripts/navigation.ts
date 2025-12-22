// Navigation utilities - Back to top button

const SCROLL_THRESHOLD = 300;

export function initBackToTop(): void {
  const button = document.getElementById('back-to-top');
  if (!button) return;

  // Show/hide button based on scroll position
  function toggleVisibility(): void {
    if (window.scrollY > SCROLL_THRESHOLD) {
      button!.classList.remove('hidden');
      button!.classList.add('flex');
    } else {
      button!.classList.add('hidden');
      button!.classList.remove('flex');
    }
  }

  // Scroll to top on click
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Listen for scroll events
  window.addEventListener('scroll', toggleVisibility, { passive: true });

  // Initial check
  toggleVisibility();
}
