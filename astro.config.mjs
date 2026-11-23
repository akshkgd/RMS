// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ramsanehimishra.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'hi', locales: { hi: 'hi-IN', en: 'en-IN' } },
    }),
  ],
});
