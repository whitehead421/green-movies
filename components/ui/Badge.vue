<template>
  <div
    class="text-sm w-min px-3 py-2 rounded-lg font-semibold text-green-700 bg-green-100 flex items-center justify-center whitespace-nowrap"
  >
    {{ text }}
  </div>
</template>

<script setup>
defineProps(["text"]);
</script>
