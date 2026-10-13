/**
 * Textos de la home. Editar acá cambia la web sin tocar el diseño.
 * Tono (brand book): cercanas, claras, cálidas, simples. Frases cortas.
 */
import type { ImageMetadata } from 'astro';
import veloColor from '../assets/fotos/velo-color.jpg';
import veloRisaBn from '../assets/fotos/velo-risa-bn.jpg';
import parejaCampo from '../assets/fotos/pareja-campo.jpg';
import parejaAerea from '../assets/fotos/pareja-aerea.jpg';
import besoBn from '../assets/fotos/beso-bn.jpg';
import ramoCielo from '../assets/fotos/ramo-cielo.jpg';
import ramoVestido from '../assets/fotos/ramo-vestido.jpg';
import manosRamoBn from '../assets/fotos/manos-ramo-bn.jpg';
import veloMovido from '../assets/fotos/velo-movido.jpg';
import fiestaBn from '../assets/fotos/fiesta-bn.jpg';
import novia from '../assets/fotos/novia-corriendo.jpg';
import vestidoViento from '../assets/fotos/vestido-viento-bn.jpg';
import portadaBotanica from '../assets/aplicaciones/portada-botanica.jpg';
import menuLetterpress from '../assets/aplicaciones/menu-letterpress.jpg';
import menuPincel from '../assets/aplicaciones/menu-pincel.jpg';
import abanicos from '../assets/aplicaciones/abanicos.jpg';
import cuelloBordado from '../assets/aplicaciones/cuello-bordado.jpg';
import gorras from '../assets/aplicaciones/gorras.jpg';
import servilletas from '../assets/aplicaciones/servilletas.jpg';
import cintaRamo from '../assets/aplicaciones/cinta-ramo.jpg';
import encendedores from '../assets/aplicaciones/encendedores.jpg';

export const hero = {
  eyebrow: 'Branding & identidad para casamientos',
  title: 'Un casamiento que se sienta tan suyo como su historia.',
  lead: 'Creamos identidades, diseñamos experiencias y contamos historias para que cada detalle de su casamiento hable de ustedes.',
  primary: { label: 'Conozcan nuestros servicios', href: '#servicios' },
  secondary: { label: 'Exploren nuestros proyectos', href: '#portfolio' },
};

/** Fotos del Brand Book usadas en la home. */
export const photos = {
  /** Pila de fotos junto a "Dos personas, una identidad". */
  philosophyStack: [
    { src: veloColor, alt: 'Novios abrazados bajo el velo, ella sonríe con un ramo de flores de colores.' },
    { src: veloRisaBn, alt: 'Novios bajo el velo, en blanco y negro, riéndose.' },
    { src: parejaCampo, alt: 'Novios caminando en un campo verde, el velo al viento.' },
  ],
  /** Franja de fotos entre secciones. */
  strip: [
    { src: besoBn, alt: 'Novio levanta a la novia en un beso, blanco y negro.' },
    { src: ramoCielo, alt: 'Brazo con manga de encaje sostiene un ramo contra el cielo.' },
    { src: manosRamoBn, alt: 'Manos que se estiran para atrapar el ramo, blanco y negro.' },
    { src: veloMovido, alt: 'Novia de espaldas con el velo en movimiento.' },
    { src: fiestaBn, alt: 'Novios bailando en la fiesta, blanco y negro.' },
  ],
  /** Una foto por servicio (slug del servicio → foto). */
  services: {
    'branding-wedding-design': { src: menuLetterpress, alt: 'Menú impreso en letterpress con ilustración botánica verde.' },
    'comunicacion-comunidad': { src: ramoVestido, alt: 'Detalle de la novia sosteniendo el ramo junto al vestido.' },
    'wedding-content': { src: novia, alt: 'Novia corriendo sobre el pasto, foto movida.' },
    'full-experience': { src: parejaAerea, alt: 'Vista aérea de los novios corriendo de la mano sobre el pasto.' },
  } as Record<string, { src: ImageMetadata; alt: string }>,
  contact: { src: vestidoViento, alt: 'Vestido de novia movido por el viento, blanco y negro.' },
};

/** Aplicaciones: papelería, cotillón y merch (Brand Book · Aplicaciones). */
export const applications = {
  label: 'Aplicaciones',
  title: 'Cada pieza lleva la identidad de la pareja.',
  lead: 'Papelería, cartelería, cotillón y merch. Algunas ideas de dónde puede vivir una identidad.',
  items: [
    { src: portadaBotanica, alt: 'Portada vino con marco botánico ilustrado.', caption: 'Portada con marco botánico' },
    { src: abanicos, alt: 'Novia con un abanico bordado.', caption: 'Abanicos bordados' },
    { src: menuPincel, alt: 'Menú con títulos escritos a pincel.', caption: 'Menú con títulos a pincel' },
    { src: cuelloBordado, alt: 'Invitado con el cuello de la camisa bordado con fecha e iniciales.', caption: 'Cuello bordado con fecha e iniciales' },
    { src: servilletas, alt: 'Servilleta con monograma y fecha.', caption: 'Servilletas con monograma' },
    { src: gorras, alt: 'Novia e invitados con gorras en la fiesta.', caption: 'Gorras para la fiesta' },
    { src: cintaRamo, alt: 'Cinta bordada con la fecha atada al ramo.', caption: 'Cinta bordada para el ramo' },
    { src: encendedores, alt: 'Encendedores personalizados sobre un plato de puntilla.', caption: 'Encendedores personalizados' },
  ],
};

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
