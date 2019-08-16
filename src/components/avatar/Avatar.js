import React from 'react';
import './avatar.scss';

class Avatar extends React.Component {
  state = {
    showCard: false
  };

  showCard = () => {
    this.setState({ showCard: !this.state.showCard });
  };

  render() {
    return (
      <div className="avatar-container">
        <button className="avatar-button" onClick={this.showCard}>
          <img
            className="avatar"
            src="https://img.pngio.com/parent-directory-avatar-2png-avatar-png-256_256.png"
            alt="avatar"
          ></img>
        </button>
        <div
          className="card"
          style={{ opacity: this.state.showCard ? '1' : '0' }}
        >
          <span className="email-user">{this.props.user.email}</span>
        </div>
      </div>
    );
  }
}

export default Avatar;
