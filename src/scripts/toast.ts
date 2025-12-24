// Toast notification system - Simple toast for user feedback

export function showToast(
  message: string,
  type: 'success' | 'info' | 'error' = 'info',
  duration: number = 3000,
): void {
  // Remove existing toast if any
  const existingToast = document.getElementById('toast-notification');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.id = 'toast-notification';

  // Colors based on type
  const colors = {
    success: { bg: '#10b981', icon: '✓' },
    info: { bg: '#6366f1', icon: 'ℹ' },
    error: { bg: '#ef4444', icon: '✕' },
  };

  const { bg, icon } = colors[type];

  toast.innerHTML = `
    <span style="margin-right: 8px;">${icon}</span>
    <span>${message}</span>
  `;

  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 24px;
    background: ${bg};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    display: flex;
    align-items: center;
    animation: slideIn 0.3s ease-out;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  `;

  // Add animation keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  document.body.appendChild(toast);

  // Auto-remove after duration
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease-in forwards';
    setTimeout(() => {
      toast.remove();
      style.remove();
    }, 300);
  }, duration);
}
