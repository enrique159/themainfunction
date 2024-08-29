
export default defineNuxtRouteMiddleware(async (to, from) => {
  const isAuthenticated = true
  if (!isAuthenticated) {
    return navigateTo('/auth/signin')
  }
})
