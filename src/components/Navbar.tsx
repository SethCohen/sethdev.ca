import { ArrowUp } from 'lucide-react'

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-transparent px-6 py-4">
      <div className="cursor-default text-xl font-bold select-none">SethDev</div>
      <button
        onClick={scrollToTop}
        className="flex items-center gap-1 rounded border px-3 py-1 transition"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
        Top
      </button>
    </nav>
  )
}
