import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import moviesReducers from './MoviesReducers';
import loginReducers from './LoginReducers';
import registerReducers from './RegisterReducers';

const infinityAppReducers = combineReducers({
  movies: moviesReducers,
  login: loginReducers,
  register: registerReducers,
  form: formReducer
});

export default infinityAppReducers;
