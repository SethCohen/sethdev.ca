import { useState, useEffect } from 'react';

/**
 * Typewriter effect cycling through an array of words.
 * @param words Array of words to type and delete in sequence.
 * @param typingSpeed Typing speed in ms per character.
 * @param deletingSpeed Deleting speed in ms per character.
 * @param delay Delay before deleting in ms.
 */
export function useTypewriter(
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500
) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => {
          if (isDeleting) {
            return currentWord.substring(0, prev.length - 1);
          } else {
            return currentWord.substring(0, prev.length + 1);
          }
        });
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return text;
}
