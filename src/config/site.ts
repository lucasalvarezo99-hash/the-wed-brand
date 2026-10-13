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
  /**
   * Dominio definitivo (PUBLIC_SITE_URL). Mientras esté vacío no se generan
   * URL canónica ni sitemap; se activan solos al cargarlo.
   */
  url: env.PUBLIC_SITE_URL || '',
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
   * Endpoint del formulario de contacto. Por defecto usa FormSubmit, que
   * reenvía cada consulta por mail a la casilla de la marca sin necesidad
   * de cuenta ni claves. La primera consulta dispara un mail de activación
   * a esa casilla: hay que confirmarlo una sola vez.
   * Se puede reemplazar por Formspree, Web3Forms, etc. con PUBLIC_FORM_ENDPOINT.
   */
  formEndpoint: env.PUBLIC_FORM_ENDPOINT || 'https://formsubmit.co/ajax/thewedbrand@gmail.com',

  /**
   * Enlace para agendar la reunión inicial (Calendly, Google Calendar, etc.).
   * Vacío = el botón lleva al formulario con «Reunión inicial» marcada.
   */
  bookingUrl: env.PUBLIC_BOOKING_URL || '',

  /** Vista previa: el formulario valida pero no envía (PUBLIC_PREVIEW=1). */
  preview: env.PUBLIC_PREVIEW === '1',

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
