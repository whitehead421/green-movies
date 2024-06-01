export default defineEventHandler(async (event) => {
  const series_id = getRouterParam(event, "id");

  const BASE_URL = process.env.TMDB_API_BASE_URL;

  const response = await $fetch(`${BASE_URL}/tv/${series_id}`, {
    method: "GET",
    accept: "application/json",
    query: {
      api_key: process.env.TMDB_API_KEY,
    },
  });

  return response;
});
