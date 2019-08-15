import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/reqres/register/actions';
import RegisterForm from '../../register-form/RegisterFrom';

import spinnerGif from '../../../assets/spinner.gif';
import './register.scss';

class ConnectedRegister extends React.Component {
  handleSubmit = values => {
    console.log(values);
    const { email, password } = values;
    this.props.registerUser(this.props.history, { email, password });
  };

  render() {
    return (
      <div className="register-container">
        <span className="big-circle top-circle"></span>
        <span className="big-circle bottom-circle"></span>

        <h1>Register page</h1>
        <RegisterForm onSubmitForm={this.handleSubmit} />
        {this.props.isRegisteringUser ? (
          <img src={spinnerGif} alt="loading" />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.register.user,
    isRegisteringUser: state.register.isRegisteringUser
  };
};

const Register = connect(
  mapStateToProps,
  { registerUser }
)(ConnectedRegister);

export default Register;
