import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../../register-form/RegisterFrom';
import './register.scss';

class ConnectedRegister extends React.Component {
  handleSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="register-container">
        <span className="big-circle top-circle"></span>
        <span className="big-circle bottom-circle"></span>

        <h1>Register page</h1>
        <RegisterForm onSubmitForm={this.handleSubmit} />
      </div>
    );
  }
}

const Register = connect(
  null,
  null
)(ConnectedRegister);

export default Register;
