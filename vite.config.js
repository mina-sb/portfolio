import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  /*     base: "/my-portfolio/",
   */ plugins: [react()],
  assetsInclude: ['**/*.glb']
})
