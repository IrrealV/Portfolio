// Navigation utilities - Back to top and hash cleanup

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

export function initHashCleanup(): void {
  // Clean hash from URL on page load (unless user explicitly navigated to it)
  if (window.location.hash && !sessionStorage.getItem('intentionalHash')) {
    // Small delay to let the page load first
    setTimeout(() => {
      history.replaceState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);
  }

  // Mark intentional hash navigation (e.g., clicking internal links)
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      sessionStorage.setItem('intentionalHash', 'true');
      // Clear the flag after navigation completes
      setTimeout(() => sessionStorage.removeItem('intentionalHash'), 1000);
    });
  });
}
