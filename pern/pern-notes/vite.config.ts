import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/client'),
    },
  },
 server: {
  host: '0.0.0.0',
  port: 3000,
  allowedHosts: ['ip172-18-0-21-d0c3qm8l2o9000fgd1k0-3000.dir>
}
    
})