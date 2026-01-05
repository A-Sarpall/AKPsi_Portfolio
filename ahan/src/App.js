import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import PersonalInterests from './components/PersonalInterests';
import MediaSection from './components/MediaSection';
import Projects from './components/Projects';

function App() {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 15,
      animationDuration: 10 + Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-container">
            <div className="profile-glow"></div>
            <img src="/photo.png" alt="Ahan Saripalli" className="profile-image" />
          </div>
          <h1 className="hero-title">
            <span className="gradient-text">AHAN SARIPALLI</span>
          </h1>
          <p className="hero-subtitle">CS Major • Builder</p>
        </div>
        <div className="animated-bg">
          <div className="grid-overlay"></div>
          <div className="particles">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="particle"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.animationDelay}s`,
                  animationDuration: `${particle.animationDuration}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <section id="about" className="section">
        <About />
      </section>

      <section id="tech" className="section">
        <TechStack />
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-text">PROJECTS</span>
          </h2>
        </div>
        <Projects />
      </section>

      <section id="interests" className="section interests-section">
        <div className="interests-container">
          <div className="interests-sidebar">
            <PersonalInterests onInterestSelect={setSelectedInterest} />
          </div>
          <div className="media-display">
            <MediaSection selectedInterest={selectedInterest} />
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
