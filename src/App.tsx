import React, { useEffect, useState, type JSX } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Layers } from 'lucide-react';
import Navbar from './components/Navbar'
import { siKofi } from 'simple-icons/icons';
import { siGithubsponsors } from 'simple-icons/icons';
import { siPaypal } from 'simple-icons/icons';
import { siPatreon } from 'simple-icons/icons';
import { siBuymeacoffee } from 'simple-icons/icons';

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
					<span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-gold-400 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-focus:opacity-100 z-10">
						Ko-fi
					</span>
				</a>
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
					<span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-gold-400 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-focus:opacity-100 z-10">
						Github Sponsor
					</span>
				</a>
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
					<span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-gold-400 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-focus:opacity-100 z-10">Paypal
					</span>
				</a>
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
					<span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-gold-400 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-focus:opacity-100 z-10">
						Patreon
					</span>
				</a>
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
					<span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-gold-400 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-focus:opacity-100 z-10">
						BuyMeACoffee
					</span>
				</a>
			</motion.div>
		</section>
	);
};

const techStacks: { [key: string]: string[] } = {
	'Vision Log': ['Flutter', 'Dart', 'Android'],
	'KF2 ESMA': ['Node.js', 'JavaScript'],
	'Emoji Utilities': ['Node.js', 'Discord.js'],
	'SethDev.ca': ['React', 'Tailwind CSS', 'TypeScript'],
	'Github Releases To Discord': ['GitHub Actions', 'Node.js'],
	'ASLearner': ['Flutter', 'Dart'],
	'WiktionaryViz': ['React', 'D3.js', 'TypeScript'],
};

const techIcons: { [key: string]: JSX.Element } = {
	Flutter: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-6 h-6" />,
	Dart: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" className="w-6 h-6" />,
	Android: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" className="w-6 h-6" />,
	'Node.js': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6" />,
	JavaScript: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6" />,
	'React': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" />,
	'Tailwind CSS': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="w-6 h-6" />,
	TypeScript: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" />,
	'Discord.js': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" alt="Discord.js" className="w-6 h-6" />,
	'D3.js': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" alt="D3.js" className="w-6 h-6" />,
	'GitHub Actions': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Actions" className="w-6 h-6" />,
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

	const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});
	const [activeIndex, setActiveIndex] = useState(0);

	const handleImageLoad = (title: string) => {
		setLoadedImages((prev) => ({ ...prev, [title]: true }));
	};

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
			className="relative py-16 bg-gray-900 text-gold-400 px-0 min-h-screen flex flex-col justify-center items-center overflow-visible"
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
							className={`sticky top-[15vh] flex-shrink-0 h-[70vh] max-w-3xl w-full mx-auto z-${isActive ? 50 : 10 + index}`}
							initial={{ opacity: 0, scale: 0.9, x: 20 }}
							animate={{ opacity: isActive ? 1 : 0.6, scale: isActive ? 1 : 0.9, x: isActive ? 0 : 20, zIndex: isActive ? 50 : 10 + index }}
							transition={{ duration: 0.5 }}
						>
							<div
								className={`group relative bg-gray-800/90 rounded-3xl shadow-2xl border border-gold-500/30 p-8 w-full h-full flex flex-col justify-between items-center transition-transform duration-300 hover:scale-105 hover:shadow-gold-500/40 hover:border-gold-500/60 focus-within:scale-105 focus-within:shadow-gold-500/40 focus-within:border-gold-500/60 ${isActive ? 'ring-4 ring-gold-500/50' : ''}`}
								tabIndex={0}
							>
								<div className="w-full flex-1 flex flex-col items-center justify-center">
									<div className="relative aspect-video w-full max-w-lg bg-gray-700 rounded-xl overflow-hidden mb-6 flex items-center justify-center">
										{thumbnail ? (
											<>
												<img
													src={thumbnail}
													alt={`${title} thumbnail`}
													className={`object-cover w-full h-full transition-opacity duration-500 ${loadedImages[title] ? 'opacity-100' : 'opacity-0'}`}
													onLoad={() => handleImageLoad(title)}
													loading="lazy"
												/>
												{!loadedImages[title] && (
													<div className="absolute inset-0 flex items-center justify-center bg-gray-700 animate-pulse">
														<div className="w-16 h-16 rounded bg-gray-600" />
													</div>
												)}
										</>
									) : (
										<div className="w-full h-full flex items-center justify-center bg-gray-700 animate-pulse">
											<div className="w-16 h-16 rounded bg-gray-600" />
										</div>
									)}
								</div>
								<h3 className="text-2xl font-bold mb-2 text-gold-400 text-center">{title}</h3>
								<p className="text-xs text-gold-600 mb-2 text-center">{new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</p>
								<p className="text-base text-gold-200 mb-4 text-center line-clamp-4">{description}</p>
								<div className="flex flex-wrap justify-center gap-3 mb-4">
									{(techStacks[title] || []).map((tech) => (
										<span key={tech} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-900/60 rounded text-xs font-medium text-gold-400 border border-gold-500/20">
											{techIcons[tech] || tech}
											<span>{tech}</span>
										</span>
									))}
								</div>
							</div>
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-4 px-6 py-2 bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 flex items-center gap-2 text-lg group/button"
								aria-label={`View project: ${title}`}
							>
								<ExternalLink size={20} aria-hidden="true" />
								<span>View Repo</span>
							</a>
						</div>
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
