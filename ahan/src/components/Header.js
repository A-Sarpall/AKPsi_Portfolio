import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  return (
    <header className="header">
      <h1 className="name">AHAN SARIPALLI</h1>
      <nav>
        <Link to={isProjectsPage ? "/" : "/projects"} className="nav-link">
          {isProjectsPage ? "HOME" : "PROJECTS"}
        </Link>
      </nav>
    </header>
  );
}

export default Header; 