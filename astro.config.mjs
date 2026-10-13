// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

export default defineConfig({
  // Dominio definitivo: configurarlo en PUBLIC_SITE_URL (ver .env.example).
  // Sin dominio no se genera sitemap ni URL canónica.
  site: PUBLIC_SITE_URL || undefined,
  trailingSlash: 'ignore',
  // Pasa la clase de alcance a componentes hijos (ej. <Isotipo class="..." />).
  scopedStyleStrategy: 'class',
  integrations: PUBLIC_SITE_URL ? [sitemap({ filter: (page) => !page.includes('/404') })] : [],
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
