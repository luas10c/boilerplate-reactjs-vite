import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

const config = defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '#': path.join(import.meta.dirname, 'src')
    }
  }
})

export default config
