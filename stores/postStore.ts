import { defineStore } from 'pinia'
import type { IPost } from '~/app/modules/posts/domain/post'
import { getPosts as getPostsUseCase } from '~/app/modules/posts/repository/PostsRepository'
import type { MetaPage } from '~/app/shared/types/FetchPage'

type TPostState = {
  posts: Array<IPost>
  meta?: MetaPage
}

export const usePostStore = defineStore({
  id: 'post',
  state: (): TPostState => ({
    posts: [],
    meta: undefined
  }),
  actions: {
    setMeta(meta: MetaPage | undefined) {
      this.meta = meta
    },
    setPosts(posts: Array<IPost>) {
      this.posts = posts
    },
    clearPosts() {
      this.posts = []
    },
    async getPosts() {
      const action = getPostsUseCase()
      action.then((response) => {
        this.setPosts(response.data)
        this.setMeta(response.meta)
        return response
      }).catch((error) => {
        return error
      })

      return action
    }
  }
})
