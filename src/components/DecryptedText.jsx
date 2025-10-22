import React, { useEffect, useMemo, useRef, useState } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

const sanitizeForPlaceholder = value => value.replace(/[^\s]/g, ' ');

const DecryptedText = ({
  text = '',
  speed = 50,
  animateOn = 'load',
  delay = 0,
  className = '',
  ...props
}) => {
  const characters = useMemo(() => text.split(''), [text]);
  const [hasStarted, setHasStarted] = useState(animateOn !== 'view');
  const [output, setOutput] = useState(() => sanitizeForPlaceholder(text));
  const [isScrambling, setIsScrambling] = useState(false);
  const nodeRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setOutput(sanitizeForPlaceholder(text));
    setIsScrambling(false);
    if (animateOn !== 'view') {
      setHasStarted(true);
    }
  }, [text, animateOn]);

  useEffect(() => {
    if (animateOn !== 'view') {
      return;
    }

    const node = nodeRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [animateOn]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    if (characters.length === 0) {
      setOutput('');
      setIsScrambling(false);
      return;
    }

    if (typeof window === 'undefined') {
      setOutput(text);
      setIsScrambling(false);
      return;
    }

    const startAnimation = () => {
      let revealIndex = -1;
      setIsScrambling(true);

      intervalRef.current = window.setInterval(() => {
        revealIndex += 1;

        if (revealIndex >= characters.length) {
          setOutput(text);
          setIsScrambling(false);
          if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return;
        }

        const nextValue = characters
          .map((char, idx) => {
            if (char === ' ') {
              return ' ';
            }

            if (idx <= revealIndex) {
              return char;
            }

            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('');

        setOutput(nextValue);
      }, Math.max(speed, 16));
    };

    timeoutRef.current = window.setTimeout(startAnimation, Math.max(delay, 0));

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsScrambling(false);
    };
  }, [hasStarted, characters, text, speed, delay]);

  const classes = [
    'decrypted-text',
    isScrambling ? 'decrypted-text--scrambling' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span ref={nodeRef} className={classes} {...props}>
      {output}
    </span>
  );
};

export default DecryptedText;
