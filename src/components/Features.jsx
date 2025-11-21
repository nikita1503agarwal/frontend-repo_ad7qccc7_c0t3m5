import { motion } from 'framer-motion'
import { CreditCard, ShieldCheck, Zap, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: CreditCard,
    title: 'Frictionless Checkout',
    text: 'Tap, chip or scan — built for speed with offline-first resilience.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    text: 'PCI compliant, end-to-end encryption and role-based control.'
  },
  {
    icon: Zap,
    title: 'Real-time Sync',
    text: 'Inventory, orders and customers update instantly across devices.'
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    text: 'Beautiful dashboards with trends, cohorts and live KPIs.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1200px_400px_at_50%_-20%,rgba(255,153,0,0.25),transparent),radial-gradient(1200px_400px_at_80%_120%,rgba(56,189,248,0.25),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-5xl font-bold text-white"
        >
          Built for modern retail
        </motion.h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:from-white/10 hover:to-white/[0.06] transition shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-orange-500 to-cyan-500 text-white shadow-lg shadow-orange-500/20">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
