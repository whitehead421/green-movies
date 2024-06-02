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
      <highcharts :options="movie_chart_options" />
      <div class="flex flex-col">
        <h2 class="text-lg font-semibold" id="movie-list">Movies</h2>
        <p class="text-gray-400 font-light">
          Movies on the chart are listed here.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <NuxtLink
          :to="`/movies/${movie.id}`"
          v-for="movie in data.movies"
          :key="movie.id"
          class="border w-full p-2 rounded-lg bg-green-600 text-white font-light text-sm"
        >
          <span>
            {{ movie.title || movie.original_title || movie.original_name }}
          </span>
        </NuxtLink>
      </div>
      <h1 class="text-xl font-bold">Trending Tv Shows</h1>
      <hr />
      <div class="flex flex-col">
        <h2 class="text-lg font-semibold" id="popularity">Popularity</h2>
        <p class="text-gray-400 font-light">
          This page shows the popularity and vote average relation of the
          trending tv shows.
        </p>
        <highcharts :options="tv_chart_options" />
        <div class="flex flex-col">
          <h2 class="text-lg font-semibold" id="tv-series-list">TV Series</h2>
          <p class="text-gray-400 font-light">
            TV Series on the chart are listed here.
          </p>
          <div class="grid grid-cols-2 gap-2">
            <NuxtLink
              :to="`/series/${tv.id}`"
              v-for="tv in data.tvShows"
              :key="tv.id"
              class="border w-full p-2 rounded-lg bg-green-600 text-white font-light text-sm"
            >
              <span>{{ tv.name || tv.original_name }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { data } = await useFetch("/api/trending");

const movie_popularity_data = data.value.movies.map((movie) => [
  movie.title || movie.original_title || movie.original_name,
  movie.popularity / 100,
]);

const movie_vote_data = data.value.movies.map((movie) => [
  movie.title || movie.original_title || movie.original_name,
  movie.vote_average,
]);

const tv_popularity_data = data.value.tvShows.map((tv) => [
  tv.name || tv.original_name,
  tv.popularity / 100,
]);

const tv_vote_data = data.value.tvShows.map((tv) => [
  tv.name || tv.original_name,
  tv.vote_average,
]);

const movie_chart_options = ref({
  title: {
    text: null,
  },
  series: [
    {
      name: "Popularity",
      data: movie_popularity_data,
      type: "bar",
      dataLabels: {
        enabled: true,
        format: "{y:.2f}",
      },
    },
    {
      name: "Average Vote",
      data: movie_vote_data,
      type: "line",
    },
  ],
});

const tv_chart_options = ref({
  title: {
    text: null,
  },
  series: [
    {
      name: "Popularity",
      data: tv_popularity_data,
      type: "bar",
      dataLabels: {
        enabled: true,
        format: "{y:.2f}",
      },
    },
    {
      name: "Average Vote",
      data: tv_vote_data,
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
