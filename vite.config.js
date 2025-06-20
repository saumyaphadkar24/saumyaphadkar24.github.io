// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// pull in the Tailwind Vite plugin:
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),      // ← add this
  ],
})
