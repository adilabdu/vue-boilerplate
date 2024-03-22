<script setup>
import Heading from "@/components/Heading.vue";
import http from "@/utils/http"
import Error from "@/utils/http/error.js";
import {useAuthenticationStore} from "@/composables/useAuthenticationStore.js";
import router from "@/router/index.js";

const authStore = useAuthenticationStore()

async function submit() {
  await http.post('/logout')
      .then(() => {
        authStore.removeUser();
        router.push({ name: 'homepage' })
      })
      .catch(error => new Error(error).notify())
}
</script>

<template>
  <form @submit.prevent.once="submit">
    <button type="submit">
      <Heading>Logout</Heading>
    </button>
  </form>
</template>

<style scoped>

</style>