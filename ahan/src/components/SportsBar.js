import React, { useState, useEffect } from 'react';
import './SportsBar.css';

function SportsBar() {
  const [updates] = useState([
    'Eagles sign new defensive coordinator',
    'Sixers win against the Celtics 120-115',
    'Phillies spring training begins next week',
    'Flyers trade deadline moves incoming'
  ]);

  useEffect(() => {
    const container = document.querySelector('.sports-updates');
    if (container) {
      container.style.animationDuration = `${updates.length * 5}s`;
    }
  }, [updates]);

  return (
    <section className="sports-bar">
      <h2>Philly Sports Updates</h2>
      <div className="sports-container">
        <div className="sports-updates">
          {updates.map((update, index) => (
            <div key={index} className="update">
              {update}
            </div>
          ))}
          {/* Duplicate updates for seamless scrolling */}
          {updates.map((update, index) => (
            <div key={`duplicate-${index}`} className="update">
              {update}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SportsBar; 