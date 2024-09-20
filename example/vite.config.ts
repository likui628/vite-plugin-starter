import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePlugin from 'vite-plugin-starter';
import Inspect from 'vite-plugin-inspect';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePlugin(),
    Inspect({
      build: true,
      outputDir: '.vite-inspect',
    }),
  ],
});
