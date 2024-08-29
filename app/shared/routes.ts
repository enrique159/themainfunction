const finish = (string: string, end: string) => string.endsWith(end) ? string : `${string}${end}`
const finishSlash = (string: string) => finish(string, "/")


// AUTH ROUTES
const signIn = (baseUrl: string) => `${finishSlash(baseUrl)}auth/signin`
const signOut = (baseUrl: string) => `${finishSlash(baseUrl)}auth/signout`
const me = (baseUrl: string) => `${finishSlash(baseUrl)}auth/me`
// POSTS ROUTES
const getPosts = (baseUrl: string) => `${finishSlash(baseUrl)}posts`


export default {
  // AUTH ROUTES
  signIn,
  signOut,
  me,
  // POSTS ROUTES
  getPosts
}