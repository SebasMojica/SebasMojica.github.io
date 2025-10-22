import { createElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './TextType.css';

const noop = () => {};

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 55,
  deletingSpeed = 30,
  initialDelay = 0,
  pauseDuration = 1800,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete = noop,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  const texts = useMemo(() => {
    const arr = Array.isArray(text) ? text : [text];
    return arr.filter(Boolean);
  }, [text]);

  const currentText = texts[currentIndex] ?? '';
  const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

  const getCurrentColor = useCallback(() => {
    if (!textColors.length) {
      return undefined;
    }
    return textColors[currentIndex % textColors.length];
  }, [currentIndex, textColors]);

  const getTypingDelay = useCallback(() => {
    if (!variableSpeed) {
      return typingSpeed;
    }
    const { min = typingSpeed, max = typingSpeed } = variableSpeed;
    return Math.max(10, Math.random() * (max - min) + min);
  }, [typingSpeed, variableSpeed]);

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!showCursor || !cursorRef.current) {
      return undefined;
    }
    gsap.set(cursorRef.current, { opacity: 1 });
    const tween = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });
    return () => {
      tween.kill();
    };
  }, [cursorBlinkDuration, showCursor]);

  const schedule = useCallback(
    (delay, fn) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(fn, delay);
    },
    []
  );

  useEffect(() => {
    if (!isVisible || !texts.length) {
      return undefined;
    }

    if (isDeleting) {
      if (charIndex === 0) {
        setIsDeleting(false);
        onSentenceComplete(currentText, currentIndex);
        if (!loop && currentIndex === texts.length - 1) {
          return undefined;
        }
        const nextIndex = (currentIndex + 1) % texts.length;
        schedule(pauseDuration, () => {
          setCurrentIndex(nextIndex);
        });
        return undefined;
      }
      schedule(deletingSpeed, () => {
        setDisplayedText(prev => prev.slice(0, -1));
        setCharIndex(prev => Math.max(0, prev - 1));
      });
      return () => clearTimeout(timeoutRef.current ?? undefined);
    }

    if (charIndex === 0 && displayedText === '') {
      schedule(initialDelay, () => {
        setDisplayedText(processedText.slice(0, 1));
        setCharIndex(1);
      });
      return () => clearTimeout(timeoutRef.current ?? undefined);
    }

    if (charIndex < processedText.length) {
      schedule(getTypingDelay(), () => {
        setDisplayedText(prev => prev + processedText[charIndex]);
        setCharIndex(prev => prev + 1);
      });
      return () => clearTimeout(timeoutRef.current ?? undefined);
    }

    if (texts.length > 1) {
      schedule(pauseDuration, () => {
        setIsDeleting(true);
      });
    }

    return () => clearTimeout(timeoutRef.current ?? undefined);
  }, [
    charIndex,
    currentIndex,
    currentText,
    displayedText,
    getTypingDelay,
    isDeleting,
    isVisible,
    loop,
    onSentenceComplete,
    pauseDuration,
    processedText,
    schedule,
    initialDelay,
    deletingSpeed,
    texts,
    reverseMode
  ]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const hideCursor =
    hideCursorWhileTyping && (!isDeleting && charIndex < processedText.length && processedText.length > 0);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `text-type ${className}`.trim(),
      ...props
    },
    <span className="text-type__content" style={{ color: getCurrentColor() }}>
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`text-type__cursor ${cursorClassName} ${hideCursor ? 'text-type__cursor--hidden' : ''}`.trim()}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
