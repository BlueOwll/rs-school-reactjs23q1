/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      // default settings on build (i.e. fail on error)
      ...eslint(),
      apply: 'build',
    },
    react(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/', 'dist', 'cypress'],
      extension: ['.js', '.ts', '.tsx', '.jsx'],
      requireEnv: true,
    }),
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
