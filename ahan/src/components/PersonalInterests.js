import React from 'react';
import duckGif from '../assets/dancing-duck-vibing-duck.gif';
import './PersonalInterests.css';

function PersonalInterests() {
  const interests = ['Music', 'Sports', 'Roller Coasters', 'Anime'];

  return (
    <section className="personal-interests">
      <h2>Personal Interests</h2>
      <div className="interest-image">
        <img src={duckGif} alt="Dancing duck animation" />
      </div>
      <div className="interests-list">
        {interests.map((interest, index) => (
          <h3 key={index}>{interest}</h3>
        ))}
      </div>
    </section>
  );
}

export default PersonalInterests;