<template>
  <div class="flex flex-col">
    <div class="flex items-center space-x-4" v-if="loadingState === LoadingStates.LOADING">
      <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
      <div class="space-y-2">
        <USkeleton class="h-4 w-[250px]" />
        <USkeleton class="h-4 w-[200px]" />
      </div>
    </div>
    <post-feed-post-card
      v-else-if="loadingState === LoadingStates.SUCCESS"
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
    <div v-else-if="loadingState === LoadingStates.ERROR" class="text-red-500">
      Failed to fetch posts
    </div>
    <div v-else>
      No posts found
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePostStore } from '~/stores/postStore'
import type { IPost } from '~/app/modules/posts/domain/post'
import { type TLoadingState, LoadingStates } from '~/types'

const toast = useToast()
const { getPosts } = usePostStore()
const loadingState = ref<TLoadingState>(LoadingStates.IDLE)
const posts = ref<IPost[]>([])

const fetchPosts = async () => {
  loadingState.value = LoadingStates.LOADING
  await getPosts()
    .then((response) => {
      loadingState.value = LoadingStates.SUCCESS
      posts.value = response.data
    })
    .catch((error) => {
      console.log(error)
      loadingState.value = LoadingStates.ERROR
      toast.add({
        title: 'Error',
        description: 'Failed to fetch posts',
        color: 'red',
      })
    })
}

fetchPosts()
</script>
