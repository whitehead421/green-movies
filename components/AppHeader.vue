<template>
  <header class="py-4 flex items-center justify-between">
    <h1 class="flex gap-2 text-xl items-center font-semibold">
      <span class="bg-green-600 p-1 rounded-md text-white">GREEN</span>
      <span class="text-green-600">MOVIES</span>
    </h1>
    <div class="flex gap-12 items-center">
      <nav class="flex gap-12 items-center text-md">
        <NuxtLink to="/" class="hover:underline">Latest</NuxtLink>
        <NuxtLink to="/genres" class="hover:underline">Genre</NuxtLink>
        <NuxtLink to="/movies" class="hover:underline">Movie</NuxtLink>
        <NuxtLink to="/series" class="hover:underline">TV Series</NuxtLink>
      </nav>
      <div class="border-r border-gray h-6"></div>
      <Icon name="fluent:search-48-regular" size="28" class="cursor-pointer" />
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
