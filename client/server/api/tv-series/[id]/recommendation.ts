interface IResponse {
  results: any[];
}

export default defineEventHandler(async (event) => {
  const series_id = getRouterParam(event, "id");

  const BASE_URL = "http://localhost:8081";

  const response: IResponse = await $fetch(
    `${BASE_URL}/tv/${series_id}/recommendations`,
    {
      method: "GET",
      accept: "application/json",
      query: {
        api_key: process.env.TMDB_API_KEY,
      },
    }
  );

  return response.results.filter((movie) => movie.poster_path !== null);
});
