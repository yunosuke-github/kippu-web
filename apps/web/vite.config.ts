import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    // BFF（GraphQL）へのリクエストを中継する
    proxy: {
      '/graphql': 'http://localhost:4000',
    },
  },
})
