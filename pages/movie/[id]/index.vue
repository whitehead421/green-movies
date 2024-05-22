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
    <div class="col-span-3 flex flex-col gap-2">
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
      <ul class="list-none flex gap-2 mt-2">
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
console.log(data.value);
</script>

<style scoped></style>
