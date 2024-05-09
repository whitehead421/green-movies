interface Genre {
  id: number;
  name: string;
}

interface IResponse {
  genres: Genre[];
}

export default defineEventHandler(async () => {
  const BASE_URL = process.env.TMDB_API_BASE_URL;

  const response: IResponse = await $fetch(`${BASE_URL}/genre/movie/list`, {
    method: "GET",
    accept: "application/json",
    query: {
      api_key: process.env.TMDB_API_KEY,
    },
  });

  return {
    data: response.genres,
  };
});
