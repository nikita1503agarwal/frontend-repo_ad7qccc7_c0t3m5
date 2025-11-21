import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="relative bg-slate-950">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1200px_800px_at_50%_-20%,rgba(255,255,255,0.06),transparent)] pointer-events-none" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <CTA />
      </main>
      <footer className="relative border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} R1 POS. All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
