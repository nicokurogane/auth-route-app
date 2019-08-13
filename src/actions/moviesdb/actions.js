import { FETCH_ALL_MOVIES } from './constants';
import { getAllMovies } from '../../data/network/tmbd-request-handler';

export const fetchMovies = () => async dispatch => {
  await getAllMovies()
    .then(response => {
      dispatch({ type: FETCH_ALL_MOVIES, payload: response.data });
    })
    .catch(err => {
      console.log(err);
    });
};
