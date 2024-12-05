import React, { useState, useEffect } from 'react';
import "./AnimatedText.css";
const AnimatedText = ({ text, tag,clsNme, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const Tag = tag;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index = index + 1;
      if (index === text.length-1) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 100);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures it runs only once on mount.

  return <Tag className={clsNme}>{displayedText}</Tag>;
};

export default AnimatedText;
