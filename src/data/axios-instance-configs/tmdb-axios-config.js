import axios from "axios";
const tmdbAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_THE_MOVIE_DATABASE_BASE_URL
});

export default tmdbAxiosInstance;
