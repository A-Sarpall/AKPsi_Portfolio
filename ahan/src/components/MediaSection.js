import React from 'react';
import './MediaSection.css';

function MediaSection() {
  return (
    <section className="media-section">
      <button className="media-button">
        Show Profiles of Fav Artists
      </button>
      
      <button className="media-button">
        Sports Images
      </button>
      
      <button className="media-button">
        Roller Coaster GIF
      </button>
      
      <button className="media-button">
        Anime GIF
      </button>
    </section>
  );
}

export default MediaSection; 