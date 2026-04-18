import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Calendar, ChevronDown, Star } from 'lucide-react'

const slides = [
  {
    bg: '/clinic-front.jpg',
    alt: 'Professional dental clinic interior with modern equipment in Chhatrapati Sambhajinagar (Aurangabad)',
  },
  {
    bg: '/clinic-interior.jpg',
    alt: 'Expert dentist performing painless dental implant treatment',
  },
  {
    bg: '/clinic-waiting.jpg',
    alt: 'Happy patient with perfect smile after dental implant treatment at Dr. Raktade clinic',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden" aria-label="Hero section">
      {/* Image Slider */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].bg}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
            loading={current === 0 ? 'eager' : 'lazy'}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-36">
        <div className="max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500/20 to-teal-500/20 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
            >
              <span className="text-sky-300" aria-hidden="true">✦</span>
              <span className="text-white text-sm font-semibold tracking-wide">Best dental clinic in Chhatrapati Sambhajinagar</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-white text-sm font-medium">4.8 Rating • 160+ Happy Patients</span>
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Advanced Dental Implants &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-teal-300">
              Painless Dental Care
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            Expert diagnosis, precise treatment, and trusted follow-up care for confident smiles.
            Serving CIDCO & Chhatrapati Sambhajinagar (Aurangabad) with compassionate, state-of-the-art dentistry.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              id="hero-book-btn"
              onClick={scrollToContact}
              className="group flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white shadow-2xl shadow-teal-500/40 transition-all duration-300 hover:scale-105 hover:shadow-teal-400/60 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)' }}
              aria-label="Book an appointment at Dr. Raktade Dental Implant Center"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300" aria-hidden="true">
                <Calendar size={17} className="text-white" />
              </span>
              Book Appointment
            </button>
            <a
              href="tel:+919404343961"
              id="hero-call-btn"
              className="group flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white border border-white/30 bg-slate-900/60 backdrop-blur-sm shadow-xl transition-all duration-300 hover:bg-slate-900/80 hover:border-white/60 hover:scale-105 active:scale-95"
              aria-label="Call Dr. Raktade Dental Implant Center"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300" aria-hidden="true">
                <Phone size={17} className="text-white" />
              </span>
              Call Now
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            {[
              { num: '500+', label: 'Implants Done' },
              { num: '10+', label: 'Years Experience' },
              { num: '100%', label: 'Painless Care' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>{stat.num}</div>
                  <div className="text-xs text-white/60 font-medium">{stat.label}</div>
                </div>
                <div className="w-px h-8 bg-white/20 last:hidden" aria-hidden="true" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10" role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-sky-400' : 'w-2 bg-white/40'
              }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/50 text-xs"
        aria-hidden="true"
      >
        <span className="writing-mode-vertical" style={{ writingMode: 'vertical-rl', letterSpacing: '0.1em' }}>SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
