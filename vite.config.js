import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Do NOT include 'base' or 'resolve' for now. 
  // Let Vite handle the defaults.
})
