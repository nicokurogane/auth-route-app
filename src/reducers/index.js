import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import moviesReducer from './MoviesReducer';

const infinityAppReducers = combineReducers({
  movies: moviesReducer,
  form: formReducer
});

export default infinityAppReducers;
