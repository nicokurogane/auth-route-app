import tmdbAxiosInstance from './axios-instance-configs/tmdb-axios-config';

export const getAllMovies = async () => {
  let serverResponse = await tmdbAxiosInstance.get(
    `/movie/popular?api_key=${process.env.REACT_APP_THE_MOVIE_DATABASE_API_KEY}`
  );
  return serverResponse;
};
