import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Showcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 6])

  return (
    <section id="showcase" ref={ref} className="relative py-28 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(800px_300px_at_20%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_300px_at_90%_120%,rgba(236,72,153,0.25),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-5xl font-bold text-white"
        >
          A cinematic product story
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div style={{ y }} className="relative">
            <motion.div style={{ rotate }} className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1600&auto=format&fit=crop" alt="Cashier desk" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute -bottom-8 -left-6 w-40 h-40 rounded-3xl bg-gradient-to-tr from-orange-500/30 to-cyan-500/30 blur-2xl" />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-slate-300/95 text-lg leading-relaxed"
            >
              Meet the POS that feels alive. As you scan products, add customers, and accept payments, subtle motion guides the eye and reduces friction. Everything syncs instantly across terminals and your back office.
            </motion.p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Fast onboarding", "One-tap refunds", "Smart discounts", "Multi-store"]
                .map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-200"
                  >
                    {item}
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
