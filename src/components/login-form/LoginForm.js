import React from 'react';
import { reduxForm, Field } from 'redux-form';

const ConnectedLoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmitForm)}>
      <div>
        <label htmlFor="UserName">UserName</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const LoginFrom = reduxForm({
  form: 'login'
})(ConnectedLoginForm);

export default LoginFrom;
