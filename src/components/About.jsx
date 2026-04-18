import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ShieldCheck, Microscope, HeartHandshake, RefreshCcw } from 'lucide-react'

const highlights = [
  { icon: ShieldCheck, title: 'Skilled Implant Specialist', desc: 'Expert in dental implantology with high precision and excellent outcomes.' },
  { icon: Microscope, title: 'Precise Diagnosis', desc: 'Accurate digital diagnosis ensures the right treatment plan every time.' },
  { icon: HeartHandshake, title: 'Painless Procedures', desc: 'Modern techniques and gentle care make every visit comfortable and calm.' },
  { icon: RefreshCcw, title: 'Long-Term Follow-Up Care', desc: 'We stay with you beyond treatment for lasting results and healthy smiles.' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="section-pad bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-100">
              <img
                src="/about-doctor.jpg"
                alt="Dr. Prashant Raktade performing dental implant procedure at the clinic in Chhatrapati Sambhajinagar (Aurangabad)"
                className="w-full h-[460px] lg:h-[560px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating card - experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -right-5 top-10 glass-card rounded-2xl p-4 shadow-xl shadow-sky-100 border border-sky-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>15+</span>
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">Years</div>
                  <div className="text-slate-500 text-xs">Experience</div>
                </div>
              </div>
            </motion.div>

            {/* Floating card - happy patients */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="absolute -left-5 bottom-10 glass-card rounded-2xl p-4 shadow-xl shadow-sky-100 border border-sky-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>4.8★</span>
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">Google Rating</div>
                  <div className="text-slate-500 text-xs">160+ Reviews</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-sky-50 -z-10" aria-hidden="true" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-teal-50 -z-10" aria-hidden="true" />
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" aria-hidden="true" />
              About Dr. Raktade Dental Implant Center
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-slate-800 leading-tight mb-5"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Expert Implant Care with a{' '}
              <span className="gradient-text">Personal Touch</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-4">
              At Dr. Raktade Dental Implant Center, we specialize in transforming smiles through
              advanced dental implant procedures. Located in CIDCO, Chhatrapati Sambhajinagar (Aurangabad), our
              clinic is led by <strong>Dr. Prashant Raktade</strong> — a highly skilled implant specialist
              committed to providing technically correct, timely, and genuinely painless dental care.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              We believe dental care should feel reassuring, not stressful. Every patient receives a
              thorough diagnosis, a clear explanation of their treatment plan, and attentive follow-up
              support — because your smile is a long-term commitment we take seriously.
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-sm mb-0.5">{item.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
