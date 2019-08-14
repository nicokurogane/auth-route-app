import React from 'react';
import { reduxForm, Field } from 'redux-form';
import InputText from '../custom-inputs/InputText';

import userSvg from '../../assets/user.svg';
import lockerSvg from '../../assets/locked.svg';
import './login-form.scss';

const ConnectedLoginForm = props => {
  return (
    <form
      onSubmit={props.handleSubmit(props.onSubmitForm)}
      className="form-login"
    >
      <Field
        name="email"
        type="text"
        component={InputText}
        label="Username"
        image={userSvg}
      />
      <Field
        name="password"
        type="password"
        component={InputText}
        label="Password"
        image={lockerSvg}
      />
      <button type="submit" className="submit-button">
        Sign In
      </button>
    </form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required Field';
  }

  if (!values.password) {
    errors.password = 'Required Field';
  }

  return errors;
};

const LoginFrom = reduxForm({
  form: 'login',
  validate
})(ConnectedLoginForm);

export default LoginFrom;
