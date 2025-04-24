import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="social-links">
        <a href="mailto:ahan.saripalli@utdallas.edu" aria-label="Email" title="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/ahansaripalli/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/A-Sarpall" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
          <FaGithub />
        </a>
        <a href="/Ahan_Saripalli_Resume.pdf" download aria-label="Download Resume" title="Download Resume">
          <FaFileDownload />
        </a>
      </div>
    </section>
  );
}

export default Contact; 