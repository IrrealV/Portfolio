// CV PDF Generator - Creates a professional resume PDF
import { generateCVHTML } from './cv-template';
import { showToast } from '../toast';

// CDN URL for html2pdf.js
const HTML2PDF_CDN =
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';

const PDF_OPTIONS = {
  margin: 0.5,
  filename: 'Victor_Heras_CV.pdf',
  image: { type: 'jpeg' as const, quality: 0.98 },
  html2canvas: { scale: 2, useCORS: true },
  jsPDF: {
    unit: 'in' as const,
    format: 'a4' as const,
    orientation: 'portrait' as const,
  },
};

// Type definition for html2pdf (loaded dynamically)
declare global {
  interface Window {
    html2pdf: any;
  }
}

async function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.html2pdf) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Error cargando librería PDF'));
    document.head.appendChild(script);
  });
}

export async function downloadCV(): Promise<void> {
  showToast('Cargando generador...', 'info', 1000);

  try {
    await loadScript(HTML2PDF_CDN);
    showToast('Generando CV...', 'info', 2000);

    const element = document.createElement('div');
    element.innerHTML = generateCVHTML();

    await window.html2pdf().set(PDF_OPTIONS).from(element).save();

    showToast('CV descargado correctamente', 'success', 3000);
  } catch (error) {
    console.error('PDF generation error:', error);
    showToast('Error al generar el PDF', 'error', 3000);
  }
}

export function initCVDownload(): void {
  const button = document.getElementById('download-cv');
  if (!button) return;

  // Prefetch the script on hover
  button.addEventListener(
    'mouseenter',
    () => {
      if (!window.html2pdf) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = HTML2PDF_CDN;
        document.head.appendChild(link);
      }
    },
    { once: true },
  );

  button.addEventListener('click', (e) => {
    e.preventDefault();
    downloadCV();
  });
}
