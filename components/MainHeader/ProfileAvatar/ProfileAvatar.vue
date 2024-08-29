<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-end' }">
    <button class="profile-avatar">
      <img :src="user.profileAvatar" alt="ME" />
    </button>
  </UDropdown>
</template>

<script setup lang="ts">
const { user, signOut } = useAppStore()
const router = useRouter()
const toast = useToast()

const items = [
  [
    {
      label: 'Your profile',
      avatar: {
        src: user.profileAvatar,
      },
    },
  ],
  [
    {
      label: 'Settings',
      icon: 'i-heroicons-cog',
      click: () => {
        console.log('Edit')
      },
    },
    {
      label: 'Privacy',
      icon: 'i-heroicons-shield-check-20-solid',
      click: () => {
        console.log('Privacy')
      },
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
      label: 'Sign out',
      labelClass: 'text-red-500',
      icon: 'i-heroicons-arrow-left-start-on-rectangle-20-solid',
      iconClass: 'text-red-400',
      click: async () => {
        await signOut().then(() => {
          router.push('/auth/signin')
        })
        .catch((error) => {
          toast.add({
            title: 'Error',
            description: 'Failed to sign out',
            color: 'red',
          })
          console.error(error)
        })
      },
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
  border: 2px solid white;
  outline: 2px solid transparent;
  background-color: $color-white-2;

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
