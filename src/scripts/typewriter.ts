// Typewriter effect configuration
const ROLES = [
  'Front End Developer',
  'Back End Developer',
  'Fullstack Developer',
];
const TYPE_SPEED = 80;
const DELETE_SPEED = 50;
const WAIT_TIME = 1500;

export function initTypewriter(): void {
  const textEl = document.getElementById('typewriter-text');
  if (!textEl) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isWaiting = false;

  function type(): void {
    const currentRole = ROLES[roleIndex];

    if (isWaiting) return;

    if (!isDeleting) {
      // Typing
      textEl!.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        // Last role - stop and hide cursor
        if (roleIndex === ROLES.length - 1) {
          const cursor = document.querySelector(
            '.typewriter-cursor',
          ) as HTMLElement;
          if (cursor) cursor.style.display = 'none';
          return;
        }

        isWaiting = true;
        setTimeout(() => {
          isWaiting = false;
          isDeleting = true;
          type();
        }, WAIT_TIME);
        return;
      }
    } else {
      // Deleting
      textEl!.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex++;
      }
    }

    setTimeout(type, isDeleting ? DELETE_SPEED : TYPE_SPEED);
  }

  // Start after a small delay
  setTimeout(type, 500);
}
