import React from 'react';
import duckGif from '../assets/dancing-duck-vibing-duck.gif';
import './PersonalInterests.css';

function PersonalInterests({ onInterestSelect }) {
  const interests = ['Music', 'Sports', 'Roller Coasters', 'Anime'];

  return (
    <section className="personal-interests">
      <h2>Personal Interests</h2>
      <div className="interests-list">
        {interests.map((interest, index) => (
          <React.Fragment key={index}>
            <h3 
              onClick={() => onInterestSelect(interest)}
              style={{ cursor: 'pointer' }}
            >
              {interest}
            </h3>
            {interest === 'Anime' && (
              <div className="interest-image">
                <img src={duckGif} alt="Dancing duck animation" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default PersonalInterests;