import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import moviesReducers from './MoviesReducers';
import loginReducers from './LoginReducers';

const infinityAppReducers = combineReducers({
  movies: moviesReducers,
  login: loginReducers,
  form: formReducer
});

export default infinityAppReducers;
