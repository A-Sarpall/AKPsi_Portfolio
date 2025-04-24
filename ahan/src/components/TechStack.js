import React from 'react';
import { FaReact, FaPython, FaHtml5, FaJsSquare, FaJava } from 'react-icons/fa';
import { SiCss3, SiFirebase, SiNextdotjs, SiGooglemaps } from 'react-icons/si';
import './TechStack.css';

function TechStack() {
  return (
    <section className="tech-stack">
      <h2>Tech Stack</h2>
      <div className="tech-icons">
        <div className="tech-icon" title="HTML5">
          <FaHtml5 />
        </div>
        <div className="tech-icon" title="CSS3">
          <SiCss3 />
        </div>
        <div className="tech-icon" title="JavaScript">
          <FaJsSquare />
        </div>
        <div className="tech-icon" title="React">
          <FaReact />
        </div>
        <div className="tech-icon" title="Next.js">
          <SiNextdotjs />
        </div>
        <div className="tech-icon" title="Python">
          <FaPython />
        </div>
        <div className="tech-icon" title="Java">
          <FaJava />
        </div>
        <div className="tech-icon" title="Firebase">
          <SiFirebase />
        </div>
        <div className="tech-icon" title="Google Maps">
          <SiGooglemaps />
        </div>
      </div>
    </section>
  );
}

export default TechStack; 