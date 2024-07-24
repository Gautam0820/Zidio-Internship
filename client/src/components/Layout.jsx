import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; // Import the CSS file for styling

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Zidio-Resume</Link>
        </div>
        <div className="navbar-items">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/templates">Templates</Link>
          <Link to="/form">Form</Link>
        </div>
      </nav>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
