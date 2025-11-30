import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/truckall/',
  vite: {
    plugins: [tailwindcss()]
  }
});