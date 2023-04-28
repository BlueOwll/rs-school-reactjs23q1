/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      // default settings on build (i.e. fail on error)
      ...eslint(),
      apply: 'build',
    },
    react(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
