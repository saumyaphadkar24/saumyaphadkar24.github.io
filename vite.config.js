import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',            // use relative paths for all assets
  build: {
    outDir: 'docs',      // emit into docs/ instead of dist/
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
