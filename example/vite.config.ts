import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePlugin from 'vite-plugin-starter';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePlugin()],
});
