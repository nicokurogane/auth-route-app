import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import moviesReducer from './MoviesReducer';
import loginReducers from './LoginReducers';

const infinityAppReducers = combineReducers({
  movies: moviesReducer,
  login: loginReducers,
  form: formReducer
});

export default infinityAppReducers;
