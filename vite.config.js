import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base:
    process.env.NODE_ENV === "production" ? "/kamejimateria-portfolio/" : "/",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
