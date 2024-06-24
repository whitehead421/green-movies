interface IResponse {
  results: any[];
}

export default defineEventHandler(async () => {
  const BASE_URL = 'http://localhost:8081';

  const movies_top_rated: IResponse = await $fetch(
    `${BASE_URL}/movie/top_rated`,
    {
      method: 'GET',
      accept: 'application/json',
      query: {
        api_key: process.env.TMDB_API_KEY,
      },
    }
  );

  const movies_upcoming: IResponse = await $fetch(
    `${BASE_URL}/movie/upcoming`,
    {
      method: 'GET',
      accept: 'application/json',
      query: {
        api_key: process.env.TMDB_API_KEY,
      },
    }
  );

  const tv_on_the_air: IResponse = await $fetch(`${BASE_URL}/tv/on_the_air`, {
    method: 'GET',
    accept: 'application/json',
    query: {
      api_key: process.env.TMDB_API_KEY,
    },
  });

  const tv_top_rated: IResponse = await $fetch(`${BASE_URL}/tv/top_rated`, {
    method: 'GET',
    accept: 'application/json',
    query: {
      api_key: process.env.TMDB_API_KEY,
    },
  });

  return {
    movies_top_rated: movies_top_rated.results,
    movies_upcoming: movies_upcoming.results,
    tv_on_the_air: tv_on_the_air.results,
    tv_top_rated: tv_top_rated.results,
  };
});
