import { ArrowUp } from 'lucide-react'

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-transparent z-50">
      <div className="text-gold text-xl font-bold cursor-default select-none">SethDev</div>
      <button
        onClick={scrollToTop}
        className="text-gold border border-gold/50 rounded px-3 py-1 hover:bg-gold/20 transition flex items-center gap-1"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
        Top
      </button>
    </nav>
  )
}
