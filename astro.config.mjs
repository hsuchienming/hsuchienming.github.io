import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hsuchienming.github.io',
  output: 'static',
  build: {
    format: 'file',
  },
});
