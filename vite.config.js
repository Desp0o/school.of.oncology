import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
      chunkSizeWarningLimit: 1500, // Adjust to 1000 kB or as needed
    }
})
