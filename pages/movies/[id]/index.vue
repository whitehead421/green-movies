<template>
  <div class="sm:grid sm:grid-cols-4 sm:gap-8 flex flex-col gap-4">
    <div>
      <NuxtImg
        placeholder
        :src="buildImg(data.poster_path)"
        alt="movie.title"
        class="w-full sm:h-full sm:object-cover rounded-lg h-80 object-contain"
      />
    </div>
    <div class="col-span-3 flex flex-col gap-4">
      <h1 class="text-3xl font-black relative w-min whitespace-nowrap">
        {{ data.title || data.original_title || data.original_name }}
        <span
          class="absolute top-[calc(100%-0.6rem)] left-0 w-[60%] h-2 -skew-x-12 -z-10 bg-green-700/20"
        ></span>
      </h1>
      <p>
        {{
          data.overview ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis asperiores deserunt quam rem tenetur. Tempore corporis totam adipisci aliquam odit ad velit! Fuga repellat dolore cum perferendis, modi voluptate quis."
        }}
      </p>
      <h2 class="text-xs text-gray-800 tracking-wider uppercase font-semibold">
        Cast
      </h2>
      <ul class="flex gap-4">
        <li
          v-for="cast in credits.cast.slice(0, 5)"
          :key="cast.id"
          class="flex flex-col items-center gap-2"
        >
          <NuxtImg
            placeholder
            :src="buildImg(cast.profile_path)"
            alt="cast.name"
            class="w-20 h-20 object-cover rounded-md"
          />
          <p class="text-xs text-wrap w-min text-center">{{ cast.name }}</p>
        </li>
      </ul>
      <h2
        v-if="
          credits.crew.filter((crew) => crew.job === 'Director')?.length > 0
        "
        class="text-xs text-gray-800 tracking-wider uppercase font-semibold"
      >
        Directors
      </h2>
      <ul class="flex gap-4">
        <li
          v-for="crew in credits.crew.filter((crew) => crew.job === 'Director')"
          :key="crew.id"
          class="flex flex-col items-center"
        >
          <NuxtImg
            placeholder
            v-if="crew.profile_path"
            :src="buildImg(crew.profile_path)"
            :alt="crew.name"
            class="w-20 h-20 object-cover rounded-md"
          />
          <p class="text-xs text-wrap w-min text-center">
            {{ crew.name }}
          </p>
          <p class="text-xs text-wrap w-min text-center text-gray-400">
            {{ crew.job }}
          </p>
        </li>
      </ul>

      <ul class="flex">
        <li
          v-for="genre in data.genres"
          :key="genre.id"
          class="px-3 py-2 border-2 border-green-50 bg-green-600 text-white font-light text-sm rounded-lg"
        >
          {{ genre.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data } = await useFetch(`/api/movie/${route.params.id}`);
const { data: credits } = await useFetch(
  `/api/movie/${route.params.id}/credits`
);

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Movie not found",
  });
}
</script>

<style scoped></style>
