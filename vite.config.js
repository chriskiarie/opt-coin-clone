import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths for Vercel deployment
  resolve: {
    alias: {
      // Ensures that if main.jsx imports App, it finds it correctly
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
    // Ensures the build fails explicitly if an import is missing
    rollupOptions: {
      external: [],
    }
  }
})
