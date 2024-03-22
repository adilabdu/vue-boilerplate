<script setup>

import Heading from "@/components/Heading.vue";
import LogoutActionView from "@/views/AuthView/LogoutActionView.vue";
</script>

<template>
  <li class="py-2 px-3">
    <RouterLink v-slot="{ isActive }" to="dashboard">
      <Heading :h="isActive ? '3' : '4'">Dashboard</Heading>
    </RouterLink>
  </li>
  <li class="py-2 px-3">
    <RouterLink v-slot="{ isActive }" to="preferences">
      <Heading :h="isActive ? '3' : '4'">Preferences</Heading>
    </RouterLink>
  </li>
  <li class="py-2 px-3">
    <LogoutActionView />
  </li>
</template>

<style scoped>

</style>