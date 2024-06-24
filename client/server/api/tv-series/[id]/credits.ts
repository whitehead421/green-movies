export default defineEventHandler(async (event) => {
  const series_id = getRouterParam(event, "id");

  const BASE_URL = "http://localhost:8081";

  const response = await $fetch(`${BASE_URL}/tv/${series_id}/credits`, {
    method: "GET",
    accept: "application/json",
    query: {
      api_key: process.env.TMDB_API_KEY,
    },
  });

  return response;
});
