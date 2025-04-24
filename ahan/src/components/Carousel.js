import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Carousel.css';

function Carousel({ items, type, timing = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, timing);
  }, [items.length, timing]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    startTimer();
  }, [startTimer, items.length]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    resetTimer();
  }, [resetTimer]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    resetTimer();
  }, [resetTimer, items.length]);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>&lt;</button>
      <div className="carousel-content">
        {type === 'image' ? (
          <img 
            src={items[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-item"
          />
        ) : (
          <img 
            src={items[currentIndex]} 
            alt={`GIF ${currentIndex + 1}`}
            className="carousel-item gif"
          />
        )}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>&gt;</button>
    </div>
  );
}

export default Carousel; 