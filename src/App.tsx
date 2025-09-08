import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Portfolio from './components/Portfolio/Portfolio'
import Support from './components/Support/Support'
import Footer from './components/Footer/Footer'

const App: React.FC = () => {
  return (
    <main className="scroll-smooth bg-stone-950 font-sans leading-relaxed">
      <Navbar />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Support />
      <Footer />
    </main>
  )
}

export default App
