// Easter egg: Spin animation with whoosh sound
const SPIN_DURATION = 800;

function playCartoonSpinSound(): void {
  try {
    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const bufferSize = audioContext.sampleRate * 0.8;
    const buffer = audioContext.createBuffer(
      1,
      bufferSize,
      audioContext.sampleRate,
    );
    const data = buffer.getChannelData(0);

    // Generate white noise
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = audioContext.createBufferSource();
    whiteNoise.buffer = buffer;

    // Bandpass filter for whoosh character
    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(100, audioContext.currentTime);
    filter.frequency.exponentialRampToValueAtTime(
      2000,
      audioContext.currentTime + 0.3,
    );
    filter.frequency.exponentialRampToValueAtTime(
      300,
      audioContext.currentTime + 0.6,
    );
    filter.Q.value = 1;

    // Gain envelope
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.4);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.7,
    );

    // Connect and play
    whiteNoise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    whiteNoise.start(audioContext.currentTime);
    whiteNoise.stop(audioContext.currentTime + 0.8);
  } catch {
    // Audio not supported, silently fail
  }
}

function activateSpin(
  main: HTMLElement,
  setSpinning: (v: boolean) => void,
): void {
  playCartoonSpinSound();

  main.style.transformOrigin = 'center center';
  main.style.animation = 'smoothSpin 0.8s ease-in-out forwards';

  setTimeout(() => {
    main.style.animation = '';
    setSpinning(false);
  }, SPIN_DURATION + 100);
}

export function initSpinEasterEgg(): void {
  const trigger = document.getElementById('gravity-trigger');
  if (!trigger) return;

  let isSpinning = false;

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    if (isSpinning) return;

    isSpinning = true;
    const main = document.querySelector('main');
    if (main) {
      activateSpin(main, (v) => (isSpinning = v));
    } else {
      isSpinning = false;
    }
  });
}
