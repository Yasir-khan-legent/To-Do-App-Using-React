// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⬇️ Ye line homepage ke base URL ke liye zaroori hai
export default defineConfig({
  plugins: [react()],
  base: '/To-Do-App-Using-React/', // <-- same as repo name
})