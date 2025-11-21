import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
          >
            The future of point of sale.
            <span className="block bg-gradient-to-r from-orange-300 via-amber-200 to-cyan-300 bg-clip-text text-transparent">R1 POS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg md:text-xl text-slate-200/90"
          >
            Cinematic, secure, and lightning fast checkout. Designed for retailers, cafes and growth-minded businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#showcase" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl transition">See it in action</a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900/60 backdrop-blur text-white ring-1 ring-white/20 hover:ring-white/40 transition">Get a live demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
