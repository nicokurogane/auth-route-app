import {
  CHECK_LOGIN_CREDENTIALS,
  LOGIN_FAILURE,
  LOGIN_SUCCESFUL,
  LOGOUT_USER
} from '../actions/reqres/login/constants';

const initialState = { user: null, isCheckingUser: false };

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN_CREDENTIALS:
      return { ...state, isCheckingUser: true };
    case LOGIN_FAILURE:
      return { ...state, isCheckingUser: false };
    case LOGIN_SUCCESFUL:
      return { ...state, user: action.payload, isCheckingUser: false };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};
export default loginReducers;
