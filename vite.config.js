import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false, // Optional: Disable caching for debugging
      include: ['./src/**/*.js', './src/**/*.jsx'], // Adjust based on your file structure
      exclude: [], // Exclude any files if needed
      fix: true, // Optional: Automatically fix ESLint errors
      emitWarning: false, // Disable warnings in the terminal
      emitError: false, // Disable errors in the terminal
      failOnWarning: false, // Don't fail the build on warnings
      failOnError: false, // Don't fail the build on errors
    //   overlay: false, // Disable ESLint overlay in the browser
    }),
  ],
});