import {
  REGISTERING_USER,
  REGISTER_SUCCESSFUL,
  REGISTER_FAILED
} from './constants';

import { postRegisterUser } from '../../../data/network/reqres-request-handler';

export const registerUser = userData => async dispatch => {
  dispatch({ type: REGISTERING_USER });
  await postRegisterUser(userData)
    .then(response => {
      dispatch({ type: REGISTER_SUCCESSFUL });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAILED });
    });
};
