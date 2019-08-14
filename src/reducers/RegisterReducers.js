import {
  REGISTERING_USER,
  REGISTER_SUCCESSFUL,
  REGISTER_FAILED
} from '../actions/reqres/register/constants';

const initialState = { user: null, isRegisteringUser: false };
const registerReducers = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERING_USER:
      return { ...state, isRegisteringUser: true };
    case REGISTER_FAILED:
      return { ...state, isRegisteringUser: false };
    case REGISTER_SUCCESSFUL:
      return { ...state, user: action.payload, isRegisteringUser: false };
    default:
      return state;
  }
};
export default registerReducers;
