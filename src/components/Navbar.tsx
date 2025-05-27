import { ArrowUp } from 'lucide-react'

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-transparent z-50">
      <div className="text-xl font-bold cursor-default select-none">SethDev</div>
      <button
        onClick={scrollToTop}
        className="border rounded px-3 py-1 transition flex items-center gap-1"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
        Top
      </button>
    </nav>
  )
}
