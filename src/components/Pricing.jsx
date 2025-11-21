import { motion } from 'framer-motion'

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$29',
      note: 'per terminal / mo',
      features: ['Unlimited products', 'Email support', 'Basic analytics']
    },
    {
      name: 'Growth',
      highlight: true,
      price: '$79',
      note: 'per terminal / mo',
      features: ['Everything in Starter', 'Advanced analytics', 'Priority support', 'Integrations']
    },
    {
      name: 'Enterprise',
      price: 'Talk to us',
      note: 'Custom',
      features: ['SLA & SSO', 'Custom workflows', 'Dedicated manager']
    }
  ]

  return (
    <section id="pricing" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1000px_350px_at_20%_-10%,rgba(59,130,246,0.22),transparent),radial-gradient(1000px_350px_at_90%_120%,rgba(251,146,60,0.22),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-5xl font-bold text-white"
        >
          Simple, scalable pricing
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative rounded-3xl p-6 border ${
                t.highlight ? 'bg-gradient-to-b from-white/10 to-white/[0.06] border-white/20 shadow-xl' : 'bg-white/[0.04] border-white/10'
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-6 text-xs px-2 py-1 rounded-full bg-orange-500 text-white">Most popular</div>
              )}
              <div className="text-white/90 font-semibold">{t.name}</div>
              <div className="mt-4 text-4xl font-extrabold text-white">{t.price}</div>
              <div className="text-sm text-slate-300/80">{t.note}</div>
              <ul className="mt-6 space-y-2 text-slate-200 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex items-center justify-center w-full px-5 py-3 rounded-xl font-semibold transition ${
                t.highlight ? 'bg-white text-slate-900 hover:opacity-95' : 'bg-slate-900/60 text-white ring-1 ring-white/20 hover:ring-white/40'
              }`}>Get started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
