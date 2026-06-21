// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// 〔À COMPLÉTER : remplace par le domaine réel une fois réservé〕
// Sert au sitemap et aux URLs canoniques / Open Graph.
export default defineConfig({
  site: 'https://bathermex.com',
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});
