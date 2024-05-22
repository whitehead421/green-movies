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
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
        <NuxtLink to="/popularity" class="hover:underline">Popularity</NuxtLink>
        <NuxtLink to="/movies" class="hover:underline">Movie</NuxtLink>
        <NuxtLink to="/series" class="hover:underline">TV Series</NuxtLink>
      </nav>
      <div class="border-r border-gray h-6"></div>
      <Icon name="fluent:search-48-regular" size="28" class="cursor-pointer" />
    </div>
  </header>
</template>
