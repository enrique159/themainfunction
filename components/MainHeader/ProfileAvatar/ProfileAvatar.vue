<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-end' }">
    <button class="profile-avatar">
      <img src="~/assets/profile_avatar.avif" alt="ME" />
    </button>
  </UDropdown>
</template>

<script setup lang="ts">
const items = [
  [
    {
      label: 'Profile',
      avatar: {
        src: '~/assets/profile_avatar.avif',
      },
    },
  ],
  [
    {
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      shortcuts: ['E'],
      click: () => {
        console.log('Edit')
      },
    },
    {
      label: 'Duplicate',
      icon: 'i-heroicons-document-duplicate-20-solid',
      shortcuts: ['D'],
      disabled: true,
    },
  ],
  [
    {
      label: 'Archive',
      icon: 'i-heroicons-archive-box-20-solid',
    },
    {
      label: 'Move',
      icon: 'i-heroicons-arrow-right-circle-20-solid',
    },
  ],
  [
    {
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid',
      shortcuts: ['⌘', 'D'],
    },
  ],
]
</script>

<style lang="scss" scoped>
.profile-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid transparent;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    outline: 2px solid $color-primary;
  }
}
</style>
