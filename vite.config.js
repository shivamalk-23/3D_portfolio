import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  plugins: [
    react(), // React plugin should typically come first
    glsl(),  // GLSL plugin
  ],
});
