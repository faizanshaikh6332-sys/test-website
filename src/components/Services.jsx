import { useState, useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { MoveHorizontal } from 'lucide-react'

const services = [
  {
    icon: '🦷',
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacements using cutting-edge implant technology. Restore function and confidence.',
    tag: 'Most Popular',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: '😁',
    title: 'Full Mouth Dental Implants',
    desc: 'Complete smile restoration for patients with multiple missing teeth. Transform your entire bite in targeted sessions.',
    tag: 'Specialized',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    icon: '🔧',
    title: 'Tooth Extraction',
    desc: 'Safe and painless extraction using advanced techniques that minimize discomfort and speed up recovery.',
    tag: '',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    icon: '🩺',
    title: 'Root Canal Treatment',
    desc: 'Eliminate tooth pain and save your natural tooth with our precise, gentle root canal procedures.',
    tag: '',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: '✨',
    title: 'Smile Design',
    desc: 'Customized cosmetic planning that combines aesthetics and function to give you the perfect smile.',
    tag: '',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: '💎',
    title: 'Cosmetic Dentistry',
    desc: 'From veneers to teeth whitening — our cosmetic treatments deliver stunning, lasting aesthetic results.',
    tag: '',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: '🫧',
    title: 'Teeth Cleaning',
    desc: 'Professional scaling and polishing to maintain healthy gums, remove plaque, and freshen your breath.',
    tag: '',
    color: 'from-cyan-500 to-sky-600',
  },
  {
    icon: '❤️',
    title: 'General Dental Treatment',
    desc: 'Comprehensive care including fillings, crowns, bridges, and routine checkups to keep your smile healthy.',
    tag: '',
    color: 'from-green-500 to-teal-600',
  },
]

const beforeAfterGallery = [
  {
    before: '/before-1.jpg',
    after: '/after-1.jpg',
    label: 'Full Mouth Implants',
  },
  {
    before: '/before-2.jpg',
    after: '/after-2.jpg',
    label: 'Happy Smile',
  },
  {
    before: '/before-3.jpg',
    after: '/after-3.jpg',
    label: 'Full Mouth Implants',
  },
  {
    before: '/before-4.jpg',
    after: '/after-4.jpg',
    label: 'Full Mouth Implants',
  },
  {
    before: '/before-5.jpg',
    after: '/after-5.jpg',
    label: 'Implants and immediate crown',
  },
  {
    before: '/before-6.jpg',
    after: '/after-6.jpg',
    label: 'Smile Makeover',
  },
]

/* ── Shutter Slider Component ─────────────────────────────── */
function ShutterSlider({ before, beforeAlt, after, afterAlt, label }) {
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef(null)

  const getPercent = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    return Math.round((x / rect.width) * 100)
  }, [])

  // Mouse events
  const onMouseDown = (e) => {
    e.preventDefault()
    setDragging(true)
  }
  const onMouseMove = useCallback((e) => {
    if (!dragging) return
    setPosition(getPercent(e.clientX))
  }, [dragging, getPercent])
  const onMouseUp = useCallback(() => setDragging(false), [])

  // Touch events
  const onTouchStart = () => setDragging(true)
  const onTouchMove = useCallback((e) => {
    if (!dragging) return
    setPosition(getPercent(e.touches[0].clientX))
  }, [dragging, getPercent])
  const onTouchEnd = useCallback(() => setDragging(false), [])

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
      {/* Slider area */}
      <div
        ref={containerRef}
        className="relative h-52 select-none overflow-hidden cursor-col-resize"
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="img"
        aria-label={`Before and after comparison of ${label} treatment`}
      >
        {/* After image — full width base layer */}
        <img
          src={after}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />

        {/* Before image — clipped by shutter position */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt={beforeAlt}
            className="absolute inset-0 h-full object-cover"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_2px_rgba(14,165,233,0.7)]"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          aria-hidden="true"
        />

        {/* Drag handle */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-xl border-2 transition-all duration-150 ${dragging
            ? 'border-sky-500 scale-110 shadow-sky-300/60'
            : 'border-sky-400 hover:border-sky-500 hover:scale-105'
            } cursor-col-resize`}
          style={{ left: `${position}%` }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          aria-label="Drag to compare before and after"
        >
          <MoveHorizontal size={18} className="text-sky-500" aria-hidden="true" />
        </div>

        {/* Before label */}
        <div
          className="absolute bottom-3 left-3 bg-slate-800/75 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-semibold pointer-events-none"
          aria-hidden="true"
        >
          Before
        </div>

        {/* After label */}
        <div
          className="absolute bottom-3 right-3 text-white text-xs px-2.5 py-1 rounded-full font-semibold pointer-events-none"
          style={{ background: 'linear-gradient(135deg,#0ea5e9,#14b8a6)' }}
          aria-hidden="true"
        >
          After
        </div>

        {/* Hint overlay — fades out on first drag */}
        {!dragging && position === 50 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <div className="bg-black/30 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium opacity-80">
              <MoveHorizontal size={13} /> Drag to compare
            </div>
          </div>
        )}
      </div>

      {/* Card footer */}
      <div className="px-4 py-3 flex items-center justify-between">
        <span className="font-semibold text-slate-800 text-sm">{label}</span>
        <span className="text-xs text-sky-600 font-medium bg-sky-50 px-2.5 py-0.5 rounded-full">
          Transformation
        </span>
      </div>
    </div>
  )
}

/* ── Service Card ─────────────────────────────────────────── */
function ServiceCard({ service, index, inView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
      className="service-card group relative bg-white rounded-2xl p-6 shadow-md shadow-slate-100 border border-slate-100 hover:border-transparent cursor-default"
    >
      {service.tag && (
        <span className="absolute top-4 right-4 bg-sky-100 text-sky-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {service.tag}
        </span>
      )}
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        aria-hidden="true"
      >
        <span className="text-2xl leading-none select-none" role="img">{service.icon}</span>
      </div>
      <h3 className="font-bold text-slate-800 text-base mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>

    </motion.article>
  )
}

/* ── Main Export ──────────────────────────────────────────── */
export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const [galleryRef, galleryInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className="section-pad bg-slate-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-500" aria-hidden="true" />
            Our Dental Services
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Comprehensive Care for Every{' '}
            <span className="gradient-text">Dental Need</span>
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
            Where Clinical Precision Meets Visible Results.<br />
            Best Dental Implant Clinic in Chhatrapati Sambhaji Nagar
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} inView={inView} />
          ))}
        </div>


        {/* Before & After — Shutter Sliders */}
        <motion.div
          ref={galleryRef}
          initial={{ opacity: 0, y: 30 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Real Cases. Precise Treatment.{' '}
              <span className="gradient-text">Predictable Results.</span>
            </h2>
            <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
              <MoveHorizontal size={15} className="text-sky-500" aria-hidden="true" />
              Drag the slider to reveal the transformation
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {beforeAfterGallery.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <ShutterSlider
                  before={item.before}
                  beforeAlt={`Before ${item.label} treatment at Dr. Raktade Dental Implant Center`}
                  after={item.after}
                  afterAlt={`After ${item.label} treatment at Dr. Raktade Dental Implant Center`}
                  label={item.label}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
