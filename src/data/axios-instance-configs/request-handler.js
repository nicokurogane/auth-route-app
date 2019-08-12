import tmdbAxiosInstance from "./tmdb-axios-config";
//import reqresAxiosInstance from "./reqres-axios-config";

export const getAllMovies = async () => {
  let serverResponse = await tmdbAxiosInstance.get(
    `/movie/latest?api_key=${process.env.REACT_APP_THE_MOVIE_DATABASE_API_KEY}`
  );
  return serverResponse;
};
