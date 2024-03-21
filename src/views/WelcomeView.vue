<script setup>
import Heading from '@/components/Heading.vue'
import LoginView from "@/views/LoginView.vue";
import CardContent from "@/components/shadcn/ui/card/CardContent.vue";
import Card from "@/components/shadcn/ui/card/Card.vue";
</script>

<template>

  <Card class="container flex h-24 items-center justify-center mx-auto max-w-xl">
    <CardContent class="flex flex-col p-0 overflow-auto sm:items-center justify-center">
      <Heading class="truncate" h="3">
        Forms with
        <a class="hover:underline underline-offset-2 decoration-blue-500 text-blue-500" target="_blank" href="https://www.shadcn-vue.com/docs/components/form.html">shadcn-vue</a>
      </Heading>
      <Heading class="truncate" h="3">Vue 3 + Tailwind CSS 3.4 Boilerplate</Heading>
      <Heading class="truncate">Pinia + Vue Router included</Heading>
    </CardContent>
  </Card>

  <LoginView />

</template>

<style scoped>

</style>