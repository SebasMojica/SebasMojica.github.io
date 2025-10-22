import React, { useState, useEffect } from "react";

const TypewriterText = ({ 
  text, 
  speed = 100, 
  className = "",
  onComplete = () => {},
  showCursor = true 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <div className={`typewriter-text ${className}`}>
      <span>{displayText}</span>
      {showCursor && <span className="cursor">|</span>}
    </div>
  );
};

export default TypewriterText;
