<script setup>
import Heading from "@/components/Heading.vue";
</script>

<template>
  <ul class="flex gap-3 items-center">
    <li class="py-2 px-3">
      <RouterLink v-slot="{ isActive }" to="login">
        <Heading :h="isActive ? '3' : '4'">Login</Heading>
      </RouterLink>
    </li>
    <li class="py-2 px-3">
      <RouterLink v-slot="{ isActive }" to="register">
        <Heading :h="isActive ? '3' : '4'">Register</Heading>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>

</style>