// Theme toggle functionality
export function initTheme(): void {
  const toggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  function updateIcons(isDark: boolean): void {
    if (sunIcon && moonIcon) {
      // Sun shows in dark mode (click to go light)
      sunIcon.classList.toggle('hidden', !isDark);
      // Moon shows in light mode (click to go dark)
      moonIcon.classList.toggle('hidden', isDark);
    }
  }

  function setTheme(isDark: boolean): void {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcons(isDark);
  }

  // Set initial icon state
  const isDark = document.documentElement.classList.contains('dark');
  updateIcons(isDark);

  toggle?.addEventListener('click', () => {
    const currentlyDark = document.documentElement.classList.contains('dark');
    setTheme(!currentlyDark);
  });
}
