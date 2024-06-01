<template>
  <div class="grid grid-cols-5 gap-x-8">
    <UiParts :data="segments" />
    <div class="col-span-4 flex flex-col gap-2">
      <h1 class="text-xl font-bold">Trending Movies</h1>
      <hr />
      <div class="flex flex-col">
        <h2 class="text-lg font-semibold" id="movie-popularity">Popularity</h2>
        <p class="text-gray-400 font-light">
          This page shows the popularity and vote average relation of the
          trending movies.
        </p>
      </div>
      <highcharts :options="options" />
      <div class="flex flex-col">
        <h2 class="text-lg font-semibold" id="movie-list">Movies</h2>
        <p class="text-gray-400 font-light">
          Movies on the chart are listed here.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <NuxtLink
          :to="`/movie/${movie.id}`"
          v-for="movie in data"
          :key="movie.id"
          class="border w-full p-2 rounded-lg bg-green-600 text-white font-light text-sm"
        >
          <span>
            {{ movie.title || movie.original_title || movie.original_name }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { data } = await useFetch("/api/trending");

const popularity_data = data.value.map((movie) => [
  movie.title || movie.original_title || movie.original_name,
  movie.popularity / 100,
]);

const vote_data = data.value.map((movie) => [
  movie.title || movie.original_title || movie.original_name,
  movie.vote_average,
]);

const options = ref({
  title: {
    text: null,
  },
  series: [
    {
      name: "Popularity",
      data: popularity_data,
      type: "bar",
      dataLabels: {
        enabled: true,
        format: "{y:.2f}",
      },
    },
    {
      name: "Average Vote",
      data: vote_data,
      type: "line",
    },
  ],
});

const segments = ref([
  {
    label: "Trending Movies",
    parts: [
      {
        label: "Popularity",
        link: "#movie-popularity",
      },
      {
        label: "Movie List",
        link: "#movie-list",
      },
    ],
  },
  {
    label: "TV Series",
    parts: [
      {
        label: "Popularity",
        link: "#popularity",
      },
      {
        label: "TV Series List",
        link: "#tv-series-list",
      },
    ],
  },
]);
</script>
