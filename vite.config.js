import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    // Ceci force Vite à renvoyer index.html pour toutes les URLs
    historyApiFallback: true
  }
});
