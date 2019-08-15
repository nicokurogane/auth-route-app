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
        <span>app header</span>
        <div className="links-container">
          <button onClick={this.onLogoutClick}>Log out</button>
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
