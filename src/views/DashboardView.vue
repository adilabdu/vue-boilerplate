<script setup>

import Card from "@/components/shadcn/ui/card/Card.vue";
import CardHeader from "@/components/shadcn/ui/card/CardHeader.vue";
import CardDescription from "@/components/shadcn/ui/card/CardDescription.vue";
import CardTitle from "@/components/shadcn/ui/card/CardTitle.vue";
</script>

<template>

  <Card class="container max-w-xl mx-auto">
    <CardHeader>
      <CardTitle>Dashboard</CardTitle>
      <CardDescription>
        Find all the services you need on this dashboard, including analytics data,
        quick actions, and data you frequently access.
      </CardDescription>
    </CardHeader>
  </Card>

</template>

<style scoped>

</style>