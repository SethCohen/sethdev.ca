import React, { useEffect, useState, } from 'react';
import { motion } from 'framer-motion';
import { Mail, Layers } from 'lucide-react';
import Navbar from './components/Navbar'
import { siKofi } from 'simple-icons/icons';
import { siGithubsponsors } from 'simple-icons/icons';
import { siPaypal } from 'simple-icons/icons';
import { siPatreon } from 'simple-icons/icons';
import { siBuymeacoffee } from 'simple-icons/icons';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

// Custom hook for typewriter effect
function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, delay = 1500) {
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

// Custom hook for typewriter effect (no deletion, only types in once)
function useTypewriterOnce(text: string, typingSpeed = 80) {
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

const Hero: React.FC = () => {
	const roles = ['HCI Researcher', 'Linguist', 'Creative Developer', 'Artist', 'Minimalist', 'Hobbyist', 'Learning Enthusiast'];
	const typedText = useTypewriter(roles);

	// Typewriter for the heading
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
				className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 !text-gold"
				aria-label="Hi, I'm Seth Cohen"
			>
				<span className="!text-gold">{headingTyped}</span>
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

const Support: React.FC = () => {
	return (
		<section
			id="support"
			aria-label="Support me section with donation options"
			className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gold-400 px-6 text-center"
		>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="text-3xl font-bold mb-6"
			>
				Support Me
			</motion.h2>
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
				className="mb-8 max-w-xl mx-auto"
			>
				If you appreciate my work and want to support my creative journey, you can buy me a cup of matcha or tea. Your support helps me keep creating, exploring, and learning.
			</motion.p>
			<motion.div
				className="flex justify-center gap-8"
				initial={{ opacity: 0, scale: 0.8 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				<Tooltip>
					<TooltipTrigger asChild>
						<a
							href="https://ko-fi.com/sethdev"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-gray-900 font-semibold py-3 px-6 transition-colors"
							aria-label="Ko-fi"
						>
							<svg
								width={20}
								height={20}
								viewBox="0 0 24 24"
								fill={`#${siKofi.hex}`}
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								className="inline"
							>
								<path d={siKofi.path} />
							</svg>
						</a>
					</TooltipTrigger>
					<TooltipContent>
						Ko-fi
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<a
							href="https://github.com/sponsors/sethdev"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-gray-900 font-semibold py-3 px-6 transition-colors"
							aria-label="Github Sponsor"
						>
							<svg
								width={20}
								height={20}
								viewBox="0 0 24 24"
								fill={`#${siGithubsponsors.hex}`}
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								className="inline"
							>
								<path d={siGithubsponsors.path} />
							</svg>
						</a>
					</TooltipTrigger>
					<TooltipContent>
						Github Sponsor
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<a
							href="https://paypal.me/sethdev"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-gray-900 font-semibold py-3 px-6 transition-colors"
							aria-label="Paypal"
						>
							<svg
								width={20}
								height={20}
								viewBox="0 0 24 24"
								fill={`#${siPaypal.hex}`}
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								className="inline"
							>
								<path d={siPaypal.path} />
							</svg>
						</a>
					</TooltipTrigger>
					<TooltipContent>
						Paypal
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<a
							href="https://patreon.com/sethdev"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-gray-900 font-semibold py-3 px-6 transition-colors"
							aria-label="Patreon"
						>
							<svg
								width={20}
								height={20}
								viewBox="0 0 24 24"
								fill={`#ffffff`}
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								className="inline"
							>
								<path d={siPatreon.path} />
							</svg>
						</a>
					</TooltipTrigger>
					<TooltipContent>
						Patreon
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<a
							href="https://www.buymeacoffee.com/sethdev"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-gray-900 font-semibold py-3 px-6 transition-colors"
							aria-label="BuyMeACoffee"
						>
							<svg
								width={20}
								height={20}
								viewBox="0 0 24 24"
								fill={`#${siBuymeacoffee.hex}`}
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								className="inline"
							>
								<path d={siBuymeacoffee.path} />
							</svg>
						</a>
					</TooltipTrigger>
					<TooltipContent>
						BuyMeACoffee
					</TooltipContent>
				</Tooltip>
			</motion.div>
		</section>
	);
};

const ParallaxBackground: React.FC = () => (
	<div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
		<motion.div
			className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gold-500/10 via-gray-900/60 to-gold-600/10"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		/>
		<motion.div
			className="absolute rounded-full bg-gold-500/20 blur-2xl"
			style={{ width: 400, height: 400, top: '10%', left: '-10%' }}
			animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
			transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
		/>
		<motion.div
			className="absolute rounded-full bg-gold-600/20 blur-2xl"
			style={{ width: 300, height: 300, bottom: '10%', right: '-8%' }}
			animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
			transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut' }}
		/>
		<motion.div
			className="absolute rounded-full bg-gold-400/10 blur-3xl"
			style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
			animate={{ scale: [1, 1.1, 1] }}
			transition={{ repeat: Infinity, duration: 30, ease: 'easeInOut' }}
		/>
	</div>
);

const Portfolio: React.FC = () => {
	const projects = [
		{
			title: 'Vision Log',
			description: 'A Flutter Android app for recording and managing dreams. With a focus on intuitive and efficient design, the app has a clean minimalistic feel with no sense of lack of functionality.',
			link: 'https://github.com/SethCohen/VisionLog',
			date: '2018-08-30',
			thumbnail: 'https://placehold.co/500.png',
		},
		{
			title: 'KF2 ESMA',
			description: 'A simple program that converts a collection of Killing Floor 2 steam workshop maps and outputs the server configs to import custom maps into a server',
			link: 'https://github.com/SethCohen/KF2-Easy-Server-Map-Adder',
			date: '2019-05-28',
			thumbnail: 'https://placehold.co/500.png',
		},
		{
			title: 'Emoji Utilities',
			description: 'A Discord Bot for all your custom emoji-related tools, utilities, and info in one convenient bot.',
			link: 'https://github.com/SethCohen/EmojiUtilities',
			date: '2020-09-20',
			thumbnail: 'https://placehold.co/500.png',
		},
		{
			title: 'SethDev.ca',
			description: 'Personal portfolio website showcasing my projects, skills, and interests. Built with React and Tailwind CSS for a modern, responsive design.',
			link: 'https://github.com/SethCohen/sethdev.ca',
			date: '2021-03-07',
			thumbnail: 'https://placehold.co/500.png',
		},
		{
			title: 'Github Releases To Discord',
			description: 'A GitHub Action that sends a stylized Discord webhook containing the description of a GitHub Release to a specified Discord channel. It formats the description to improve readability and includes various configuration options to customize the message.',
			link: 'https://github.com/SethCohen/github-releases-to-discord',
			date: '2022-08-23',
			thumbnail: 'https://placehold.co/500.png',
		},
		{
			title: 'ASLearner',
			description: 'An American Sign Language Learning app. It provides a simple and intuitive interface for learning ASL through interactive lessons, quizzes, and practice exercises. The app is designed to be accessible and user-friendly, making it easy for anyone to start learning ASL.',
			link: 'https://github.com/SethCohen/ASLearner',
			date: '2022-09-23',
			thumbnail: 'https://placehold.co/500.png',
		},
		{
			title: 'WiktionaryViz',
			description: 'An explorative visual analytics tool for linguistics based upon Wiktionary data. It allows users to explore and analyze linguistic data in an interactive way, providing insights into word usage, definitions, and relationships.',
			link: 'https://github.com/vialab/WiktionaryViz',
			date: '2024-11-20',
			thumbnail: 'https://placehold.co/500.png',
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const containerRef = React.useRef<HTMLDivElement>(null);

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
				className="text-3xl font-bold mb-8 text-center z-10"
			>
				Portfolio
			</motion.h2>
			<div
				ref={containerRef}
				className="relative w-full flex flex-col"
			>
				{projects.map(({ title, description, link, date, thumbnail }, index) => {
					const isActive = index === activeIndex;
					return (
						<motion.div
							key={title}
							className={`sticky top-[15vh] flex-shrink-0 max-w-3xl w-full mx-auto ${
								isActive
									? 'pointer-events-auto z-50'
									: 'pointer-events-none z-10'
							}`}
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{
								opacity: 1,
								scale: isActive ? 1 : 0.95,
								y: isActive ? 0 : 20,
							}}
							transition={{ duration: 0.5 }}
						>
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								className="block focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-3xl transition-shadow hover:shadow-lg"
								tabIndex={isActive ? 0 : -1}
								aria-label={`Open project: ${title}`}
							>
								<Card className="bg-background-dark cursor-pointer">
									<CardHeader>
										<CardTitle className="!text-2xl !font-bold !text-gold-400 !flex !items-center !justify-between">{title}</CardTitle>
										{new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
									</CardHeader>
									<CardContent>
										<img
											src={thumbnail}
											alt={`${title} thumbnail`}
											className="w-full h-auto rounded-t-3xl object-cover"
										/>
										<CardDescription>{description}</CardDescription>
									</CardContent>
								</Card>
							</a>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

const Footer: React.FC = () => {
	return (
		<footer
			id="contact"
			aria-label="Contact and copyright information"
			className="bg-gray-900 text-gold-400 py-8 px-6 text-center"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<p className="mb-4">
					<Mail className="inline mr-2" size={18} aria-hidden="true" />
					<br />
					<a
						href="mailto:sethcohen.dev@gmail.com"
						className="underline hover:text-gold-600"
						aria-label="Send email to Seth"
					>
						sethcohen.dev@gmail.com
					</a>
				</p>
				<p className="text-sm">© 2025 Seth Dev. All rights reserved.</p>
			</motion.div>
		</footer>
	);
};

const App: React.FC = () => {
	return (
		<main className="bg-gray-900 text-gold-400 font-sans leading-relaxed scroll-smooth">
			<Navbar />
			<Hero />
			<Portfolio />
			<Support />
			<Footer />
		</main>
	);
};

export default App;

// Tailwind custom color extension for gold (to be added in tailwind.config.js):
// colors: {
//   gold: {
//     400: '#d4af37',
//     500: '#bfa52d',
//     600: '#a68f23',
//   },
// },

// CSS for blinking cursor (add to global styles or App.css):
// .blinking-cursor {
//   animation: blink 1.2s steps(2, start) infinite;
// }
// @keyframes blink {
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0; }
// }
