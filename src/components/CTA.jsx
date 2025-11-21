import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1000px_350px_at_50%_-20%,rgba(14,165,233,0.25),transparent)]" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Ready to upgrade your checkout?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-slate-300/95"
        >
          Book a live demo with our team and experience R1 POS in action.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-3"
          onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will be in touch.'); }}
        >
          <input type="text" required placeholder="Your name" className="md:col-span-1 col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <input type="email" required placeholder="Work email" className="md:col-span-2 col-span-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <button className="col-span-1 px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-95">Request demo</button>
        </motion.form>
      </div>
    </section>
  )
}
