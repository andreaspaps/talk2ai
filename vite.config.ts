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
          dest: ''
        },
        {
          src: 'src/_redirects', // Ensure this line is only included if the file exists
          dest: ''
        }
      ]
    })
  ]
});
