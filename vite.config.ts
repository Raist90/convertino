import react from '@vitejs/plugin-react'
import ssr from 'vike/plugin'
import { defineConfig } from 'vite'
import vercel from 'vite-plugin-vercel'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({}),
    ssr({
      prerender: true,
    }),
    vercel(),
  ],
})
