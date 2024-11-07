// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  publicDir: "public", // Ensure Vite serves the public directory
  css: {
    preprocessorOptions: {
      scss: {
        // Additional configuration options for SCSS
      },
    },
  },
});
