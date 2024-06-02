<template>
  <div class="h-full w-full flex items-center justify-center">home</div>
</template>

<script setup>
const { data } = await useFetch("/api/now_playing");
</script>
