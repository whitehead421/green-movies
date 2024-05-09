<template>
  <div>This is the page for movie with the name: {{ data.movie.title }}</div>
</template>

<script setup>
const route = useRoute();

const { data } = await useFetch(`/api/movie/${route.params.id}`);
console.log(data.value);
</script>

<style scoped></style>
