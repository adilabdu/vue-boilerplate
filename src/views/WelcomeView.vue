<script setup>
import Heading from '@/components/Heading.vue'
import LoginView from "@/views/AuthView/LoginView.vue";
import CardContent from "@/components/shadcn/ui/card/CardContent.vue";
import Card from "@/components/shadcn/ui/card/Card.vue";
import CardHeader from "@/components/shadcn/ui/card/CardHeader.vue";
import CardTitle from "@/components/shadcn/ui/card/CardTitle.vue";
import CardDescription from "@/components/shadcn/ui/card/CardDescription.vue";
</script>

<template>

  <Card class="container mx-auto max-w-xl">
    <CardHeader>
      <CardTitle>Authentication</CardTitle>
      <CardDescription>Registration and Login module using Token-Based Authentication and Laravel Sanctum as Backend</CardDescription>
    </CardHeader>
    <CardContent class="">
      <Heading class="truncate" h="3">Vue 3 + Tailwind CSS 3.4 Boilerplate</Heading>
      <Heading class="truncate">Pinia + Vue Router included</Heading>
    </CardContent>
  </Card>

</template>

<style scoped>

</style>