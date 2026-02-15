import { defineConfig } from 'vite'
import react from '@vitejs/react-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths in the built index.html
  build: {
    outDir: 'dist',
  }
})
