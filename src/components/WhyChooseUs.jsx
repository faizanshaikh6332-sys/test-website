import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { BrainCircuit, Smile, ClipboardCheck, Users } from 'lucide-react'

const reasons = [
  {
    icon: BrainCircuit,
    title: 'Advanced Implant Expertise',
    desc: 'Dr. Prashant Raktade brings specialized knowledge and hands-on mastery in implant dentistry, ensuring technically correct, lasting results for every patient.',
    color: 'from-sky-500 to-blue-600',
    lightBg: 'bg-sky-50',
    accent: 'text-sky-600',
    border: 'border-sky-100',
  },
  {
    icon: Smile,
    title: 'Smooth & Comfortable Treatment',
    desc: 'We use modern pain management techniques and a gentle approach so that your dental procedure feels stress-free from start to finish.',
    color: 'from-teal-500 to-emerald-600',
    lightBg: 'bg-teal-50',
    accent: 'text-teal-600',
    border: 'border-teal-100',
  },
  {
    icon: ClipboardCheck,
    title: 'Trusted Diagnosis & Planning',
    desc: 'Every treatment begins with a thorough digital assessment and a clear, step-by-step plan — so you always know what to expect before we begin.',
    color: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
    accent: 'text-violet-600',
    border: 'border-violet-100',
  },
  {
    icon: Users,
    title: 'Personal Attention to Every Patient',
    desc: 'We take the time to listen, understand your concerns, and address all doubts personally — because your comfort and confidence matter just as much as the treatment itself.',
    color: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50',
    accent: 'text-amber-600',
    border: 'border-amber-100',
  },
]

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="why-us" ref={ref} className="section-pad bg-gradient-to-br from-slate-900 via-[#0c1a40] to-[#0a2540] relative overflow-hidden" aria-labelledby="why-us-heading">
      {/* Background decor */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-sky-400/5 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-sky-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" aria-hidden="true" />
            Why Choose Us
          </div>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            The Dr. Raktade{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
              Difference
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            We go beyond dentistry — we build trust, comfort, and lasting relationships with every patient who walks through our doors.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.55, ease: 'easeOut' }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <Icon size={26} className="text-white" />
                </div>

                {/* Number */}
                <div className="absolute top-5 right-5 text-5xl font-black text-white/5 select-none" aria-hidden="true">
                  0{i + 1}
                </div>

                <h3 className="font-bold text-white text-base mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>

                {/* Bottom accent line */}
                <div className={`mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r ${item.color}`} aria-hidden="true" />
              </motion.div>
            )
          })}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { num: '1500+', label: 'Successful Implants', icon: '🦷' },
            { num: '5.0★', label: 'Google Rating', icon: '⭐' },
            { num: '100K+', label: 'Verified Reviews', icon: '📝' },
            { num: '15+', label: 'Years of Excellence', icon: '🏆' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-5 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl mb-1" aria-hidden="true">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{stat.num}</div>
              <div className="text-slate-400 text-xs font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
