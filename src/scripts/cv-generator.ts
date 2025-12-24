// CV PDF Generator - Creates a professional resume PDF
import html2pdf from 'html2pdf.js';
import { generateCVHTML } from './cv-template';

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

export function downloadCV(): void {
  const element = document.createElement('div');
  element.innerHTML = generateCVHTML();
  html2pdf().set(PDF_OPTIONS).from(element).save();
}

export function initCVDownload(): void {
  const button = document.getElementById('download-cv');
  if (!button) return;

  button.addEventListener('click', (e) => {
    e.preventDefault();
    downloadCV();
  });
}
