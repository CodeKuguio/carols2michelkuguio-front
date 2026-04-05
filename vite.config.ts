import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'
import vercel from 'vite-plugin-vercel';
// https://vite.dev/config/
export default defineConfig({
  plugins: [vercel()],
  server: {
    allowedHosts: ['carols2michel.kuguio.com.br'],
  },
  build: {
    outDir: 'build/client',
  },
})
