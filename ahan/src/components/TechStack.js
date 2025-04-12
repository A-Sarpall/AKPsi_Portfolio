import React from 'react';
import { FaReact, FaPython, FaHtml5, FaJsSquare, FaJava } from 'react-icons/fa';
import { SiCss3, SiSpring } from 'react-icons/si';
import './TechStack.css';

function TechStack() {
  return (
    <section className="tech-stack">
      <h2>Tech Stack</h2>
      <div className="tech-icons">
        <div className="tech-icon">
          <FaReact title="React" />
        </div>
        <div className="tech-icon">
          <FaPython title="Python" />
        </div>
        <div className="tech-icon">
          <FaHtml5 title="HTML5" />
        </div>
        <div className="tech-icon">
          <FaJsSquare title="JavaScript" />
        </div>
        <div className="tech-icon">
          <SiCss3 title="CSS3" />
        </div>
        <div className="tech-icon">
          <FaJava title="Java" />
        </div>
        <div className="tech-icon">
          <SiSpring title="Spring" />
        </div>
      </div>
    </section>
  );
}

export default TechStack; 