<script setup>
import PlaceholderLogo from "@/views/PlaceholderLogo.vue";
import GuestNavigation from "@/views/HeaderView/GuestNavigation.vue";
import MemberNavigation from "@/views/HeaderView/MemberNavigation.vue";
import { computed } from "vue";
import { useAuthenticationStore } from "@/composables/useAuthenticationStore.js";

const authStore = useAuthenticationStore()
const isAuthenticated = computed(() => Boolean(authStore.user))

</script>

<template>

  <div
    class="max-w-xl w-full mx-auto flex items-center justify-between gap-4"
  >

    <RouterLink :to="{ name: 'homepage' }">
      <PlaceholderLogo />
    </RouterLink>

    <nav>
      <MemberNavigation v-if="isAuthenticated" />
      <GuestNavigation v-else />
    </nav>
  </div>

</template>

<style scoped>

</style>