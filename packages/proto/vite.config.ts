import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        teams: resolve(__dirname, 'teams.html'),
        signup: resolve(__dirname, 'SignUp.html'), 
      },
    },
  },
});