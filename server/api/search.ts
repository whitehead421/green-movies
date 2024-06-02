interface IResponse {
  results: any[];
}

export default defineEventHandler(async (event) => {
  const BASE_URL = process.env.TMDB_API_BASE_URL;

  const { searchTerm } = getQuery(event);

  const response: IResponse = await $fetch(`${BASE_URL}/search/multi`, {
    method: "GET",
    accept: "application/json",
    query: {
      query: searchTerm,
      include_adult: true,
      api_key: process.env.TMDB_API_KEY,
    },
  });

  return response.results.filter((result) => result.poster_path);
});
