<script setup>
import http from "@/utils/http"
import Error from "@/utils/http/error.js";
import { useAuthenticationStore } from "@/composables/useAuthenticationStore.js";
import router from "@/router/index.js";
import { LogOut } from "lucide-vue-next";
import {
  DropdownMenuItem,
  DropdownMenuShortcut
} from "@/components/shadcn/ui/dropdown-menu/index.js";

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
    <DropdownMenuItem class="w-full" as="button">
      <LogOut class="mr-2 h-4 w-4" />
      <span>Log out</span>
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  </form>
</template>

<style scoped>

</style>