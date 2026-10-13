/**
 * Textos de la home. Editar acá cambia la web sin tocar el diseño.
 * Tono (brand book): cercanas, claras, cálidas, simples. Frases cortas.
 */
import invitacionFrente from '../assets/proyectos/casu-y-lucas/invitacion-frente.jpg';
import invitacionDigital from '../assets/proyectos/casu-y-lucas/invitacion-digital.jpg';
import type { ImageMetadata } from 'astro';

export const hero = {
  eyebrow: 'Branding & identidad para casamientos',
  title: 'Un casamiento que se sienta tan suyo como su historia.',
  lead: 'Creamos identidades, diseñamos experiencias y contamos historias para que cada detalle de su casamiento hable de ustedes.',
  primary: { label: 'Conozcan nuestros servicios', href: '#servicios' },
  secondary: { label: 'Exploren nuestros proyectos', href: '#portfolio' },
};

/**
 * Composición en cascada del hero.
 * - type 'image': fotografía o pieza real (con alt obligatorio).
 * - type 'plate': lámina de color de la marca con un punto de contacto.
 * Cuando haya fotos definitivas, reemplazar láminas por imágenes.
 */
export type HeroTile =
  | { type: 'image'; src: ImageMetadata; alt: string; label: string; href?: string }
  | { type: 'plate'; tone: 'vino' | 'celeste' | 'oliva' | 'grafito'; label: string; word: string };

export const heroTiles: HeroTile[] = [
  { type: 'plate', tone: 'vino', word: 'Identidad', label: '01 · Concepto' },
  {
    type: 'image',
    src: invitacionFrente,
    alt: 'Invitación ilustrada a mano del casamiento de Casu y Lucas',
    label: '02 · Invitación',
    href: '/proyectos/casu-y-lucas',
  },
  { type: 'plate', tone: 'celeste', word: 'Redes', label: '03 · Comunidad' },
  {
    type: 'image',
    src: invitacionDigital,
    alt: 'Invitación digital con el recorrido del día, regalos y confirmación de asistencia',
    label: '04 · Web para invitados',
    href: '/proyectos/casu-y-lucas',
  },
  { type: 'plate', tone: 'oliva', word: 'El gran día', label: '05 · Contenido' },
];

export const philosophy = {
  label: 'Cómo pensamos',
  problem: 'Muchos casamientos responden a tendencias, no a la pareja.',
  problems: [
    { title: 'Decisiones sueltas', text: 'Invitaciones, paleta, papelería, cartelería, fotos y redes se resuelven por separado.' },
    { title: 'Referencias prestadas', text: 'El punto de partida suele ser una estética de Pinterest adaptada, no la pareja.' },
    { title: 'Lindo, pero ajeno', text: 'El casamiento puede verse bien y aun así no contar quiénes son.' },
    { title: 'El día se termina', text: 'El contenido del evento rara vez sigue la misma identidad.' },
  ],
  answerTitle: 'Dos personas, una identidad. Hecha a mano.',
  answer:
    'Cada pareja tiene una historia, una personalidad y una manera propia de celebrar. Nuestro trabajo es traducir eso en decisiones visuales y de comunicación que se sostengan en cada punto de contacto.',
  symbol: [
    { title: 'Círculo izquierdo', text: 'Una persona, con su historia.' },
    { title: 'Círculo derecho', text: 'La otra persona, con la suya.' },
    { title: 'Intersección', text: 'Lo que es de los dos. Lo que diseñamos.' },
    { title: 'Círculos abiertos', text: 'Una identidad que sigue: redes, contenido, recuerdo.' },
  ],
  quoteLabel: 'Lo que queremos que piensen sus invitados',
  quote: 'Esto es muy ellos.',
};

export const servicesIntro = {
  label: 'Servicios',
  title: 'Eligen qué contratar.',
  lead: 'Los servicios se pueden contratar juntos o por separado. No hace falta tomar todo: se arma según lo que necesiten.',
  custom: {
    title: 'Propuesta a medida',
    text: 'Si lo que imaginan no entra en ninguno de estos formatos, lo pensamos juntas. Partimos de un «¿qué quieren hacer?» y lo llevamos a la identidad.',
  },
};

/** Ayuda para elegir: situación → servicio sugerido (slug). */
export const serviceGuide = {
  title: '¿No saben por dónde empezar?',
  items: [
    { situation: 'Recién empiezan a organizar y quieren que todo tenga coherencia.', service: 'full-experience' },
    { situation: 'Tienen referencias guardadas, pero no una idea que las una.', service: 'branding-wedding-design' },
    { situation: 'Necesitan invitaciones, papelería o una web para invitados.', service: 'branding-wedding-design' },
    { situation: 'Quieren contar la previa y sumar a sus invitados en redes.', service: 'comunicacion-comunidad' },
    { situation: 'Les importa cómo se va a ver y compartir el gran día.', service: 'wedding-content' },
  ],
};

export const portfolioIntro = {
  label: 'Portfolio',
  title: 'Proyectos',
  lead: 'Cada proyecto empieza por conocer a la pareja. Acá mostramos cómo una historia se vuelve identidad.',
  more: 'Estamos sumando nuevos casamientos. Mientras tanto, en Instagram compartimos procesos y detalles.',
};

export const contactIntro = {
  label: 'Contacto',
  title: 'Cuéntennos qué están imaginando.',
  lead: 'Queremos conocer su historia, qué tienen en mente y cómo les gustaría vivir su casamiento. A partir de eso, podemos pensar juntas una propuesta para ustedes.',
};
