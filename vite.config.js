import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import windicss from "vite-plugin-windicss";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [windicss(), vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
