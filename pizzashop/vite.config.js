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
  server: {
    open: true, // Automatically open the browser on server start
  },
});
