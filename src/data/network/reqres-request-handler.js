import reqresAxiosInstance from './axios-instance-configs/reqres-axios-config';

export const sendLoginCredentials = async loginCredentials => {
  let serverResponse = await reqresAxiosInstance.post(
    '/login',
    loginCredentials
  );
  return serverResponse;
};

export const postRegisterUser = async userData => {
  let serverResponse = await reqresAxiosInstance.post('/register', userData);
  return serverResponse;
};
