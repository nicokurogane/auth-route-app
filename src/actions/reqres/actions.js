import {
  CHECK_LOGIN_CREDENTIALS,
  LOGIN_FAILURE,
  LOGIN_SUCCESFUL
} from './constants';
import { sendLoginCredentials } from '../../data/network/reqres-request-handler';
//import LocalStorage from '../../data/local-storage-handler/LocalStorage';

export const checkLoginCredentials = loginCredentials => async dispatch => {
  dispatch({ type: CHECK_LOGIN_CREDENTIALS });
  await sendLoginCredentials(loginCredentials)
    .then(response => {
      console.log(response.data.token);
      //  LocalStorage.saveAuthToken(response.data)
      dispatch({ type: LOGIN_SUCCESFUL, payload: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};
