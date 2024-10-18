import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './letterAnimation.css';

interface LetterAnimationProps {
  text: string;
  smallScreenText: string; // Additional prop for small screen text
}

// Function to generate a random light gray tone
const getRandomLightGrayTone = () => {
  const randomShade = Math.floor(Math.random() * 100) + 156; // Random value between 156 and 255
  return `rgba(${randomShade}, ${randomShade}, ${randomShade}, 1)`; // Light shades of gray

};

const LetterAnimation: React.FC<LetterAnimationProps> = ({ text, smallScreenText }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState('10vw'); // Initial font size
  const [displayText, setDisplayText] = useState(text); // State to hold the displayed text

  useEffect(() => {
    const updateFontSize = () => {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Calculate font size based on viewport size
      const maxFontSize = Math.min(viewportWidth, viewportHeight / 5); // Adjusted ratio for better fit
      setFontSize(`${maxFontSize}px`);

      // Set text based on screen size
      if (viewportWidth < 600) {
        setDisplayText(smallScreenText);
      } else {
        setDisplayText(text);
      }
    };

    updateFontSize();

    // Add resize event listener
    window.addEventListener('resize', updateFontSize);
    
    return () => {
      window.removeEventListener('resize', updateFontSize);
    };
  }, [text, smallScreenText]);

  useEffect(() => {
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll('.letter');

      // Animate each letter to fade in and scale up
      gsap.fromTo(
        letters,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power1.out',
          color: () => getRandomLightGrayTone(), // Change color to a random light gray tone
        }
      );
    }
  }, [displayText]);

  const splitTextIntoLetters = (text: string) =>
    text.split(' ').map((word, index) => (
      <span key={index} className="word" style={{ fontSize }}>
        {Array.from(word).map((char, charIndex) => (
          <span key={charIndex} className="letter">
            {char}
          </span>
        ))}
      </span>
    ));

  return (
    <div ref={textRef} className="letter-animation">
      {splitTextIntoLetters(displayText)}
    </div>
  );
};

export default LetterAnimation;
