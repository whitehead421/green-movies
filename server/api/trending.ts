interface IResponse {
  results: any[];
}

export default defineEventHandler(async (event) => {
  const BASE_URL = process.env.TMDB_API_BASE_URL;

  const response: IResponse = await $fetch(`${BASE_URL}/trending/all/day`, {
    method: "GET",
    accept: "application/json",
    query: {
      api_key: process.env.TMDB_API_KEY,
    },
  });

  return {
    data: response.results,
  };
});
