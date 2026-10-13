# The Wed Brand — sitio web

Sitio oficial de **The Wed Brand**, estudio de branding e identidad para casamientos de Casiana Epper (Casu) y Cande Peña.

Hecho con [Astro](https://astro.build): genera HTML estático (rápido, bueno para SEO, sin servidor) y casi sin JavaScript. El diseño sigue el **Brand Book 2026** (paleta, tipografías, isotipo dibujado a mano, títulos numerados, navegación entre corchetes, láminas claras con marco y oscuras a sangre).

## Uso

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera /dist para publicar
npm run preview   # sirve /dist localmente
npm run check     # chequeo de tipos y contenido
```

Requiere Node 22 o superior.

## Estructura

| Ruta | Qué es |
|---|---|
| `/` | Home: inicio, filosofía, servicios, portfolio, nosotras, proceso, testimonios (oculta si no hay), preguntas, contacto |
| `/servicios/<servicio>` | Una página por servicio (SEO + detalle) |
| `/proyectos/<proyecto>` | Caso de estudio de cada proyecto |
| `/privacidad` | Uso de datos del formulario |
| `/404` | Página no encontrada |
| `/sitemap-index.xml`, `/robots.txt` | Generados automáticamente |

## Cómo editar contenido (sin tocar el diseño)

| Qué | Dónde |
|---|---|
| Email, Instagram, WhatsApp, dominio, navegación, CTA principal | `src/config/site.ts` (y `.env`) |
| Textos de la home (hero, filosofía, intros, guía de servicios) | `src/data/home.ts` |
| **Servicios** (nombre, descripción, qué incluye, para quién) | `src/content/servicios/*.md` |
| **Proyectos** | `src/content/proyectos/*.md` — copiar `_plantilla.md` |
| Preguntas frecuentes | `src/data/faq.json` |
| Proceso de trabajo | `src/data/proceso.json` |
| Nosotras (textos, roles, links a perfiles) | `src/data/equipo.json` |
| Testimonios | `src/data/testimonios.json` |
| Imágenes | `src/assets/…` (se optimizan solas a WebP en varios tamaños) |
| Logo / isotipo | `public/brand/isotipo.svg` |

### Sumar un proyecto

1. Crear la carpeta `src/assets/proyectos/<nombre>/` con las fotos.
2. Copiar `src/content/proyectos/_plantilla.md` como `src/content/proyectos/<nombre>.md` y completarlo.
3. `published: true` para que aparezca. `featured: true` lo muestra grande.
4. Los filtros por categoría del portfolio aparecen solos cuando hay 4 o más proyectos.

Los campos opcionales que quedan vacíos (historia, testimonio, fecha, lugar) no se muestran: no hace falta rellenarlos con texto genérico.

### Sumar testimonios

Solo con autorización de la pareja. En `src/data/testimonios.json`:

```json
[{ "quote": "Texto real.", "author": "Sofía & Tomás" }]
```

Con la lista vacía (`[]`) la sección no se muestra.

### Links a perfiles de Casu y Cande

En `src/data/equipo.json`, dentro de cada persona: `"links": [{ "label": "LinkedIn", "href": "https://…" }]`.

## Integraciones

Todas se configuran con variables de entorno públicas (no hay claves secretas en el código). Copiar `.env.example` como `.env` en local, o cargarlas en el panel del hosting.

| Variable | Para qué | Si queda vacía |
|---|---|---|
| `PUBLIC_SITE_URL` | Dominio definitivo (canonical, sitemap, Open Graph) | No se generan sitemap ni URL canónica |
| `PUBLIC_FORM_ENDPOINT` | Otro servicio de recepción (Formspree, Web3Forms…) | Usa **FormSubmit**: cada consulta llega por mail a thewedbrand@gmail.com |
| `PUBLIC_PREVIEW` | `1` = vista previa, el formulario no envía | Envío normal |
| `PUBLIC_GA_ID` | Google Analytics 4 | No se carga analítica ni aparece aviso de cookies |
| `PUBLIC_WHATSAPP` | Botón de WhatsApp en contacto y footer | No se muestra |

### Formulario

El formulario está en la página y envía la consulta directo por mail a **thewedbrand@gmail.com** a través de [FormSubmit](https://formsubmit.co) (sin cuenta ni claves).

**Activación (una sola vez):** después de publicar el sitio, hacer un envío de prueba. A thewedbrand@gmail.com llega un mail de FormSubmit para confirmar; al aceptarlo, todas las consultas siguientes llegan como mail con los datos en una tabla (nombre, email, fecha, lugar, servicios, mensaje). Responder ese mail le contesta directo a la pareja.

Para usar otro servicio (Formspree, Web3Forms), cargar su endpoint en `PUBLIC_FORM_ENDPOINT`.

### Analítica

Con `PUBLIC_GA_ID` el sitio muestra un aviso discreto y carga Google Analytics **solo si la persona acepta**. La elección queda guardada en el navegador.

## Antes de publicar — checklist

- [ ] **Dominio**: cargar `PUBLIC_SITE_URL` con el dominio propio.
- [ ] **Formulario**: hacer un envío de prueba y confirmar el mail de activación de FormSubmit.
- [ ] **WhatsApp** (opcional): el brand book muestra 11 6514 4751. Para mostrarlo, cargar `PUBLIC_WHATSAPP=5491165144751`.
- [ ] **Tipografía Garet**: hoy se usa *Urbanist* como reemplazo (muy similar). Si tienen licencia web de Garet, agregar los archivos `.woff2` en `public/fonts/` y declarar `@font-face { font-family: 'Garet'; … }` en `src/styles/global.css`: se toma automáticamente porque ya es la primera opción de `--font-display`.
- [ ] **Tipografía Vintage Goods** (nombres en script): reemplazada por *Mrs Saint Delafield*. Mismo procedimiento con `font-family: 'Vintage Goods'`.
- [ ] **Fotos**: el hero combina piezas reales (invitación de Casu & Lucas) con láminas de color de la marca. Cuando tengan fotos propias de casamientos, reemplazar las láminas en `src/data/home.ts` (`heroTiles`). La foto de Nosotras es la del brand book (baja resolución): conviene una en mejor calidad en `src/assets/nosotras/cande-y-casu.jpg`.
- [ ] **Caso Casu & Lucas**: revisar los textos de `src/content/proyectos/casu-y-lucas.md` (concepto, historia, solución) y sumar fotos del día si quieren.
- [ ] **Cande**: si su casamiento también va como caso, crear el proyecto desde la plantilla.
- [ ] **FAQ y servicios**: revisar que las respuestas reflejen cómo trabajan hoy. No se incluyeron precios, plazos ni rondas de revisión porque no están definidos.
- [ ] **Privacidad**: revisar `/privacidad` y adaptarla si suman otros servicios.

## Publicación

El build genera un sitio estático en `dist/`. Funciona en Netlify, Vercel o Cloudflare Pages:

- Comando de build: `npm run build`
- Carpeta de salida: `dist`
- Variables: las de la tabla de integraciones.

## Decisiones de diseño

- **Identidad**: colores, tipografías e isotipo del Brand Book (versión final, isotipo de círculos abiertos). Crema `#F6EEC9` y vino `#50080E` como base (35/35), oliva, celeste y grafito como acentos.
- **Isotipo**: vectorizado desde el brand book, hereda el color del texto, así sirve en positivo y negativo.
- **Sistema editorial**: secciones numeradas como el brand book, cuerpo en Courier Prime (tono de carta), enlaces de acción entre paréntesis `(…)`, navegación entre corchetes `[…]`, flecha en círculo como viñeta, grillas de celdas con línea fina.
- **Sin clichés**: sin carrusel automático, sin pop-ups, sin fotos de stock, sin testimonios ni proyectos inventados.
- **Accesibilidad**: contraste AA, foco visible, navegación por teclado (incluye menú móvil con Escape), etiquetas en el formulario, errores anunciados, `prefers-reduced-motion` respetado.
