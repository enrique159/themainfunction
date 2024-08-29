<template>
  <div class="py-3 flex justify-between items-start gap-1">
    <UAvatar class="mt-4" size="lg" :src="user.profileAvatar" alt="Avatar" />
    <div class="flex flex-col w-full">
      <input
        class="ts-b3 tw-medium tc-black-0 w-full px-4 py-2 rounded-lg"
        placeholder="What are you up to now.."
      />
      <div class="flex items-center gap-1 pl-3">
        <!-- ATTACH CODE -->
        <UTooltip text="Attach code" :shortcuts="['⌘', 'P']">
          <button
            class="hover:bg-gray-100 rounded-lg px-2 py-2 flex items-center justify-center tc-text"
          >
            <icon-code-dots :size="24" />
          </button>
        </UTooltip>
        <!-- ATTACH IMAGE -->
        <UTooltip text="Attach an image" :shortcuts="['⌘', 'I']">
          <button
            class="hover:bg-gray-100 rounded-lg px-2 py-2 flex items-center justify-center tc-text"
          >
            <icon-photo :size="24" />
          </button>
        </UTooltip>
        <!-- ATTACH PROJECT -->
        <UTooltip text="Attach a project">
          <button
            class="hover:bg-gray-100 rounded-lg px-2 py-2 flex items-center justify-center tc-text"
          >
            <icon-brand-asana :size="24" />
          </button>
        </UTooltip>
        <!-- PRIVACY -->
        <UDropdown
          :items="[privacyOptions]"
          :popper="{ placement: 'bottom-start', arrow: true }"
        >
          <button
            class="hover:bg-gray-100 rounded-lg px-2 py-2 flex items-center justify-center ts-b4 tw-bold gap-1 tc-secondary"
          >
            <UIcon :name="privacyOptions.find((option) => option.value === selectedPrivacyPost)?.icon" class="w-6 h-6" />
            {{ privacyOptions.find((option) => option.value === selectedPrivacyPost)?.label }}
          </button>
        </UDropdown>
      </div>
    </div>
    <UButton size="md" color="black" variant="solid" label="Publish" class="mt-4">
      <template #trailing>
        <icon-send class="tc-white-0" :size="24" />
      </template>
    </UButton>
  </div>
</template>

<script setup lang="ts">
import {
  IconSend,
  IconCodeDots,
  IconPhoto,
  IconBrandAsana,
} from '@tabler/icons-vue'
import { type TPrivacyPostOption } from '~/types'
const { user } = useAppStore()

const privacyOptions = [
  {
    label: 'Public',
    value: 'public',
    icon: 'i-heroicons-globe-alt',
    click: () => setSelectedPrivacyPost('public'),
  },
  {
    label: 'Friends',
    value: 'friends',
    icon: 'i-heroicons-face-smile',
    click: () => setSelectedPrivacyPost('friends'),
  },
  {
    label: 'Just me',
    value: 'just-me',
    icon: 'i-heroicons-lock-closed',
    click: () => setSelectedPrivacyPost('just-me'),
  },
]

const selectedPrivacyPost = ref<TPrivacyPostOption>('public')
const setSelectedPrivacyPost = (option: TPrivacyPostOption) => {
  selectedPrivacyPost.value = option
}
</script>
