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
    :class="[ isAuthenticated ? 'max-w-4xl' : 'max-w-xl' ]"
    class="w-full mx-auto flex items-center justify-between gap-4"
  >

    <RouterLink :to="{ name: 'homepage' }">
      <PlaceholderLogo />
    </RouterLink>

    <nav>
      <ul class="flex gap-3 items-center">
        <template v-if="isAuthenticated">
          <MemberNavigation />
        </template>
        <template v-else>
          <GuestNavigation />
        </template>
      </ul>
    </nav>
  </div>

</template>

<style scoped>

</style>