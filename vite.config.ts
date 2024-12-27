import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";


export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    open: true,
    host: '0.0.0.0',
    strictPort: false,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
