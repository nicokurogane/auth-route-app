import axios from 'axios';
const reqresAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_REQRES_IN_BASE_URL
});

export default reqresAxiosInstance;
