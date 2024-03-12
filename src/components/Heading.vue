<script setup>
import { computed } from "vue";

const props = defineProps({
  h: {
    type: String,
    default: "4",
    validator(value) {
      return ["1", "2", "3", "4", "5", "6"].includes(value);
    },
  },
});

const element = computed(() => {
  return `h${props.h}`;
});

const style = computed(() => {
  switch (props.h) {
    case "1":
      return "text-xl font-bold";
    case "2":
      return "text-base font-semibold";
    case "3":
      return "text-sm font-semibold";
    case "5":
      return "text-xs";
    case "6":
      return "text-xs text-gray-500";
    case "4":
    default:
      return "text-sm";
  }
});
</script>

<template>
  <component :class="style" :is="element">
    <slot></slot>
  </component>
</template>

<style scoped>

</style>