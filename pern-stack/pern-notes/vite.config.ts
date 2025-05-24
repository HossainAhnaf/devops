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
  allowedHosts: ['ip172-18-0-72-d0cp64ol2o9000a5rne0-3000.direct.labs.play-with-docker.com']
}

})
