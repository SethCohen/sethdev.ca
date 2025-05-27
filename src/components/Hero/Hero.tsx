import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Mail } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useTypewriterOnce } from '@/hooks/useTypewriterOnce';

/**
 * Hero section with animated heading and typewriter subtitle.
 */
const Hero: React.FC = () => {
  const roles = [
    'HCI Researcher',
    'Linguist',
    'Creative Developer',
    'Artist',
    'Minimalist',
    'Hobbyist',
    'Learning Enthusiast',
  ];
  const typedText = useTypewriter(roles);
  const heading = "Hi, I'm Seth Cohen";
  const headingTyped = useTypewriterOnce(heading);

  return (
    <section
      id="hero"
      aria-label="Introduction and value proposition"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b px-6 text-center"
      style={{ backgroundAttachment: 'fixed' }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
        aria-label="Hi, I'm Seth Cohen"
      >
        {headingTyped.startsWith("Hi, I'm ") ? (
          <>
            Hi, I'm{' '}
            <span className="text-yellow-400">
              {headingTyped.replace("Hi, I'm ", '')}
            </span>
          </>
        ) : (
          headingTyped
        )}
      </motion.h1>
      <motion.p
        aria-live="polite"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-xl md:text-2xl font-semibold h-10"
      >
        {typedText}
        <span className="blinking-cursor">|</span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-8 flex justify-center gap-6"
      >
        <a
          href="#portfolio"
          className="group relative bg-gold-500 hover:bg-gold-600 rounded p-2 flex items-center justify-center"
          aria-label="View Portfolio"
        >
          <Layers size={24} aria-hidden="true" />
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-gold-400 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-focus:opacity-100 z-10">
            View Portfolio
          </span>
        </a>
        <a
          href="#contact"
          className="group relative bg-gold-500 hover:bg-gold-600 rounded p-2 flex items-center justify-center"
          aria-label="Contact Me"
        >
          <Mail size={24} aria-hidden="true" />
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-gold-400 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-focus:opacity-100 z-10">
            Contact Me
          </span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
