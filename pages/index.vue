<template>
  <main class="main-class lg:max-w-[1210px] lg:mx-auto">
    <section>
      menu
    </section>
    <section>
      <create-post-feed />
      <post-feed />
    </section>
    <section>
      news
    </section>
  </main>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Home / (themainfunction)',
  description: 'Home page',
  keywords: 'home, page',
})
</script>

<style lang="scss" scoped>
.main-class {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
}
</style>