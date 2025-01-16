import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows the server to be accessible externally
    port: 5173, // Optional: Change the port if needed
  },
})
