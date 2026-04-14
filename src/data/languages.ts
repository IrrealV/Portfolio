export interface Language {
  name: string;
  level: string;
  detail?: string;
}

export const LANGUAGES: Language[] = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'B2 (intermedio alto)' },
];
