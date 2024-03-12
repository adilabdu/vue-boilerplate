<script setup>
import FooterView from '@/views/FooterView.vue'
</script>

<template>
  <div class="fixed flex flex-col items-center justify-center top-0 left-0 right-0 bottom-0 p-4">
    <div class="grow w-full">
      <RouterView />
    </div>
    <FooterView />
  </div>
</template>

<style scoped>
</style>