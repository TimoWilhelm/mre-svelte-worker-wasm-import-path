import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite';
import wasm from "vite-plugin-wasm";

const target = ['chrome89', 'safari15', 'firefox89'];
const plugins = [sveltekit(), wasm()];

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  worker: {
    format: "es",
    plugins
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
  build: {
    assetsInlineLimit: 0,
    target,
    minify: 'esbuild',
  }
})
