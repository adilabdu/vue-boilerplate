<script setup>
import Heading from '@/components/Heading.vue'
import { onMounted, ref } from "vue";
import http from "@/utils/http"

const ip = ref({})
const geo = ref({})

onMounted(async () => {
  ip.value = (await http.get('https://api.ipify.org?format=json')).data
  geo.value = (await http.get(`https://ipinfo.io/${ip.value['ip']}/geo`)).data
})
</script>

<template>

  <div class="container mx-auto max-w-xl rounded-sm border shadow flex flex-col items-center justify-center h-24">
    <Heading h="3">Vue 3 + Tailwind CSS 3.4 Boilerplate</Heading>
    <Heading>Pinia + Vue Router included</Heading>
  </div>

  <div class="container mx-auto max-w-xl flex flex-col gap-2 overflow-auto rounded-sm shadow border p-4 bg-gray-100 mt-4">
    <pre>ip_address: {{ ip }}</pre>
    <pre>geolocation: {{ geo }}</pre>
  </div>

</template>

<style scoped>

</style>