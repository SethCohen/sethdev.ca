import { useState, useEffect } from 'react';

/**
 * Typewriter effect for a single string (no deletion, types in once).
 * @param text The string to type out.
 * @param typingSpeed Typing speed in ms per character.
 */
export function useTypewriterOnce(text: string, typingSpeed = 80) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [displayed, text, typingSpeed]);
  return displayed;
}
