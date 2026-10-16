import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo "maxin7399.github.io" -> se sirve en la raíz. Si usas otro nombre de repo, cambia a '/<repo>/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
