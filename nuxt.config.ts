// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: { head: { link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }]}},
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3333',
    }
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  devtools: { enabled: false },
  modules: ['@vueuse/nuxt', '@nuxt/ui', '@pinia/nuxt'],
  colorMode: {
    preference: 'light',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/styles/main.scss";',
        },
      },
    },
  },
})