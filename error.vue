<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold">404</h1>
      <p class="text-lg">{{ error?.message || "Page not found" }}</p>
      <button @click="handleError">Go to home page.</button>
    </div>
  </div>
</template>
