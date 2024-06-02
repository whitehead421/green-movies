<template>
  <teleport to="body">
    <div
      class="absolute top-0 left-0 w-full h-full p-4 bg-black/70 z-10 flex flex-col items-center gap-4"
    >
      <Icon
        @click="$emit('close')"
        name="material-symbols:close-rounded"
        size="48"
        class="cursor-pointer text-white border rounded-full p-2 hover:bg-white hover:text-black transition-all"
      />
      <div class="relative w-[calc(100%-16rem)]">
        <input
          type="text"
          placeholder="search for movies and TV shows..."
          class="w-full p-4 outline-none rounded-md text-lg placeholder-gray-300 placeholder:font-thin"
          v-model="searchTerm"
          @input="getSearchResults"
        />
        <!-- Results div -->
        <div
          v-if="results || searchError"
          class="absolute flex flex-col top-[calc(100%+1rem)] bg-white max-h-[600px] min-h-12 p-4 w-full rounded-md"
        >
          <div v-if="results" class="flex flex-col gap-4 overflow-y-auto">
            <NuxtLink
              v-for="result in results"
              :key="result.id"
              :to="buildLink(result)"
              @click="$emit('close')"
            >
              <div class="w-full h-full flex gap-4 items-center">
                <img
                  :src="buildImg(result.poster_path)"
                  alt="poster"
                  class="w-16 h-24 object-cover rounded-md"
                />
                <div class="flex flex-col gap-1">
                  <h3 class="text-lg font-semibold">
                    {{
                      result.title ||
                      result.name ||
                      result.original_title ||
                      result.original_name
                    }}
                  </h3>
                  <p class="text-sm">{{ result.overview }}</p>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div v-else-if="searchError" class="text-red-500">
            Error fetching search results
          </div>
          <div v-else>No results found</div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineEmits(["close"]);

const searchTerm = ref("");
const queryTimeout = ref(undefined);
const results = ref(null);
const searchError = ref(false);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchTerm.value != "") {
      try {
        const { data } = await useFetch(
          `/api/search?searchTerm=${searchTerm.value}`
        );
        results.value = data.value;
      } catch {
        searchError.value = true;
      }
      return;
    }
    results.value = null;
  }, 500);
};

const buildLink = (result) => {
  if (result.media_type === "tv") {
    return `/series/${result.id}`;
  }
  if (result.media_type === "movie") {
    return `/movies/${result.id}`;
  }
};
</script>
