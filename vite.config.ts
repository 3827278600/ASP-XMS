import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: boolean;
  }
}

export default defineConfig(({ command, mode }) => {
  const isQiankun = process.env.QIANKUN || false;
  console.log(command, mode);
  
  
  return {
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
    base: isQiankun ? '/sub-app/' : '/',
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  }
})
