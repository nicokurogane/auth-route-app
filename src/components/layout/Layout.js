import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="content">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
