<template>
  <div class="h-full w-full flex flex-col">
    <div class="w-full h-96 cursor-pointer overflow-hidden">
      <NuxtImg
        class="h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
        :src="img"
        alt="movie poster"
      />
    </div>
    <h3 class="text-sm font-semibold py-2">{{ title }}</h3>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
  img: string;
}

defineProps<IProps>();
</script>
