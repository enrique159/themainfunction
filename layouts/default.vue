<template>
  <loading-state v-if="loading" />
  <div v-else>
    <main-header />
    <slot />
  </div>
</template>

<script lang="ts" setup>
const loading = ref(true)
const { me } = useAppStore()
const router = useRouter()

onBeforeMount(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  me().then(() => {
    loading.value = false
  }).catch(() => {
    router.push('/auth/signin')
  })
})
</script>

<style>

</style>