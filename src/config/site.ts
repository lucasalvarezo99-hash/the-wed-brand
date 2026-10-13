/**
 * Datos de marca y configuración general del sitio.
 *
 * Todo lo que cambie con el tiempo (email, redes, dominio, integraciones)
 * se edita acá o en las variables de entorno — no hace falta tocar componentes.
 * Ver README.md → "Antes de publicar".
 */

const env = import.meta.env;

export const site = {
  name: 'The Wed Brand',
  /** Dominio definitivo. Se usa para URLs canónicas, sitemap y Open Graph. */
  url: env.PUBLIC_SITE_URL || 'https://thewedbrand.com.ar',
  locale: 'es_AR',
  lang: 'es-AR',
  tagline: 'Un casamiento con identidad propia.',
  description:
    'Estudio creativo de branding para casamientos. Diseñamos la identidad visual de su casamiento a partir de quiénes son como pareja y la llevamos a cada detalle: invitaciones, papelería, web, redes y el contenido del gran día.',
  founders: ['Casiana Epper', 'Cande Peña'],
  foundingYear: 2026,
  areaServed: 'Argentina',

  contact: {
    email: 'thewedbrand@gmail.com',
    instagram: {
      handle: '@thewedbrand',
      url: 'https://www.instagram.com/thewedbrand/',
    },
    /**
     * WhatsApp (opcional). Dejar en '' para no mostrarlo.
     * Formato internacional sin espacios ni símbolos, ej: '5491165144751'.
     */
    whatsapp: env.PUBLIC_WHATSAPP || '',
  },

  /**
   * Endpoint del formulario de contacto (Formspree, Web3Forms, Basin, etc.).
   * Es una URL pública: no contiene claves secretas.
   * Si queda vacío, el formulario arma el mensaje y lo abre en el programa
   * de correo de la persona (mailto) — nunca simula un envío.
   */
  formEndpoint: env.PUBLIC_FORM_ENDPOINT || '',

  /** Google Analytics 4 (opcional). Solo se carga si hay ID y la persona acepta. */
  analyticsId: env.PUBLIC_GA_ID || '',
} as const;

export type NavItem = { label: string; href: string };

/** Navegación principal. Las anclas apuntan a secciones reales de la home. */
export const nav: NavItem[] = [
  { label: 'inicio', href: '/#inicio' },
  { label: 'servicios', href: '/#servicios' },
  { label: 'portfolio', href: '/#portfolio' },
  { label: 'nosotras', href: '/#nosotras' },
  { label: 'preguntas', href: '/#preguntas' },
  { label: 'contacto', href: '/#contacto' },
];

export const primaryCta = { label: 'Hablemos de su casamiento', href: '/#contacto' };
