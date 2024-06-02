<template>
  <header
    class="py-4 flex md:flex-row items-center sm:justify-between flex-col justify-center gap-4 md:gap-0"
  >
    <NuxtLink to="/">
      <h1
        class="flex gap-2 text-xl items-center font-semibold justify-center sm:justify-normal"
      >
        <span class="bg-green-600 p-1 rounded-md text-white">GREEN</span>
        <span class="text-green-600">MOVIES</span>
      </h1>
    </NuxtLink>
    <div class="flex gap-12 items-center">
      <nav class="flex gap-12 items-center text-md">
        <NuxtLink to="/charts" class="hover:underline">Charts</NuxtLink>
        <NuxtLink to="/movies" class="hover:underline">Movies</NuxtLink>
        <NuxtLink to="/series" class="hover:underline">TV Series</NuxtLink>
      </nav>
      <div class="border-r border-gray h-6"></div>
      <Icon
        @click="toggleSearch"
        name="fluent:search-48-regular"
        size="28"
        class="cursor-pointer"
      />
    </div>
  </header>
  <SearchBox v-if="isSearchOpen" @close="toggleSearch" />
</template>

<script setup lang="ts">
const isSearchOpen = ref(false);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (isSearchOpen.value) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
};
</script>
