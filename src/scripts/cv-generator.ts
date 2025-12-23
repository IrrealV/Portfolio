// CV PDF Generator - Creates a professional resume PDF
import html2pdf from 'html2pdf.js';
import { EXPERIENCE, EDUCATION, STACK } from '../data';

// Contact info for the CV
const CV_INFO = {
  name: 'Víctor Manuel Heras Durillo',
  title: 'Desarrollador Fullstack',
  email: 'contact@victorheras.me',
  phone: '+34 658 204 691',
  location: 'Jaén, España',
  website: 'victorheras.me',
  linkedin: 'linkedin.com/in/vmheras',
  github: 'github.com/IrrealV',
};

function generateCVHTML(): string {
  const experienceHTML = EXPERIENCE.map(
    (exp) => `
    <div style="margin-bottom: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <strong style="color: #1a1a1a;">${exp.title}</strong>
        <span style="color: #666; font-size: 11px;">${exp.period}</span>
      </div>
      <div style="color: #6366f1; font-size: 12px;">${exp.company} · ${
      exp.location
    }</div>
      <p style="color: #444; font-size: 11px; margin: 4px 0;">${
        exp.description
      }</p>
      ${
        exp.bullets.length
          ? `<ul style="margin: 4px 0 0 16px; padding: 0; font-size: 11px; color: #555;">
        ${exp.bullets.map((b) => `<li>${b}</li>`).join('')}
      </ul>`
          : ''
      }
    </div>
  `,
  ).join('');

  const educationHTML = EDUCATION.map(
    (edu) => `
    <div style="margin-bottom: 10px;">
      <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <strong style="color: #1a1a1a; font-size: 12px;">${edu.degree}</strong>
        <span style="color: #666; font-size: 10px;">${edu.period}</span>
      </div>
      <div style="color: #6366f1; font-size: 11px;">${edu.institution}</div>
    </div>
  `,
  ).join('');

  const stackHTML = STACK.map((tech) => tech.name).join(' · ');

  return `
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; padding: 32px; max-width: 800px; margin: 0 auto; color: #1a1a1a; line-height: 1.5;">
      
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid #6366f1;">
        <h1 style="margin: 0 0 4px 0; font-size: 28px; font-weight: 700; color: #1a1a1a;">${
          CV_INFO.name
        }</h1>
        <p style="margin: 0 0 12px 0; font-size: 18px; color: #6366f1; font-weight: 600;">${
          CV_INFO.title
        }</p>
        <div style="font-size: 11px; color: #555;">
          📧 ${CV_INFO.email} · 📱 ${CV_INFO.phone} · 📍 ${CV_INFO.location}<br>
          🌐 ${CV_INFO.website} · 💼 ${CV_INFO.linkedin} · 💻 ${CV_INFO.github}
        </div>
      </div>

      <!-- About -->
      <div style="margin-bottom: 20px;">
        <h2 style="font-size: 14px; color: #6366f1; border-bottom: 1px solid #e5e5e5; padding-bottom: 4px; margin-bottom: 8px; letter-spacing: 2px;">PERFIL PROFESIONAL</h2>
        <p style="font-size: 12px; color: #333; margin: 0;">
          Desarrollador Fullstack con enfoque en infraestructura y tres años de experiencia técnica. 
          Especializado en construir aplicaciones modernas y eficientes usando Angular, NestJS y Astro. 
          Combinando formación en Ingeniería Telemática con mentalidad práctica para crear soluciones 
          escalables que aportan valor real al usuario final.
        </p>
      </div>

      <!-- Experience -->
      <div style="margin-bottom: 20px;">
        <h2 style="font-size: 14px; color: #6366f1; border-bottom: 1px solid #e5e5e5; padding-bottom: 4px; margin-bottom: 12px; letter-spacing: 2px;">EXPERIENCIA PROFESIONAL</h2>
        ${experienceHTML}
      </div>

      <!-- Education -->
      <div style="margin-bottom: 20px;">
        <h2 style="font-size: 14px; color: #6366f1; border-bottom: 1px solid #e5e5e5; padding-bottom: 4px; margin-bottom: 12px; letter-spacing: 2px;">FORMACIÓN ACADÉMICA</h2>
        ${educationHTML}
      </div>

      <!-- Skills (force new page to avoid cutting) -->
      <div style="margin-bottom: 16px; page-break-before: always; padding-top: 20px;">
        <h2 style="font-size: 14px; color: #6366f1; border-bottom: 1px solid #e5e5e5; padding-bottom: 4px; margin-bottom: 8px; letter-spacing: 2px;">TECNOLOGÍAS</h2>
        <p style="font-size: 12px; color: #333; margin: 0;">${stackHTML}</p>
      </div>

      <!-- Footer -->
      <div style="text-align: center; margin-top: 24px; padding-top: 12px; border-top: 1px solid #e5e5e5;">
        <p style="font-size: 10px; color: #888; margin: 0;">
          CV generado desde victorheras.me · ${new Date().toLocaleDateString(
            'es-ES',
            { year: 'numeric', month: 'long' },
          )}
        </p>
      </div>
    </div>
  `;
}

export function downloadCV(): void {
  const element = document.createElement('div');
  element.innerHTML = generateCVHTML();

  const opt = {
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

  html2pdf().set(opt).from(element).save();
}

export function initCVDownload(): void {
  const button = document.getElementById('download-cv');
  if (!button) return;

  button.addEventListener('click', (e) => {
    e.preventDefault();
    downloadCV();
  });
}
