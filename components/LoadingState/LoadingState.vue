<template>
  <div class="loading-state">
    <UProgress animation="carousel" color="purple" />
    <p class="absolute top-[50%] text-center text-slate-400 w-full">
      Loading...
    </p>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.loading-state {
  width: 100%;
  height: 100vh;
  position: relative;
}
</style>