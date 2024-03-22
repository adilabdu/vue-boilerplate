<script setup>
import FooterView from '@/views/FooterView.vue'
import HeaderView from "@/views/HeaderView/HeaderView.vue";
</script>

<template>
  <div class="overflow-auto flex flex-col gap-4 items-center justify-center top-0 left-0 right-0 bottom-0 p-4">
    <HeaderView />
    <div class="grow flex flex-col gap-4 w-full">
      <RouterView />
    </div>
    <FooterView />
  </div>
</template>

<style scoped>
</style>