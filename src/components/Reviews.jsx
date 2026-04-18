import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dnyanster',
    location: 'Chhatrapati Sambhajinagar (Aurangabad)',
    rating: 5,
    review:
      'I recently underwent placement of two dental implants, and I am extremely happy with the entire experience. The procedure was explained clearly, done with great precision, and completely painless. The doctor\'s expertise, calm approach, and attention to detail gave me a lot of confidence. The clinic is very clean, well-equipped, and the staff is polite and supportive. Post-treatment follow-up was excellent, and I\'m already feeling comfortable and confident with my new teeth. I truly appreciate the professionalism and care provided and would highly recommend this clinic to anyone looking for quality dental implant treatment.',
    treatment: 'Dental Implants',
    avatar: 'D',
    color: 'from-sky-500 to-blue-600',
  },
  {
    name: 'Surwase Sandeep',
    location: 'Chhatrapati Sambhajinagar (Aurangabad)',
    rating: 5,
    review:
      'I underwent a full mouth dental implant treatment with Dr. Prashant Raktade, and today it has been one complete year of follow-up—I can confidently say it was one of the best decisions of my life. best dental clinic in Chhatrapati Sambhajinagar (Aurangabad) From detailed planning to flawless execution, every step was handled with exceptional skill, patience, and care. The implants feel completely natural—no pain, no discomfort, and perfect chewing efficiency even after a year. My confidence, smile, and quality of life have improved tremendously. Dr. Raktade\'s meticulous approach, honest guidance, and calm reassurance made a complex procedure feel smooth and stress-free. The clinic maintains excellent hygiene, advanced technology, and a very supportive staff. Even after one year, the results are stable, strong, and aesthetically perfect. This truly reflects the doctor\'s expertise and long-term treatment vision. I highly recommend Dr. Raktade Dental Implant Center to anyone considering dental implants. God truly works through such skilled hands. 🙏',
    treatment: 'Full Mouth Implants',
    avatar: 'S',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    name: 'shubham malande',
    location: 'Chhatrapati Sambhajinagar (Aurangabad)',
    rating: 5,
    review:
      'Good treatment, all staf is supoted. drocter is very carfully treatment all working day. best dental clinic in Chhatrapati Sambhajinagar (Aurangabad) and world class facilities in Chhatrapati Sambhajinagar (Aurangabad).Dr.Raktade is very good person.',
    treatment: 'General Dental Treatment',
    avatar: 'S',
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'DNYANSTER',
    location: 'Chhatrapati Sambhajinagar (Aurangabad)',
    rating: 5,
    review:
      'I recently underwent placement of two dental implants, and I am extremely happy with the entire experience. The procedure was explained clearly, done with great precision, and completely painless. The doctor\'s expertise, calm approach, and attention to detail gave me a lot of confidence. best dental implants in Chhatrapati Sambhajinagar (Aurangabad) Dr.Raktade is very friendly. The clinic is very clean, well-equipped, and the staff is polite and supportive. Post-treatment follow-up was excellent, and I\'m already feeling comfortable and confident with my new teeth. I truly appreciate the professionalism and care provided and would highly recommend this clinic to anyone looking for quality dental implant treatment.',
    treatment: 'Dental Implants',
    avatar: 'D',
    color: 'from-rose-500 to-pink-600',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating: ${count} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((p) => (p + 1) % testimonials.length)

  return (
    <section id="reviews" ref={ref} className="section-pad bg-white" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" aria-hidden="true" />
            Google Reviews
          </div>
          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            What Our Patients{' '}
            <span className="gradient-text">Say About Us</span>
          </h2>

          {/* Google Rating badge */}
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-sky-50 to-teal-50 border border-sky-100 rounded-2xl px-6 py-4 shadow-sm">
            <div className="text-center">
              <div className="text-4xl font-black text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>4.8</div>
              <div className="text-xs text-slate-500 font-medium">Google Rating</div>
            </div>
            <div className="w-px h-12 bg-slate-200" aria-hidden="true" />
            <div>
              <div className="flex gap-0.5 mb-1" aria-label="4.8 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                ))}
              </div>
              <div className="text-sm text-slate-600 font-medium">Based on <strong>160 Reviews</strong></div>
            </div>
            <div className="w-px h-12 bg-slate-200" aria-hidden="true" />
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png"
                alt="Google Reviews"
                className="h-8 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="grid md:grid-cols-2 gap-6"
              >
                {[testimonials[current], testimonials[(current + 1) % testimonials.length]].map((t) => (
                  <article key={t.name} className="bg-slate-50 rounded-3xl p-8 relative border border-slate-100 shadow-sm">
                    <Quote size={40} className="text-sky-100 absolute top-5 right-5" aria-hidden="true" />
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}
                        aria-hidden="true"
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">{t.name}</div>
                        <div className="text-slate-500 text-sm">{t.location}</div>
                        <StarRating count={t.rating} />
                      </div>
                    </div>
                    <blockquote className="text-slate-600 leading-relaxed text-sm">{t.review}</blockquote>
                    <div className="mt-4 inline-flex items-center gap-1.5 bg-sky-50 text-sky-600 text-xs font-semibold px-3 py-1 rounded-full">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                        <circle cx="5" cy="5" r="5" />
                      </svg>
                      {t.treatment}
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial indicators">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-sky-500' : 'w-2 bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* All review tags row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['Painless Treatment', 'Excellent Skill', 'Personal Attention', 'Timely & Precise', 'Highly Recommended', 'Perfect Diagnosis'].map((tag) => (
            <span key={tag} className="bg-slate-50 border border-slate-200 text-slate-600 text-sm px-4 py-1.5 rounded-full font-medium">
              ✓ {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
