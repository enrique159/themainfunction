import { defineStore } from 'pinia'
import type { IUser } from '~/app/modules/users/domain/user'
import { signIn as signInUseCase } from '~/app/auth/repository/AuthRepository'
import type { ISignInPayload } from '~/app/auth/domain/auth'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    user: useLocalStorage('user', {
      id: '',
      username: '',
      fullName: '',
      email: '',
    }),
    token: useLocalStorage('token', ''),
  }),
  actions: {
    setUser(newUser: IUser) {
      console.log("bro si entra", newUser)
      this.user = newUser
    },
    setToken(newToken: string) {
      this.token
    },
    signIn(payload: ISignInPayload) {
      const action = signInUseCase(payload)
      console.log('Action 🚀:', action)
      action.then((response) => {
        console.log('Response ✅:', response)
        this.setUser(response.data)
        this.setToken("TESTING")
        return response
      }).catch((error) => {
        console.error('Error ❗️:', error.errors)
        return error
      })

      return action
    },
  },
})
