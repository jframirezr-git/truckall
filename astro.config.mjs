import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jframirezr-git.github.io/truckall',
  base: '/truckall/',
  vite: {
    plugins: [tailwindcss()]
  }
});