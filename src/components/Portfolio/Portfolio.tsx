import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxBackground from '@/components/Parallax/ParallaxBackground';
import PortfolioCard from './PortfolioCard';

/**
 * Portfolio section with animated cards and parallax background.
 */
const projects = [
  {
    title: 'Vision Log',
    description: 'A Flutter Android app for recording and managing dreams. With a focus on intuitive and efficient design, the app has a clean minimalistic feel with no sense of lack of functionality.',
    link: 'https://github.com/SethCohen/VisionLog',
    date: '2018-08-30',
    thumbnail: '/visionlog.png',
  },
  {
    title: 'KF2 ESMA',
    description: 'A simple program that converts a collection of Killing Floor 2 steam workshop maps and outputs the server configs to import custom maps into a server.',
    link: 'https://github.com/SethCohen/KF2-Easy-Server-Map-Adder',
    date: '2019-05-28',
    thumbnail: '/kf2esma.png',
  },
  {
    title: 'Emoji Utilities',
    description: 'A Discord Bot for all your custom emoji-related tools, utilities, and info in one convenient bot.',
    link: 'https://github.com/SethCohen/EmojiUtilities',
    date: '2020-09-20',
    thumbnail: '/emojiutilities.png',
  },
  {
    title: 'Github Releases To Discord',
    description: 'A GitHub Action that sends a stylized Discord webhook containing the description of a GitHub Release to a specified Discord channel. It formats the description to improve readability and includes various configuration options to customize the message.',
    link: 'https://github.com/SethCohen/github-releases-to-discord',
    date: '2022-08-23',
    thumbnail: '/githubreleases.png',
  },
  {
    title: 'ASLearner',
    description: 'An American Sign Language Learning app. It provides a simple and intuitive interface for learning ASL through interactive lessons, quizzes, and practice exercises. The app is designed to be accessible and user-friendly, making it easy for anyone to start learning ASL.',
    link: 'https://github.com/SethCohen/ASLearner',
    date: '2022-09-23',
    thumbnail: '/aslearner.png',
  },
  {
    title: 'WiktionaryViz',
    description: 'An explorative visual analytics tool for linguistics based upon Wiktionary data. It allows users to explore and analyze linguistic data in an interactive way, providing insights into word usage, definitions, and relationships.',
    link: 'https://github.com/vialab/WiktionaryViz',
    date: '2024-11-20',
    thumbnail: '/wiktionaryviz.png',
  },
];

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const newIndex = Math.round(scrollTop / (viewportHeight * 0.7));
      setActiveIndex(newIndex);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="portfolio"
      aria-label="Portfolio projects gallery"
      className="relative py-16 px-0 min-h-screen flex flex-col justify-center items-center overflow-visible"
    >
      <ParallaxBackground />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8 text-center z-10 sticky top-0 py-4"
        style={{ marginBottom: 0 }}
      >
        Portfolio
      </motion.h2>
      <div ref={containerRef} className="relative w-full flex flex-col">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`sticky top-[3vh] shrink-0 max-w-3xl w-full mx-auto ${index === activeIndex ? 'pointer-events-auto z-50' : 'pointer-events-none z-10'}`}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{
              opacity: 1,
              scale: index === activeIndex ? 1 : 0.95,
              y: index === activeIndex ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            <PortfolioCard {...project} isActive={index === activeIndex} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
