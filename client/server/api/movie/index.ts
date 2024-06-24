interface IResponse {
  results: any[];
}

export default defineEventHandler(async () => {
  const BASE_URL = 'http://localhost:8081';

  const response: IResponse = await $fetch(`${BASE_URL}/movie/now_playing`, {
    method: 'GET',
    accept: 'application/json',
    query: {
      api_key: process.env.TMDB_API_KEY,
    },
  });

  return {
    movies: response.results,
  };
});
