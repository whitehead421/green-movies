interface IResponse {
  results: any[];
}

export default defineEventHandler(async () => {
  const BASE_URL = 'http://localhost:8081';

  const movies: IResponse = await $fetch(`${BASE_URL}/trending/movie/day`, {
    method: 'GET',
    accept: 'application/json',
    query: {
      api_key: process.env.TMDB_API_KEY,
    },
  });

  const tvShows: IResponse = await $fetch(`${BASE_URL}/trending/tv/day`, {
    method: 'GET',
    accept: 'application/json',
    query: {
      api_key: process.env.TMDB_API_KEY,
    },
  });

  return {
    movies: movies.results,
    tvShows: tvShows.results,
  };
});
