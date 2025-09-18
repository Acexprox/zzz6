import React, { useState, useEffect } from 'react';

const TypewriterText = ({ 
  lines = [], 
  speed = 80, 
  delay = 800, 
  showCursor = true,
  lineDelay = 300
}) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!lines || lines.length === 0) return;

    // إعادة تعيين الحالة
    setDisplayedLines(lines.map(() => ''));
    setCurrentLineIndex(-1);
    setCurrentCharIndex(0);
    setIsCompleted(false);

    const startTyping = setTimeout(() => {
      setCurrentLineIndex(0);
      
      let lineIndex = 0;
      let charIndex = 0;

      const typeCharacter = () => {
        if (lineIndex < lines.length) {
          const currentLine = lines[lineIndex];
          
          if (charIndex < currentLine.length) {
            // إضافة الحرف التالي
            setDisplayedLines(prev => {
              const newLines = [...prev];
              newLines[lineIndex] = currentLine.substring(0, charIndex + 1);
              return newLines;
            });
            charIndex++;
            setTimeout(typeCharacter, speed);
          } else {
            // انتهى السطر، انتقل للتالي
            lineIndex++;
            charIndex = 0;
            setCurrentLineIndex(lineIndex);
            
            if (lineIndex < lines.length) {
              setTimeout(typeCharacter, lineDelay);
            } else {
              setIsCompleted(true);
            }
          }
        }
      };

      typeCharacter();
    }, delay);

    return () => clearTimeout(startTyping);
  }, [lines, speed, delay, lineDelay]);

  return (
    <div style={{ direction: 'rtl', textAlign: 'center', width: '100%' }}>
      {lines.map((_, lineIndex) => (
        <div key={lineIndex} style={{ minHeight: '1.2em' }}>
          {displayedLines[lineIndex]}
          {lineIndex === currentLineIndex && !isCompleted && showCursor && (
            <span 
              style={{
                display: 'inline-block',
                width: '2px',
                height: '0.9em',
                backgroundColor: '#D97706',
                marginLeft: '2px',
                animation: 'blink 1s infinite'
              }}
            />
          )}
        </div>
      ))}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `
      }} />
    </div>
  );
};

export default TypewriterText;