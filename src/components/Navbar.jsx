import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = `fixed top-0 inset-x-0 z-50 transition-all ${
    scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'
  }`

  const linkClass = 'text-slate-200/90 hover:text-white transition-colors'

  return (
    <header className={navClass}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 via-amber-400 to-fuchsia-500 shadow-lg shadow-orange-500/25 grid place-items-center">
            <span className="text-white font-extrabold">R1</span>
          </div>
          <span className="text-white/90 font-semibold tracking-tight group-hover:text-white">R1 POS</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className={linkClass}>Features</a>
          <a href="#showcase" className={linkClass}>Showcase</a>
          <a href="#pricing" className={linkClass}>Pricing</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-white text-slate-900 font-medium hover:opacity-90 transition">Get Demo</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#features" onClick={() => setOpen(false)} className={linkClass}>Features</a>
            <a href="#showcase" onClick={() => setOpen(false)} className={linkClass}>Showcase</a>
            <a href="#pricing" onClick={() => setOpen(false)} className={linkClass}>Pricing</a>
            <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full bg-white text-slate-900 font-medium text-center">Get Demo</a>
          </div>
        </div>
      )}
    </header>
  )
}
