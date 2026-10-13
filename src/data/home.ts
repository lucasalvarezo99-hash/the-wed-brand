/**
 * Textos e imágenes de la home. Editar acá cambia la web sin tocar el diseño.
 * Tono (Brand Book): cercanas, claras, cálidas, simples. Frases cortas.
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
import invitacionFrente from '../assets/proyectos/casu-y-lucas/invitacion-frente.jpg';
import reelEnvoltorio from '../assets/reel/envoltorio-sello.jpg';
import reelFosforos from '../assets/reel/fosforos.jpg';
import reelBarra from '../assets/reel/barra.jpg';
import reelMenu from '../assets/reel/menu-rayado.jpg';
import reelSello from '../assets/reel/sello-lacre.jpg';
import reelPizza from '../assets/reel/caja-pizza.jpg';
import reelAbanico from '../assets/reel/abanico-silla.jpg';
import reelTiramisu from '../assets/reel/tiramisu.jpg';
import reelMesa from '../assets/reel/numero-mesa.jpg';

type Photo = { src: ImageMetadata; alt: string };

/* ------------------------------------------------------------------ INICIO */
export const hero = {
  /** Texto en mayúsculas debajo de la marca (como Solamente). */
  manifesto:
    'Un casamiento que se sienta tan suyo como su historia. Diseñamos la identidad de su casamiento a partir de quiénes son como pareja y la llevamos a cada detalle: invitaciones, papelería, cotillón, web, redes y el contenido del gran día. Nada parte de una plantilla: parte de ustedes. Ya estuvimos del otro lado, las dos organizamos nuestro propio casamiento. Que cuando alguien vea el suyo, piense: «esto es muy ellos».',
  primary: { label: 'Conozcan nuestros servicios', href: '#servicios' },
  secondary: { label: 'Hablemos de su casamiento', href: '#contacto' },
};

/**
 * Tira de fotos del inicio (se desliza de derecha a izquierda). Van 10 fotos.
 * Las que tienen `src: null` son lugares reservados: se muestran como un
 * recuadro vacío hasta cargar la foto (importarla arriba y ponerla en `src`).
 */
export const heroReel: { src: ImageMetadata | null; alt: string }[] = [
  { src: invitacionFrente, alt: 'Invitación ilustrada a mano del casamiento de Casu y Lucas, con un auto antiguo y un moño.' },
  { src: reelEnvoltorio, alt: 'Envoltorios de papel con sello bordó y la leyenda [THE WED BRAND] sobre una bandeja plateada.' },
  { src: reelFosforos, alt: 'Cajas de fósforos bordó con el isotipo de The Wed Brand en una bandeja de tres pisos.' },
  { src: reelBarra, alt: 'Cartel de tela «La barra» con los tragos de los novios colgado sobre la barra.' },
  { src: reelMenu, alt: 'Menús con borde ondulado y rayas verdes.' },
  { src: reelSello, alt: 'Menú cerrado con sello de lacre bordó sobre un plato: «Rompe el sello para ver el menú».' },
  { src: reelPizza, alt: 'Caja de pizza ilustrada con los novios brindando: «Cande & Diego, 16.02.26, Punta del Este».' },
  { src: reelAbanico, alt: 'Abanico blanco con «Los Alvarez» en caligrafía bordó sobre una silla de esterilla.' },
  { src: reelTiramisu, alt: 'Tiramisú con las iniciales L y C dentro de dos corazones y la fecha 06/06/26.' },
  { src: reelMesa, alt: 'Número de mesa «Table 2» sostenido entre dos piedras, con velas y copas.' },
];

/* ------------------------------------------------------------------ CÓMO PENSAMOS */
export const philosophy = {
  photo: { src: veloRisaBn, alt: 'Novios bajo el velo, en blanco y negro, riéndose.' } as Photo,
  title: ['Una nota sobre', 'cómo pensamos'],
  paragraphs: [
    'Muchos casamientos responden a tendencias, no a la pareja. Las invitaciones, la paleta, la papelería, la cartelería, las fotos y las redes se resuelven por separado, y el punto de partida suele ser una estética de Pinterest adaptada. El casamiento puede verse bien y aun así no contar quiénes son.',
    'Nosotras empezamos al revés: por ustedes. Cada pareja tiene una historia, una personalidad y una manera propia de celebrar. Nuestro trabajo es traducir eso en una sola idea, y llevarla a cada pieza, del save the date al último video.',
    'Nuestro logo lo cuenta: dos círculos dibujados a mano. Cada uno es una persona; donde se cruzan aparece lo que es de los dos. Eso es lo que diseñamos.',
  ],
  quoteLabel: 'Lo que queremos que piensen sus invitados',
  quote: 'Esto es muy ellos.',
};

/* ------------------------------------------------------------------ SERVICIOS */
export const servicesIntro = {
  title: ['Servicios', 'para su casamiento'],
  lead: 'Se pueden contratar juntos o por separado. No hace falta tomar todo: se arma según lo que necesiten.',
  custom: {
    title: 'Propuesta a medida',
    text: 'Si lo que imaginan no entra en ninguno de estos formatos, lo pensamos juntas. Partimos de un «¿qué quieren hacer?» y lo llevamos a la identidad.',
  },
};

/** Foto de cada servicio (slug → foto). */
export const servicePhotos: Record<string, Photo> = {
  'branding-wedding-design': { src: menuLetterpress, alt: 'Menú impreso en letterpress con ilustración botánica verde.' },
  'comunicacion-comunidad': { src: ramoVestido, alt: 'Detalle de la novia sosteniendo el ramo junto al vestido.' },
  'wedding-content': { src: novia, alt: 'Novia corriendo sobre el pasto, foto movida.' },
  'full-experience': { src: parejaAerea, alt: 'Vista aérea de los novios corriendo de la mano sobre el pasto.' },
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

/* ------------------------------------------------------------------ MARCAS */
export const brands = {
  title: ['Branding y eventos', 'para marcas'],
  photo: { src: encendedores, alt: 'Encendedores personalizados sobre un plato de puntilla.' } as Photo,
  photo2: { src: cuelloBordado, alt: 'Invitado con el cuello de la camisa bordado con fecha e iniciales.' } as Photo,
  paragraphs: [
    'También trabajamos con marcas: salones de eventos, bodegas, hoteles, restaurantes y proyectos del mundo de los casamientos que buscan diferenciarse con una estética cuidada, sensible y con carácter.',
    'Desde la identidad visual completa de un espacio o de un evento hasta piezas puntuales —tarjetas de bienvenida, menús, cartelería, packaging, merch o contenido para redes—, diseñamos cada pieza a medida.',
  ],
  cta: { label: 'Pedir presupuesto', service: 'marcas' },
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
  title: ['Proyectos', 'y casamientos'],
  lead: 'Cada proyecto empieza por conocer a la pareja. Acá mostramos cómo una historia se vuelve identidad.',
  more: 'Estamos sumando nuevos casamientos. Mientras tanto, en Instagram compartimos procesos y detalles.',
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
  title: 'Cuéntennos qué están imaginando.',
  lead: 'Cuéntennos un poco sobre ustedes y su casamiento completando este formulario. Con lo que nos compartan vamos a poder enviarles una propuesta pensada para ustedes y mantenernos en contacto para lo que necesiten.',
};
