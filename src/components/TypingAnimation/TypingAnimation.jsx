import { useState, useEffect, useRef } from 'react';

export default function TypingAnimation({
  text = "Computer Science · DCU",
  splitAt = 16,
  colorBefore = "var(--accent)",
  colorAfter = "var(--muted)",
  duration = 4,
  pauseBetween = 5,
  loop = true,
}) {
  const [revealedCount, setRevealedCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const timeoutIds = useRef([]);
  const loopCountRef = useRef(0);

  const beforePart = text.slice(0, splitAt);
  const afterPart = text.slice(splitAt);
  const fullText = beforePart + afterPart;

  const getTypingDelay = (char, index) => {
    const avgDelay = (duration * 1000) / fullText.length;
    if (index === 0) return avgDelay * 1.2;
    if (char === '.' || char === '!' || char === '?') return avgDelay * 2.5;
    if (char === ',' || char === ';' || char === '·') return avgDelay * 1.8;
    if (char === ' ') return avgDelay * 0.8;
    if ('etaoinshrdlu'.includes(char.toLowerCase())) return avgDelay * 0.85;
    return avgDelay * (0.7 + Math.random() * 0.6);
  };

  const clearAllTimeouts = () => {
    timeoutIds.current.forEach(clearTimeout);
    timeoutIds.current = [];
  };

  const startTyping = () => {
    clearAllTimeouts();
    setRevealedCount(0);
    setIsTyping(true);
    setIsPaused(false);

    let cumulativeTime = 0;
    for (let i = 0; i < fullText.length; i++) {
      const char = fullText[i];
      const delay = getTypingDelay(char, i);
      cumulativeTime += delay;
      const id = setTimeout(() => {
        setRevealedCount(i + 1);
        if (i + 1 === fullText.length) {
          setIsTyping(false);
          if (loop) {
            setIsPaused(true);
            const pauseId = setTimeout(() => {
              loopCountRef.current += 1;
              startTyping();
            }, pauseBetween * 1000);
            timeoutIds.current.push(pauseId);
          }
        }
      }, cumulativeTime);
      timeoutIds.current.push(id);
    }
  };

  useEffect(() => {
    return () => {
      clearAllTimeouts();
    };
  }, []);

  useEffect(() => {
    clearAllTimeouts();
    setRevealedCount(0);
    setIsTyping(false);
    setIsPaused(false);
    loopCountRef.current = 0;
  }, [text, splitAt]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTyping && !isPaused && revealedCount === 0) {
          startTyping();
        }
      },
      { threshold: 0.3 }
    );
    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [isTyping, isPaused, revealedCount]);

  useEffect(() => {
    if (!cursorRef.current || !textRef.current) return;
    const revealedSpan = textRef.current.querySelector('.revealed-part');
    if (revealedSpan) {
      cursorRef.current.style.left = `${revealedSpan.offsetWidth}px`;
    } else {
      cursorRef.current.style.left = '0px';
    }
  }, [revealedCount]);

  const revealedText = fullText.slice(0, revealedCount);
  const silhouetteText = fullText.slice(revealedCount);
  const revealedBefore = revealedText.slice(0, Math.min(revealedCount, beforePart.length));
  const revealedAfter = revealedText.slice(beforePart.length);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'inline-block',
        position: 'relative',
        fontFamily: 'inherit',
        lineHeight: 1.4,
        whiteSpace: 'pre-wrap',
      }}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <span ref={textRef}>
          <span className="revealed-part">
            {revealedBefore && (
              <span style={{ color: colorBefore, fontWeight: 'bold' }}>{revealedBefore}</span>
            )}
            {revealedAfter && (
              <span style={{ color: colorAfter, fontWeight: 'bold' }}>{revealedAfter}</span>
            )}
          </span>
          <span style={{ opacity: 0.3, color: 'var(--muted)' }}>{silhouetteText}</span>
        </span>

        {(isTyping || isPaused) && (
          <span
            ref={cursorRef}
            className="typing-cursor"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'inline-block',
              width: '0.1em',
              height: '1.2em',
              backgroundColor: 'currentColor',
              animation: 'cursorBlink 0.75s step-end infinite',
              transition: 'left 0.05s linear',
            }}
          />
        )}
      </div>

      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .typing-cursor {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}