<template>
  <div class="post-card">
    <header class="flex justify-between items-start">
      <div class="flex">
        <UAvatar size="2xl" class="mt-1" :src="post.user?.profileAvatar" alt="Avatar" />
        
        <div class="flex flex-col gap-1 px-3">
          <NuxtLink to="/">
            <span class="ts-b5 tw-medium tc-text-light">@{{ post.user.username }}</span>
          </NuxtLink>
          <p class="ts-b3 tw-bold">{{ post.user.username }}</p>
          <p v-if="fullPosition" class="ts-b4 tc-white-5 tw-medium">
            {{ post.user.position }} at <nuxt-link to="/"><span class="tc-primary tw-bold">/{{ post.user.company }}</span></nuxt-link>
          </p>
          <p v-else-if="post.user.company">
            Works at <nuxt-link to="/"><span class="tc-primary tw-bold">/{{ post.user.company }}</span></nuxt-link>
          </p>
        </div>
      </div>

      <button class="hover:bg-gray-100 active:bg-gray-200 rounded-lg px-2">
        <IconDots size="24" class="tc-text-light" />
      </button>
    </header>

    <section class="py-4">
      <span class="ts-b5 tc-white-4">{{ dateRelative(post.createdAt) }}</span>
    </section>

    <section>
      <p class="ts-b4 tc-text tw-medium">{{ post.content }}</p>
    </section>

    <section class="flex justify-between py-4 mb-3">
      <div class="flex items-center gap-1">
        <button class="hover:bg-gray-100 active:bg-gray-200 px-2 py-1 rounded-lg flex items-center gap-1">
          <IconRocket size="24" />
          <span class="ts-b5 tw-semibold">10 Rockets</span>
        </button>
        <button class="hover:bg-gray-100 active:bg-gray-200 px-2 py-1 rounded-lg flex items-center gap-1">
          <IconMessage2 size="24" />
          <span class="ts-b5 tw-semibold">3 Comments</span>
        </button>
      </div>

      <div class="flex items-center gap-1">
        <button class="hover:bg-gray-100 active:bg-gray-200 px-2 py-1 rounded-lg flex items-center gap-1">
          <IconShare size="24" />
        </button>
        <button class="hover:bg-gray-100 active:bg-gray-200 px-2 py-1 rounded-lg flex items-center gap-1">
          <IconDeviceFloppy size="24" />
        </button>
      </div>
    </section>

    <footer>
      <div class="flex items-center gap-3">
        <div class="bg-white-1 rounded-lg w-full px-2 py-2 flex items-center gap-1">
          <button class="tc-black-4">
            <IconPaperclip size="20" />
          </button>
          <button class="tc-black-4">
            <IconCodeDots size="20" />
          </button>
          <input
            type="text"
            class="bg-transparent w-full ts-b4 tw-medium tc-text ml-2"
            placeholder="Write a comment..."
          >
        </div>
        <UButton size="md" color="black" variant="solid" class="px-4">
          <template #trailing>
            <icon-send class="tc-white-0" :size="24" />
          </template>
        </UButton>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { IconDots } from '@tabler/icons-vue'
import { IconRocket, IconMessage2, IconShare, IconDeviceFloppy, IconSend, IconPaperclip, IconCodeDots } from '@tabler/icons-vue'
import type { IPost } from '~/app/modules/posts/domain/post';

const props = defineProps<{
  post: IPost
}>()

const { dateRelative } = useDate()
const fullPosition = computed(() => props.post.user.position && props.post.user.company)
</script>

<style lang="scss" scoped>
.post-card {
  width: 100%;
  height: fit-content;
  padding: 1.4rem;
  border-radius: $border-radius-3;
  border: 1px solid $color-white-2;
}
</style>