import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        // Copy .well-known directory as-is to dist/.well-known
        {
          src: 'src/.well-known', 
          dest: '.well-known' // Ensure this copies the entire folder to dist
        },
        {
          src: 'src/_redirects',  // Copy _redirects file to the root of dist
          dest: ''
        },
        {
          src: 'src/privacy.html',  // Example static file
          dest: ''
        },
        {
          src: 'src/robots.txt',  // Example static file
          dest: ''
        },
        {
          src: 'src/android-chrome-192x192.png',  // Example static file
          dest: ''
        },
        {
          src: 'src/thumbnail.jpg',  // Example static file
          dest: ''
        },
        {
          src: 'src/netlify.toml',  // Example static file
          dest: ''
        }
      ]
    })
  ],
  build: {
    // Specify your output directory if different
    outDir: 'dist' // Default output directory for Vite
  }
});
