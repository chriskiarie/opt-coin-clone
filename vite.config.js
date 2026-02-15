import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Removing base: './' and using the default '/' often fixes Vercel path issues
  base: '/', 
  build: {
    outDir: 'dist',
  }
})
