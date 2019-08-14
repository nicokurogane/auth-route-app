import {
  CHECK_LOGIN_CREDENTIALS,
  LOGIN_FAILURE,
  LOGIN_SUCCESFUL,
  LOGOUT_USER
} from '../actions/reqres/login/constants';
import LocalStorage from '../data/local-storage-handler/LocalStorage';

const initialState = { isCheckingUser: false };

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN_CREDENTIALS:
      return { ...state, isCheckingUser: true };
    case LOGIN_FAILURE:
      return { ...state, isCheckingUser: false };
    case LOGIN_SUCCESFUL:
      LocalStorage.saveAuthToken(action.payload);
      return { ...state, isCheckingUser: false };
    case LOGOUT_USER:
      LocalStorage.cleanAuthToken();
      return { ...state, isCheckingUser: false };
    default:
      return state;
  }
};
export default loginReducers;
