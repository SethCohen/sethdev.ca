import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Support from './components/Support/Support';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
	return (
		<main className="bg-stone-950 font-sans leading-relaxed scroll-smooth">
			<Navbar />
			<Hero />
			<Portfolio />
			<Support />
			<Footer />
		</main>
	);
};

export default App;