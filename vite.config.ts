import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'demo',
  publicDir: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'demo/index.html'),
        alimentacion: resolve(__dirname, 'demo/alimentacion.html'),
        beneficios: resolve(__dirname, 'demo/beneficios.html'),
        contacto: resolve(__dirname, 'demo/contacto.html'),
        descargar: resolve(__dirname, 'demo/descargar.html'),
        equipo: resolve(__dirname, 'demo/equipo.html'),
        estadisticas: resolve(__dirname, 'demo/estadisticas.html'),
        faq: resolve(__dirname, 'demo/faq.html'),
        gestionMultiple: resolve(__dirname, 'demo/gestion-multiple.html'),
        recordatorios: resolve(__dirname, 'demo/recordatorios.html'),
        salud: resolve(__dirname, 'demo/salud.html'),
        tutoriales: resolve(__dirname, 'demo/tutoriales.html'),
      },
    },
  },
})
