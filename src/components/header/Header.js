import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/reqres/login/actions';

import './header.scss';

class ConnectedHeader extends React.Component {
  onLogoutClick = () => {
    this.props.logoutUser(this.props.history);
  };

  render() {
    return (
      <header className="app-header">
        <span className="title">INIFINITY MOVIES</span>
        <div className="links-container">
          <button className="button" onClick={this.onLogoutClick}>
            Log out
          </button>
        </div>
      </header>
    );
  }
}

const Header = connect(
  null,
  { logoutUser }
)(ConnectedHeader);

export default Header;
