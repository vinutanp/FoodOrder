import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      // Options for image optimization (if needed)
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 3 },
      svgo: { plugins: [{ removeViewBox: false }] },
    }),
  ],
})

