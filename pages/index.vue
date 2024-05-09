<template>
  <div class="h-full min-h-[calc(100vh-68px)]">
    <UiBadge class="my-2 mx-auto" text="NOW PLAYING" />
    <div class="grid grid-cols-4 gap-4">
      <NuxtLink
        :to="`/movie/${movie.id}`"
        v-for="movie in data.movies"
        :key="movie.id"
      >
        <div class="w-full cursor-pointer">
          <NuxtImg
            placeholder
            :src="buildImgSrc(movie.poster_path)"
            alt="movie.title"
            class="w-full h-96 object-cover rounded-lg"
          />
          <h2 class="text-lg font-semibold text-center">{{ movie.title }}</h2>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/now_playing");

const buildImgSrc = (src) => {
  return `https://image.tmdb.org/t/p/w500${src}`;
};
</script>
