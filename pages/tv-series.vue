<template>
  <div class="h-full min-h-[calc(100vh-68px)]">
    <UiBadge class="my-2" text="AIRING TODAY" />
    <div class="grid sm:grid-cols-4 grid-cols-2 gap-4">
      <NuxtLink
        :to="`/series/${serie.id}`"
        v-for="serie in data?.results"
        :key="serie.id"
      >
        <div class="w-full h-full cursor-pointer overflow-hidden rounded-lg">
          <NuxtImg
            placeholder
            :src="buildImg(serie.poster_path)"
            :alt="serie.title"
            class="w-full h-full object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/tv-series");
console.log(data.value);
</script>
