export interface Profile {
  shortName: string;
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
}

export interface About {
  intro: string;
  experience: string;
  goals: string;
}

export const PROFILE: Profile = {
  shortName: 'Víctor Manuel Heras',
  fullName: 'Víctor Manuel Heras Durillo',
  title: 'Desarrollador Fullstack',
  email: 'contact@victorheras.me',
  phone: '+34 658 204 691',
  location: 'Jaén, España',
  website: 'victorheras.me',
  linkedin: 'linkedin.com/in/vmheras',
  github: 'github.com/IrrealV',
};

export const ABOUT: About = {
  intro:
    'Soy Víctor Manuel, estudiante de Ingeniería Telemática y Desarrollador Fullstack, con especial foco en infraestructura y confiabilidad.',
  experience:
    'Tengo experiencia en soporte IT, desarrollo web y diseño de soluciones que priorizan mantenibilidad, rendimiento y evolución a largo plazo.',
  goals:
    'Busco construir soluciones escalables que optimicen procesos y generen valor real para el usuario final, combinando criterio técnico y ejecución práctica.',
};
