import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE è '/' in locale e per la repository username.github.io.
// Per una repo GitHub Pages chiamata 'portfolio', imposta VITE_BASE=/portfolio/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
});
