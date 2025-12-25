// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://victorheras.me',
  trailingSlash: 'ignore',

  // Performance optimizations
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Target modern browsers - removes legacy polyfills
      target: 'es2020',
      // Minification
      minify: 'esbuild',
      // CSS code splitting
      cssCodeSplit: true,
      // Create source maps for debugging
      sourcemap: true,
    },
  },
});
