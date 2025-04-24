import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-link">HOME</Link>
        <Link to="/projects" className="header-link">PROJECTS</Link>
      </div>
    </header>
  );
}

export default Header; 