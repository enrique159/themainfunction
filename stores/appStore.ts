import { defineStore } from 'pinia'
import type { IUser } from '~/app/modules/users/domain/user'
import { type RemovableRef, useLocalStorage } from '@vueuse/core'
import type { ISignInPayload } from '~/app/auth/domain/auth'
import {
  signIn as signInUseCase,
  signOut as signOutUseCase,
  me as meUseCase
} from '~/app/auth/repository/AuthRepository'

type TAppState = {
  user: RemovableRef<Partial<IUser>>,
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): TAppState => ({
    user: useLocalStorage('user', {
      id: '',
      username: '',
      fullName: '',
      profileAvatar: '',
      email: '',
      bio: '',
      location: '',
      company: '',
      country: '',
      githubLink: '',
      website: '',
    }),
  }),
  actions: {
    setUser(newUser: IUser) {
      this.user = newUser
    },
    clearUser() {
      this.user = {
        id: '',
        username: '',
        fullName: '',
        profileAvatar: '',
        email: '',
        bio: '',
        location: '',
        company: '',
        country: '',
        githubLink: '',
        website: '',
      }
    },

    // API FETCH
    signIn(payload: ISignInPayload) {
      const action = signInUseCase(payload)
      action.then((response) => {
        this.setUser(response.data)
        return response
      }).catch((error) => {
        return error
      })

      return action
    },

    signOut() {
      const action = signOutUseCase()
      action.then((response) => {
        this.clearUser()
        return response
      }).catch((error) => {
        return error
      })

      return action
    },

    me() {
      const action = meUseCase()
      action.then((response) => {
        this.setUser(response.data)
        return response
      }).catch((error) => {
        return error
      })

      return action
    }
  },
})
