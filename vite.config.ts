import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig(({ mode }) => {
  return {
    base: '/',
    build: {
      sourcemap: mode === 'development' ? 'inline' : false,
      minify: mode !== 'development',
    },
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        // Usamos import.meta.dirname en lugar de __dirname para compatibilidad futura
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: parseInt(process.env.PORT || '5173'),
      strictPort: true,
    },
    preview: {
      host: '0.0.0.0',
      port: parseInt(process.env.PORT || '4173'),
    },
  }
})