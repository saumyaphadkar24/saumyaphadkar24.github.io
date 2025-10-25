import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',            // use relative paths for all assets

  build: {
    outDir: 'docs',      // emit into docs/ instead of dist/
    emptyOutDir: true,

    // Build optimizations
    sourcemap: false,    // Disable source maps for production (smaller build)
    minify: 'terser',    // Use terser for better minification

    terserOptions: {
      compress: {
        drop_console: true,      // Remove console.logs in production
        drop_debugger: true,      // Remove debugger statements
        pure_funcs: ['console.log', 'console.info'],  // Remove specific console methods
      },
      format: {
        comments: false,          // Remove all comments
      },
    },

    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
        },
        // Clean asset naming
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },

    // Asset optimization
    assetsInlineLimit: 4096,  // Inline assets < 4kb as base64
    chunkSizeWarningLimit: 600, // Warning for chunks > 600kb
  },

  plugins: [
    react(),
    tailwindcss(),
  ],
})
