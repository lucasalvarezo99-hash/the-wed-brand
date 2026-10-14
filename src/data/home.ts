/**
 * Textos e imágenes de la home. Editar acá cambia la web sin tocar el diseño.
 * Tono (Brand Book): cercanas, claras, cálidas, simples. Frases cortas.
 */
import type { ImageMetadata } from 'astro';
import veloColor from '../assets/fotos/velo-color.jpg';
import veloRisaBn from '../assets/fotos/velo-risa-bn.jpg';
import parejaCampo from '../assets/fotos/pareja-campo.jpg';
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
import reelEnvoltorio from '../assets/reel/envoltorio-sello.jpg';
import reelFosforos from '../assets/reel/fosforos.jpg';
import reelBarra from '../assets/reel/barra.jpg';
import reelMenu from '../assets/reel/menu-rayado.jpg';
import reelSello from '../assets/reel/sello-lacre.jpg';
import reelPizza from '../assets/reel/caja-pizza.jpg';
import reelAbanico from '../assets/reel/abanico-silla.jpg';
import reelTiramisu from '../assets/reel/tiramisu.jpg';
import reelMesa from '../assets/reel/numero-mesa.jpg';

import fotoBranding from '../assets/servicios/branding.jpg';
import fotoComunicacion from '../assets/servicios/comunicacion.jpg';
import fotoContent from '../assets/servicios/content.jpg';

type Photo = { src: ImageMetadata; alt: string };

/* ------------------------------------------------------------------ INICIO */
export const hero = {
  /** Texto en mayúsculas debajo de la marca (como Solamente). */
  manifesto:
    'Somos un estudio de branding y comunicación para casamientos. Convertimos su historia en una identidad visual completa a partir de quiénes son como pareja y la llevamos a cada detalle del casamiento. Como ya estuvimos del otro lado, nos quedamos con las ganas de acompañarlos a ustedes.',
  primary: { label: 'Conozcan nuestros servicios', href: '#servicios' },
  secondary: { label: 'Hablemos de su casamiento', href: '#contacto' },
};

/**
 * Tira de fotos del inicio (se desliza de derecha a izquierda). 
 * Las que tienen `src: null` son lugares reservados: se muestran como un
 * recuadro vacío hasta cargar la foto (importarla arriba y ponerla en `src`).
 */
export const heroReel: { src: ImageMetadata | null; tag?: string; alt: string }[] = [
  { src: reelEnvoltorio, tag: 'Packaging', alt: 'Envoltorios de papel con sello bordó y la leyenda [THE WED BRAND] sobre una bandeja plateada.' },
  { src: reelFosforos, tag: 'Fósforos', alt: 'Cajas de fósforos bordó con el isotipo de The Wed Brand en una bandeja de tres pisos.' },
  { src: reelBarra, tag: 'Cartelería', alt: 'Cartel de tela «La barra» con los tragos de los novios colgado sobre la barra.' },
  { src: reelMenu, tag: 'Papelería · menú', alt: 'Menús con borde ondulado y rayas verdes.' },
  { src: reelSello, tag: 'Papelería · menú con sello', alt: 'Menú cerrado con sello de lacre bordó sobre un plato: «Rompe el sello para ver el menú».' },
  { src: reelPizza, tag: 'Packaging · caja de pizza', alt: 'Caja de pizza ilustrada con los novios brindando: «Cande & Diego, 16.02.26, Punta del Este».' },
  { src: reelAbanico, tag: 'Merch · abanicos', alt: 'Abanico blanco con «Los Alvarez» en caligrafía bordó sobre una silla de esterilla.' },
  { src: reelTiramisu, tag: 'Logo en la torta', alt: 'Tiramisú con las iniciales L y C dentro de dos corazones y la fecha 06/06/26.' },
  { src: reelMesa, tag: 'Papelería · número de mesa', alt: 'Número de mesa «Table 2» sostenido entre dos piedras, con velas y copas.' },
];

/* ------------------------------------------------------------------ CÓMO PENSAMOS */
export const philosophy = {
  photo: { src: veloRisaBn, alt: 'Novios bajo el velo, en blanco y negro, riéndose.' } as Photo,
  title: ['Por qué creamos', 'este proyecto'],
  paragraphs: [
    'The Wed Brand diseña la identidad visual de cada casamiento a partir de quiénes son los novios: su historia, su personalidad, su estilo.',
    'Esa identidad se aplica a todo lo que el casamiento necesita: invitaciones, papelería, cartelería, cotillón y web. También los podemos acompañar en redes antes de la fecha y con el contenido del gran día.',
    'Lo creamos para las parejas que quieren que su casamiento se sienta suyo: convertimos su historia en una identidad visual completa y la llevamos hasta el contenido del gran día.',
  ],
  servicesTitle: 'Tres servicios que pueden contratarse juntos o por separado',
  quoteLabel: 'Que cuando alguien vea su casamiento, piense',
  quote: 'Esto es muy ellos.',
};

