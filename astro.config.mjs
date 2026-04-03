import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://orcic.mx',
  base: '/modern',
  integrations: [tailwind()],
  output: 'static',
});
