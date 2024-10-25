import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/privacy.html',  // Copy from `src`
          dest: ''                  // Copy to the root of `dist`
        }
      ]
    })
  ]
});
