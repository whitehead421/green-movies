<template>
  <div>
    This is the page for movie reviews with the name: {{ route.params.id }}
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped></style>
