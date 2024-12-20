import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',           // Set the output folder to 'build'
    assetsDir: 'static/assets', // Bundled assets will be stored here
    rollupOptions: {
      input: 'index.html',     // Entry point for Vite
    },
  },
});
