import {
  CHECK_LOGIN_CREDENTIALS,
  LOGIN_FAILURE,
  LOGIN_SUCCESFUL
} from './constants';
import { sendLoginCredentials } from '../../data/reqres-request-handler';

export const checkLoginCredentials = loginCredentials => async dispatch => {
  dispatch({ type: CHECK_LOGIN_CREDENTIALS });
  await sendLoginCredentials(loginCredentials)
    .then(response => {
      console.log(response);
      dispatch({ type: LOGIN_SUCCESFUL, payload: response });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};