/** Concepto creativo del logo (página Nosotras). */
export const concept = {
  label: 'Concepto creativo',
  title: 'Dos personas, una identidad. Hecha a mano.',
  paragraphs: [
    'Cada círculo es una persona. Donde se cruzan aparece lo que es de los dos, y eso es lo que diseñamos.',
    'El trazo de tinta, imperfecto y con pulso, dice que cada identidad se hace a mano, a medida, y no sale de una plantilla.',
  ],
};

/* ------------------------------------------------------------------ SERVICIOS */
export const servicesIntro = {
  title: ['Tres servicios que pueden', 'contratarse juntos o por separado'],
  lead: '',
  custom: {
    title: 'Propuesta a medida',
    text: 'Si lo que imaginan no entra en ninguno de estos formatos, lo pensamos juntas. Partimos de un «¿qué quieren hacer?» y lo llevamos a la identidad.',
  },
};

/** Foto de cada servicio (slug → foto). */
export const servicePhotos: Record<string, Photo> = {
  'branding-wedding-design': { src: fotoBranding, alt: 'Manos de los novios sobre la mesa, junto al ramo de calas y una tarjeta con el nombre del invitado.' },
  'comunicacion-comunidad': { src: fotoComunicacion, alt: 'Novios riéndose dentro de una cabina de fotos con cortina roja.' },
  'wedding-content': { src: fotoContent, alt: 'Novio carga a la novia en la calle de noche, ella con anteojos de sol y velo.' },
};

/** Ayuda para elegir: situación → servicio sugerido (slug). */
export const serviceGuide = {
  title: '¿No saben por dónde empezar?',
  items: [
    { situation: 'Tienen referencias guardadas, pero no una idea que las una.', service: 'branding-wedding-design' },
    { situation: 'Necesitan invitaciones, papelería o una web para invitados.', service: 'branding-wedding-design' },
    { situation: 'Quieren contar la previa y sumar a sus invitados en redes.', service: 'comunicacion-comunidad' },
    { situation: 'No se aguantan a que el fotógrafo les mande el contenido.', service: 'wedding-content' },
  ],
};

/* ------------------------------------------------------------------ APLICACIONES */
export const applications = {
  title: ['Cada pieza lleva', 'la identidad de la pareja'],
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

/** Franja de fotos en blanco y negro / color. */
export const strip: Photo[] = [
  { src: besoBn, alt: 'Novio levanta a la novia en un beso, blanco y negro.' },
  { src: ramoCielo, alt: 'Brazo con manga de encaje sostiene un ramo contra el cielo.' },
  { src: manosRamoBn, alt: 'Manos que se estiran para atrapar el ramo, blanco y negro.' },
  { src: veloMovido, alt: 'Novia de espaldas con el velo en movimiento.' },
  { src: fiestaBn, alt: 'Novios bailando en la fiesta, blanco y negro.' },
];

/* ------------------------------------------------------------------ PORTFOLIO */
export const portfolioIntro = {
  title: ['Inspiración', 'para su casamiento'],
  lead: 'Algunas ideas de cómo puede vivir una identidad en cada detalle del casamiento.',
};

/* ------------------------------------------------------------------ REUNIÓN INICIAL */
export const meeting = {
  title: 'Agenden una reunión inicial',
  /** CONFIRMAR: duración y que sea sin costo. */
  text: 'Coordinemos una videollamada breve de 20 minutos para conocernos, conversar sobre su casamiento y resolver todas sus dudas. Es un espacio sin compromiso, pensado para que entiendan cómo trabajamos, qué ofrecemos y si somos el equipo para acompañarlos.',
  badge: 'Sin costo',
  note: 'Ustedes eligen el día y el horario que mejor les quede.',
  cta: 'Agendar reunión',
  photo: { src: vestidoViento, alt: 'Vestido de novia movido por el viento, blanco y negro.' } as Photo,
};

/* ------------------------------------------------------------------ CONTACTO */
export const contactIntro = {
  title: 'Cuéntennos qué se están imaginando.',
  lead: 'Cuéntennos un poco sobre ustedes y su casamiento completando este formulario. Con lo que nos compartan vamos a poder enviarles una propuesta pensada para ustedes y mantenernos en contacto para lo que necesiten.',
};
