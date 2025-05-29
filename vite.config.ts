import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import svgr from 'vite-plugin-svgr';
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
