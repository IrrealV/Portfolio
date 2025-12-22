export interface TechItem {
  name: string;
  icon?: string; // Opcional, por si usamos iconos SVG luego
  colorClass: string; // Clase de Tailwind para el color (separación de estilos)
}

export interface ProjectItem {
  id: string;
  title: string;
  url?: string;
  description?: string;
  badge?: string;
  badgeColor?: string;
  isComingSoon?: boolean;
  colSpan?: 1 | 2 | 3; // Control del Grid Bento
}
