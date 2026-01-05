import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <h1 className="name" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          AHAN SARIPALLI
        </h1>
        <nav className="nav">
          <button onClick={() => scrollToSection('about')} className="nav-link">ABOUT</button>
          <button onClick={() => scrollToSection('tech')} className="nav-link">TECH</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">PROJECTS</button>
          <button onClick={() => scrollToSection('interests')} className="nav-link">INTERESTS</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">CONTACT</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
