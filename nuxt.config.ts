import wasm from 'vite-plugin-wasm'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    experimental: {
      wasm: true,
    },
  },
  vite: {
    build: {
      target: 'esnext',
    },
    plugins: [wasm()],
  },
})
