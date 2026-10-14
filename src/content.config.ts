import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * SERVICIOS — un archivo .md por servicio en src/content/servicios/.
 * El orden en la web lo define `order`.
 */
const servicios = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/servicios' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    /** Frase corta de la tarjeta en /servicios. */
    tagline: z.string(),
    /** Bajada de la página del servicio. */
    summary: z.string(),
    /** Subtítulo en mayúsculas (ej. «Redes para sus invitados»). */
    kicker: z.string().optional(),
    /** Texto de presentación del servicio. */
    intro: z.string().optional(),
    /** Dato destacado (ej. «48 – 72 hs» / «entrega del video»). */
    highlight: z.object({ value: z.string(), label: z.string() }).optional(),
    /** Lista principal: qué incluye. */
    includesLabel: z.string().default('Incluye'),
    includes: z.array(z.string()),
    /** Lista secundaria opcional (ej. «+ 3 piezas a elección»). */
    choicesLabel: z.string().optional(),
    choices: z.array(z.string()).default([]),
    /** Bloque destacado al final (ej. «Entrega en 48 hs»). */
    callout: z.object({ title: z.string(), text: z.string() }).optional(),
    /** Aclaración: qué no incluye o qué no reemplaza. */
    note: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

/**
 * PROYECTOS — un archivo .md por caso en src/content/proyectos/.
 * Copiar `_plantilla.md` para sumar uno nuevo. Los archivos que empiezan
 * con "_" se ignoran. Con `published: false` el proyecto no aparece.
 */
const proyectos = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      published: z.boolean().default(true),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      /** Nombre del proyecto o de la pareja. */
      title: z.string(),
      /** Nombres para mostrar en tipografía script (opcional). */
      couple: z.string().optional(),
      date: z.coerce.date().optional(),
      location: z.string().optional(),
      /** Servicios involucrados (slugs de src/content/servicios). */
      services: z.array(z.string()).default([]),
      /** Categorías para filtros (los filtros aparecen recién con 4+ proyectos). */
      categories: z.array(z.string()).default([]),
      /** Concepto creativo en una frase. */
      concept: z.string(),
      /** Bajada corta para tarjetas y buscadores. */
      excerpt: z.string(),
      /** Historia o rasgos de la pareja que inspiraron la propuesta (opcional). */
      story: z.string().optional(),
      /** Solución desarrollada (opcional; el cuerpo del .md amplía). */
      solution: z.string().optional(),
      /** Aplicaciones visuales: piezas o puntos de contacto. */
      applications: z.array(z.string()).default([]),
      cover: image(),
      coverAlt: z.string(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
            /** 'wide' ocupa dos columnas en desktop. */
            size: z.enum(['normal', 'wide']).default('normal'),
          }),
        )
        .default([]),
      /** Solo con autorización de la pareja. */
      testimonial: z
        .object({ quote: z.string(), author: z.string() })
        .optional(),
    }),
});

export const collections = { servicios, proyectos };
