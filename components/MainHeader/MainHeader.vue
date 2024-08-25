<template>
  <header class="w-full h-[60px] pl-8 pr-4 divider-bottom flex justify-between items-center">
    <div class="flex items-center gap-6">
      <NuxtLink to="/">
        <logotype />
      </NuxtLink>
      <main-header-search-bar />
    </div>

    <div class="flex items-center">
      <NuxtLink
        v-for="option in menuOptions" 
        :key="`main-header-menu-option-${option.name}`" 
        :to="option.to"
        class="relative"
        :class="{ 'current-selector': isRouteSelected(option.to) }"
      >
        <button class="hover:bg-gray-100 rounded-lg px-4 py-3 flex items-center justify-center">
          <component :is="option.icon" :class="[ isRouteSelected(option.to) ? 'tc-primary' : 'tc-black-2' ]" :size="24" />
        </button>
      </NuxtLink>
      <main-header-profile-avatar class="ml-3" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { IconHome, IconBrandSafari, IconCircles, IconMessageCircle, IconInbox, IconSettings } from '@tabler/icons-vue'

const menuOptions = reactive([
  { name: 'Home', icon: IconHome, to: '/' },
  { name: 'Explore', icon: IconBrandSafari, to: '/explore' },
  { name: 'Projects', icon: IconCircles, to: '/projects' },
  { name: 'Messages', icon: IconMessageCircle, to: '/messages' },
  { name: 'Notifications', icon: IconInbox, to: '/notifications' },
  { name: 'Settings', icon: IconSettings, to: '/settings' },
])

const route = useRoute()

const isRouteSelected = (path: string) => route.path === path
</script>

<style lang="scss" scoped>
.current-selector::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 6px;
  border-radius: 6px 6px 0 0;
  background-color: $color-primary;
}
</style>