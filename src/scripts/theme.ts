// Theme toggle functionality
export function initTheme(): void {
  const toggle = document.getElementById('theme-toggle');

  function setTheme(isDark: boolean): void {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  toggle?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(!isDark);
  });
}
