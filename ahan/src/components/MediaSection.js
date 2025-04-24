import React from 'react';
import Carousel from './Carousel';
import './MediaSection.css';

function MediaSection({ selectedInterest }) {
  const artists = [
    { name: 'The Weeknd', spotifyId: '1Xyo4u8uXC1ZmMpatF05PJ' },
    { name: 'Martin Garrix', spotifyId: '60d24wfXkVzDSfLS6hyCjZ' },
    { name: 'Calvin Harris', spotifyId: '7CajNmpbOovFoOoasH2HaY' },
    { name: 'Travis', spotifyId: '0Y5tJX1MQlPlqiwlOH1tJY' },
    { name: 'Tory Lanez', spotifyId: '2jku7tDXc6XoB6MO2hFuqg' },
    { name: 'Young Thug', spotifyId: '50co4Is1HCEo8bhOyUWKpn' },
    { name: 'Coldplay', spotifyId: '4gzpq5DPGxSnKTe4SA8HAU' },
    { name: 'Tame Impala', spotifyId: '5INjqkS1o8h1imAzPqGZBb' },
    { name: 'Pitbull', spotifyId: '0TnOYISbd1XYRBk9myaseg' }
  ];

  const sportsImages = [
    '/sports/Hurts Lombardi.jpg',
    '/sports/Foles Lombardi.jpg',
    '/sports/bg strip sack.jpg',
    '/sports/The Dagger.jpg',
    '/sports/the hurdle.jpg',
    '/sports/New Meadowlands.jpg',
    '/sports/maxey.jpg',
    '/sports/mccain.jpg',
    '/sports/bryce harper.jpg',
    '/sports/castellanos.jpg',
    '/sports/man city treble.jpg',
    '/sports/messi wc.jpg'
  ];

  const rollerCoasterGifs = [
    '/rollercoasters/velocicoaster.gif',
    '/rollercoasters/hulk coaster.gif',
    '/rollercoasters/roller-coaster.gif'
  ];

  const animeGifs = [
    '/anime/demon-slayer.gif',
    '/anime/levi.gif',
    '/anime/gojo.gif',
    '/anime/solo-leveling.gif',
    '/anime/spy-family.gif'
  ];

  const renderContent = () => {
    switch (selectedInterest) {
      case 'Music':
        return (
          <div className="music-grid">
            {artists.map((artist, index) => (
              <a
                key={index}
                href={`https://open.spotify.com/artist/${artist.spotifyId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="music-circle-link"
              >
                <div className="music-circle">
                  <img 
                    src={`/artists/${artist.name}.${artist.name === 'The Weeknd' ? 'png' : 'jpg'}`} 
                    alt={artist.name}
                    className="artist-image"
                  />
                </div>
              </a>
            ))}
          </div>
        );
      case 'Sports':
        return <Carousel items={sportsImages} type="image" />;
      case 'Roller Coasters':
        return <Carousel items={rollerCoasterGifs} type="gif" timing={8000} />;
      case 'Anime':
        return <Carousel items={animeGifs} type="gif" timing={5000} />;
      default:
        return <p className="default-message">Click on my interests to learn more</p>;
    }
  };

  return (
    <section className="media-section">
      <h2>{selectedInterest || 'Media'}</h2>
      {renderContent()}
    </section>
  );
}

export default MediaSection;