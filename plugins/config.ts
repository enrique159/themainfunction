export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig()

  return {
    provide: {
      baseUrl: config.public.apiBase as string,
    },
  }
})