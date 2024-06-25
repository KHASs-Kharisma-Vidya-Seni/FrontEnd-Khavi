import path from "path";
import { defineConfig } from "vite";
// import vercel from 'vite-plugin-vercel';
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
