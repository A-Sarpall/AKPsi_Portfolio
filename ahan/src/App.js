import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import PersonalInterests from './components/PersonalInterests';
import SportsBar from './components/SportsBar';
import MediaSection from './components/MediaSection';
import profilePic from './assets/photo.png';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="left-column">
          <SportsBar />
          <Contact />
          <About />
          <TechStack />
        </div>
        <div className="center-column">
          <img src={profilePic} alt="Ahan Saripalli" className="profile-image" />
          <MediaSection />
        </div>
        <div className="right-column">
          <PersonalInterests />
        </div>
      </main>
    </div>
  );
}

export default App;
