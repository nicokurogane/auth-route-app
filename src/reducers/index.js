import { combineReducers } from 'redux';
import moviesReducer from './MoviesReducer';

const infinityAppReducers = combineReducers({
  movies: moviesReducer
});

export default infinityAppReducers;
