// Timeline interactive panels functionality
export function initTimelines(): void {
  document.querySelectorAll('.timeline-wrapper').forEach((wrapper) => {
    const items = wrapper.querySelectorAll('.timeline-item');
    const panels = wrapper.querySelectorAll('.timeline-panel');

    let hideTimeout: ReturnType<typeof setTimeout> | null = null;

    function showPanel(index: number): void {
      if (hideTimeout) clearTimeout(hideTimeout);

      panels.forEach((panel, i) => {
        panel.classList.toggle('active', i === index);
      });

      items.forEach((item, i) => {
        item.setAttribute('aria-expanded', i === index ? 'true' : 'false');
      });
    }

    function hidePanel(): void {
      hideTimeout = setTimeout(() => {
        panels.forEach((panel) => panel.classList.remove('active'));
        items.forEach((item) => item.setAttribute('aria-expanded', 'false'));
      }, 150);
    }

    // Attach events to timeline items
    items.forEach((item) => {
      const index = parseInt(item.getAttribute('data-index') || '0', 10);

      item.addEventListener('mouseenter', () => showPanel(index));
      item.addEventListener('focus', () => showPanel(index));
      item.addEventListener('mouseleave', hidePanel);
      item.addEventListener('blur', hidePanel);
    });

    // Keep panel visible when hovering over it
    panels.forEach((panel) => {
      panel.addEventListener('mouseenter', () => {
        if (hideTimeout) clearTimeout(hideTimeout);
      });
      panel.addEventListener('mouseleave', hidePanel);
    });
  });
}
