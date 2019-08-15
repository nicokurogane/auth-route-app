import React from 'react';
import { connect } from 'react-redux';
import { checkLoginCredentials } from '../../../actions/reqres/login/actions';
import { Link } from 'react-router-dom';
import LoginFrom from '../../login-form/LoginForm';

import './login.scss';
import cityImg from '../../../assets/future-city.jpg';
import loadingGif from '../../../assets/spinner.gif';

class ConnectedLogin extends React.Component {
  handleSubmit = values => {
    console.log(values);
    this.props.checkLoginCredentials(this.props.history, values);
  };

  render() {
    return (
      <div className="login-container">
        <span className="big-circle top-circle"></span>
        <span className="big-circle bottom-circle"></span>

        <div className="form-login-container">
          <div className="form-container panel">
            <span>welcome to infinity</span>
            <span>
              Log in to get in the moment updates on the things that interest
              you
            </span>
            <LoginFrom onSubmitForm={this.handleSubmit} />
            <div>
              <span>Don't you have an account?</span>
              <Link to="/register-user">Sign Up Now</Link>
            </div>

            <div>
              <img
                src={loadingGif}
                style={{
                  height: '2rem',
                  margin: '4vh',
                  display: this.props.isCheckingUser ? 'block' : 'none'
                }}
                alt="test"
              ></img>
            </div>
          </div>
          <div className="side-img-container panel">
            <img
              src={cityImg}
              className="city-background right-border"
              alt="city"
            />
            <div className="about-panel right-border stacking-container" />
            <div className="about-panel-content stacking-container">
              infinity
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedUser: state.login.user,
    isCheckingUser: state.login.isCheckingUser
  };
};

const Login = connect(
  mapStateToProps,
  { checkLoginCredentials }
)(ConnectedLogin);

export default Login;
