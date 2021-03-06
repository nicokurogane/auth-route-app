import { FETCH_ALL_MOVIES } from '../actions/moviesdb/constants';

const initialState = { list: [] };

const moviesReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIES:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
export default moviesReducers;
