import React, { useState, useEffect } from 'react';
import './SportsBar.css';
import { fetchSportsUpdates } from '../utils/sportsScraper';

function SportsBar() {
  const [updates, setUpdates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching sports updates...');
        const sportsUpdates = await fetchSportsUpdates();
        console.log('Fetched updates:', sportsUpdates);
        
        if (sportsUpdates.length === 0) {
          console.log('No updates found, using fallback data');
          setUpdates([
            'Eagles sign new defensive coordinator',
            'Sixers win against the Celtics 120-115',
            'Phillies spring training begins next week',
            'Flyers trade deadline moves incoming'
          ]);
        } else {
          setUpdates(sportsUpdates);
        }
      } catch (error) {
        console.error('Error fetching sports updates:', error);
        setError(error.message);
        // Fallback to default updates if scraping fails
        setUpdates([
          'Eagles sign new defensive coordinator',
          'Sixers win against the Celtics 120-115',
          'Phillies spring training begins next week',
          'Flyers trade deadline moves incoming'
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUpdates();
    // Refresh updates every hour
    const interval = setInterval(fetchUpdates, 3600000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = document.querySelector('.sports-updates');
    if (container) {
      container.style.animationDuration = `${updates.length * 5}s`;
    }
  }, [updates]);

  if (isLoading) {
    return (
      <section className="sports-bar">
        <h2>Philly Sports Updates</h2>
        <div className="sports-container">
          <div className="loading">Loading sports updates...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="sports-bar">
        <h2>Philly Sports Updates</h2>
        <div className="sports-container">
          <div className="error">Error loading updates: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="sports-bar">
      <h2>Philly Sports Updates</h2>
      <div className="sports-container">
        <div className="sports-updates">
          {updates.map((update, index) => (
            <div key={index} className="update">
              {update.split('**').map((part, i) => 
                i % 2 === 0 ? part : <strong key={i}>{part}</strong>
              )}
            </div>
          ))}
          {/* Duplicate updates for seamless scrolling */}
          {updates.map((update, index) => (
            <div key={`duplicate-${index}`} className="update">
              {update.split('**').map((part, i) => 
                i % 2 === 0 ? part : <strong key={i}>{part}</strong>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SportsBar; 