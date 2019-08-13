import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

import cityImg from '../../../assets/future-city.jpg';

class Login extends React.Component {
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
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Username"></input>
            <button>Sign In</button>
            <div>
              <span>Don't you have an account?</span>
              <Link to="/" className="">
                Sign Up Now
              </Link>
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

export default Login;
