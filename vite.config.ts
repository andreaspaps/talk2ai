import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/privacy.html',
          dest: '' // Copies privacy.html to the root of the output directory
        },
        {
          src: 'src/_redirects', // Ensure this line includes your _redirects file
          dest: '' // Copies _redirects to the root of the output directory
        },
        {
          src: 'src/robots.txt', // Ensure this line includes your _redirects file
          dest: '' // Copies _redirects to the root of the output directory
        },
        {
          src: 'src/android-chrome-192x192.png', // Ensure this line includes your _redirects file
          dest: '' // Copies _redirects to the root of the output directory
        },
        {
          src: 'src/thumbnail.jpg', // Ensure this line includes your _redirects file
          dest: '' // Copies _redirects to the root of the output directory
        },
        {
          src: 'src/netlify.toml', // Ensure this line includes your _redirects file
          dest: '' // Copies _redirects to the root of the output directory
        }
      ]
    })
  ],
  build: {
    // Specify your output directory if different
    outDir: 'dist' // Default output directory for Vite
  }
});
