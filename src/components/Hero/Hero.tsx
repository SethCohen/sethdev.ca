import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Mail, User } from 'lucide-react'
import { useTypewriter } from '@/hooks/useTypewriter'
import { useTypewriterOnce } from '@/hooks/useTypewriterOnce'
import { siGithub, siYoutube } from 'simple-icons/icons'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

import LinkedIn from '@/assets/linkedin.svg?react'
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
  ]
  const typedText = useTypewriter(roles)
  const heading = "Hi, I'm Seth Cohen"
  const headingTyped = useTypewriterOnce(heading)

  return (
    <section
      id="hero"
      aria-label="Introduction and value proposition"
      className="relative flex min-h-screen flex-col items-center justify-center bg-linear-to-b px-6 text-center"
      style={{ backgroundAttachment: 'fixed' }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 text-5xl font-extrabold tracking-tight md:text-6xl"
        aria-label="Hi, I'm Seth Cohen"
      >
        {headingTyped.startsWith("Hi, I'm ") ? (
          <>
            Hi, I'm <span className="text-yellow-400">{headingTyped.replace("Hi, I'm ", '')}</span>
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
        className="h-10 text-xl font-semibold md:text-2xl"
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
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="#portfolio"
              className="group relative flex items-center justify-center rounded p-2"
              aria-label="View Portfolio"
            >
              <Layers size={36} aria-hidden="true" />
            </a>
          </TooltipTrigger>
          <TooltipContent>View Portfolio</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="#contact"
              className="group relative flex items-center justify-center rounded p-2"
              aria-label="Contact Me"
            >
              <Mail size={36} aria-hidden="true" />
            </a>
          </TooltipTrigger>
          <TooltipContent>Contact Me</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="#about-me"
              className="group relative flex items-center justify-center rounded p-2"
              aria-label="About Me"
            >
              <User size={36} aria-hidden="true" />
            </a>
          </TooltipTrigger>
          <TooltipContent>About Me</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://github.com/sethcohen"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center rounded p-2"
              aria-label="Github"
            >
              <svg
                width={36}
                height={36}
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="inline fill-current"
              >
                <path d={siGithub.path} />
              </svg>
            </a>
          </TooltipTrigger>
          <TooltipContent>Github</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://youtube.com/@sethcohen2185"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center rounded p-2"
              aria-label="Youtube"
            >
              <svg
                width={36}
                height={36}
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="inline fill-current"
              >
                <path d={siYoutube.path} />
              </svg>
            </a>
          </TooltipTrigger>
          <TooltipContent>Youtube</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://www.linkedin.com/in/aronseth-cohen/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center rounded p-2"
              aria-label="LinkedIn"
            >
              <LinkedIn width={24} height={24} />
            </a>
          </TooltipTrigger>
          <TooltipContent>LinkedIn</TooltipContent>
        </Tooltip>
      </motion.div>
    </section>
  )
}

export default Hero
