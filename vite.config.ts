import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/.well-known/*', // Source directory containing .well-known
          dest: '.well-known' // Destination folder in dist
        },
        {
          src: 'src/_redirects', // _redirects file
          dest: '' // Places _redirects in the root of dist
        },
        {
          src: 'src/privacy.html', // Example static file
          dest: '' // Places privacy.html in the root of dist
        },
        {
          src: 'src/top-10-free-ai-image-generation-apps.html', // Example static file
          dest: '' // Places privacy.html in the root of dist
        },
        {
          src: 'src/robots.txt', // robots.txt for SEO
          dest: '' // Places robots.txt in the root of dist
        },
        {
          src: 'src/android-chrome-192x192.png', // Example static image
          dest: '' // Places it in the root of dist
        },
        {
          src: 'src/thumbnail.jpg', // Example thumbnail image
          dest: '' // Places it in the root of dist
        },
        {
          src: 'src/hero-img11.jpg', // Example thumbnail image
          dest: '' // Places it in the root of dist
        }
      ]
    })
  ],
  build: {
    outDir: 'dist' // Build output directory
  }
});
