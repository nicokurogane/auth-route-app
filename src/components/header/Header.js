import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <header className="app-header">
      <span>app header</span>
      <div className="links-container">
        <Link to="/login">Log out</Link>
      </div>
    </header>
  );
};

export default Header;
