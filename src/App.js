import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import PersonalInterests from './components/PersonalInterests';
import SportsBar from './components/SportsBar';
import MediaSection from './components/MediaSection';
import Projects from './components/Projects';
import profilePic from './assets/photo.png';

function App() {
  const [selectedInterest, setSelectedInterest] = useState(null);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <div className="left-column">
                <SportsBar />
                <Contact />
                <About />
              </div>
              <div className="center-column">
                <img src={profilePic} alt="Ahan Saripalli" className="profile-image" />
                <MediaSection selectedInterest={selectedInterest} />
              </div>
              <div className="right-column">
                <PersonalInterests onInterestSelect={setSelectedInterest} />
                <TechStack />
              </div>
            </main>
          } />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 