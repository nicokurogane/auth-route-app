import {
  CHECK_LOGIN_CREDENTIALS,
  LOGIN_FAILURE,
  LOGIN_SUCCESFUL,
  LOGOUT_USER
} from './constants';
import { sendLoginCredentials } from '../../../data/network/reqres-request-handler';
import LocalStorage from '../../../data/local-storage-handler/LocalStorage';

export const checkLoginCredentials = (
  history,
  loginCredentials
) => async dispatch => {
  dispatch({ type: CHECK_LOGIN_CREDENTIALS });
  await sendLoginCredentials(loginCredentials)
    .then(response => {
      LocalStorage.saveAuthToken(response.data);
      dispatch({ type: LOGIN_SUCCESFUL, payload: loginCredentials });
      history.push('/');
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const logoutUser = history => async dispatch => {
  LocalStorage.cleanAuthToken();
  dispatch({ type: LOGOUT_USER });
  history.push('/login');
};
