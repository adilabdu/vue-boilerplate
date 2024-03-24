<script setup>
import Heading from "@/components/Heading.vue";
import LogoutActionView from "@/views/AuthView/LogoutMenuItem.vue";
import { useAuthenticationStore } from "@/composables/useAuthenticationStore.js";
import { User, Settings, LogOut } from "lucide-vue-next";
import Button from "@/components/shadcn/ui/button/Button.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/shadcn/ui/dropdown-menu'
import LogoutMenuItem from "@/views/AuthView/LogoutMenuItem.vue";

const user = useAuthenticationStore().user
</script>

<template>

  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost">
        {{ user.name }}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User class="mr-2 h-4 w-4" />
          <span>Profile</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings class="mr-2 h-4 w-4" />
          <span>Settings</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <LogoutMenuItem />
    </DropdownMenuContent>
  </DropdownMenu>

</template>

<style scoped>

</style>