<template>
  <div class="searchbar transition-fast bg-white-1 h-fit flex gap-2 items-center px-3 py-2 rounded-lg">
    <IconSearch class="tc-white-4" :size="24" />
    <input
      type="text"
      class="ts-b4 transition-fast bg-transparent h-full tc-white-4"
      placeholder="Type / to start searching.."
    />
  </div>
</template>

<script setup lang="ts">
import { IconSearch } from '@tabler/icons-vue'
</script>

<style lang="scss" scoped>
.searchbar {
  width: 280px;
}
.searchbar:focus-within {
  max-width: 340px;
  width: 340px;
}
</style>