interface IResponse {
  results: any[];
}

export default defineEventHandler(async (event) => {
  const movie_id = getRouterParam(event, "id");

  const BASE_URL = process.env.TMDB_API_BASE_URL;

  const response: IResponse = await $fetch(
    `${BASE_URL}/movie/${movie_id}/lists`,
    {
      method: "GET",
      accept: "application/json",
      query: {
        api_key: process.env.TMDB_API_KEY,
      },
    }
  );

  return response.results;
});
