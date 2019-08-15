import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './layout.scss';

const Layout = ({ history, children }) => {
  return (
    <div className="layout-container">
      <Header history={history} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
