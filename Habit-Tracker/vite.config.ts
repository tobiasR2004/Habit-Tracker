import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcssVite from '@tailwindcss/vite' // el plugin correcto

export default defineConfig({
  plugins: [react(), tailwindcssVite()],
})