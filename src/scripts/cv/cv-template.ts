// CV HTML Template - Separated for maintainability
import { ABOUT, EDUCATION, EXPERIENCE, LANGUAGES, PROFILE, STACK } from '../../data';

const experienceItem = (exp: (typeof EXPERIENCE)[0]) => `
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
  </div>`;

const educationItem = (edu: (typeof EDUCATION)[0]) => `
  <div style="margin-bottom: 10px;">
    <div style="display: flex; justify-content: space-between; align-items: baseline;">
      <strong style="color: #1a1a1a; font-size: 12px;">${edu.degree}</strong>
      <span style="color: #666; font-size: 10px;">${edu.period}</span>
    </div>
    <div style="color: #6366f1; font-size: 11px;">${edu.institution}</div>
  </div>`;

const sectionHeading = (text: string) =>
  `<h2 style="font-size: 14px; color: #6366f1; border-bottom: 1px solid #e5e5e5; padding-bottom: 4px; margin-bottom: 12px; letter-spacing: 2px;">${text}</h2>`;

export function generateCVHTML(): string {
  const experienceHTML = EXPERIENCE.map(experienceItem).join('');
  const educationHTML = EDUCATION.map(educationItem).join('');
  const stackHTML = STACK.map((tech) => tech.name).join(' · ');
  const aboutSummaryHTML = [ABOUT.intro, ABOUT.experience, ABOUT.goals]
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map(
      (paragraph) =>
        `<p style="font-size: 12px; color: #333; margin: 0 0 8px 0;">${paragraph}</p>`,
    )
    .join('');
  const validLanguages = LANGUAGES.filter(
    (language) => Boolean(language.name?.trim()) && Boolean(language.level?.trim()),
  );
  const languagesHTML = validLanguages
    .map((language) => {
      const detail = language.detail ? ` (${language.detail})` : '';
      return `<li>${language.name}: ${language.level}${detail}</li>`;
    })
    .join('');
  const date = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
  });

  return `
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; padding: 32px; max-width: 800px; margin: 0 auto; color: #1a1a1a; line-height: 1.5;">
      <!-- Header -->
      <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid #6366f1;">
        <h1 style="margin: 0 0 4px 0; font-size: 28px; font-weight: 700; color: #1a1a1a; text-align: center;">${
          PROFILE.fullName
        }</h1>
        <p style="margin: 0 0 12px 0; font-size: 18px; color: #6366f1; font-weight: 600; text-align: center;">${
          PROFILE.title
        }</p>
        <div style="font-size: 11px; color: #555; text-align: center;">
          📧 ${PROFILE.email} · 📱 ${PROFILE.phone} · 📍 ${PROFILE.location}<br>
          🌐 ${PROFILE.website} · 💼 ${PROFILE.linkedin} · 💻 ${PROFILE.github}
        </div>
      </div>

      <!-- About -->
      <div style="margin-bottom: 20px;">
        ${sectionHeading('PERFIL PROFESIONAL')}
        ${
          aboutSummaryHTML ||
          '<p style="font-size: 12px; color: #666; margin: 0;">Resumen profesional no disponible.</p>'
        }
      </div>

      <!-- Experience -->
      <div style="margin-bottom: 20px;">
        ${sectionHeading('EXPERIENCIA PROFESIONAL')}
        ${experienceHTML}
      </div>

      <!-- Education -->
      <div style="margin-bottom: 20px;">
        ${sectionHeading('FORMACIÓN ACADÉMICA')}
        ${educationHTML}
      </div>

      <!-- Languages -->
      <div style="margin-bottom: 20px;">
        ${sectionHeading('IDIOMAS')}
        ${
          languagesHTML
            ? `<ul style="margin: 0; padding-left: 16px; font-size: 12px; color: #333;">${languagesHTML}</ul>`
            : '<p style="font-size: 12px; color: #666; margin: 0;">Información de idiomas no disponible.</p>'
        }
      </div>

      <!-- Skills -->
      <div style="margin-bottom: 16px; page-break-before: always; padding-top: 20px;">
        ${sectionHeading('TECNOLOGÍAS')}
        <p style="font-size: 12px; color: #333; margin: 0;">${stackHTML}</p>
      </div>

      <!-- Footer -->
      <div style="text-align: center; margin-top: 24px; padding-top: 12px; border-top: 1px solid #e5e5e5;">
        <p style="font-size: 10px; color: #888; margin: 0;">CV generado desde victorheras.me · ${date}</p>
      </div>
    </div>`;
}
