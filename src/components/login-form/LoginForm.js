import React from 'react';
import { reduxForm, Field } from 'redux-form';

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
        name="username"
        type="text"
        component={renderField}
        label="Username"
        image={userSvg}
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
        image={lockerSvg}
      />
      <button type="submit" className="submit-button">
        Sign In
      </button>
    </form>
  );
};

const renderField = ({
  input,
  label,
  type,
  image,
  meta: { touched, error }
}) => (
  <div className="control-field-container">
    <div className="field-container">
      <img src={image} alt="input field" className="image" />
      <input {...input} placeholder={label} type={type} className="input" />
    </div>
    {touched && error && <span className="error">{error}</span>}
  </div>
);

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required Field';
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
