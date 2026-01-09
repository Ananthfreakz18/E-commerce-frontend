import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://e-commerce-lsnp.onrender.com',
        changeOrigin: true
      }
    }
  },

  preview: {
    host: true,
    port: process.env.PORT || 4173,
    allowedHosts: ['e-commerce-frontend-ztz4.onrender.com']
  }
})
