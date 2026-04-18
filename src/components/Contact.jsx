import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, MessageCircle, Mail, CheckCircle, Send } from 'lucide-react'

const PHONE = '+919404343961'
const WHATSAPP_NUMBER = '919404343961'

const infoItems = [
  {
    icon: MapPin,
    title: 'Clinic Address',
    lines: [
      'Shop No. 2, Shreeji Towers,',
      'Jai Bhavani Rd, Kamgar Chowk,',
      'N 2, Cidco,',
      'Chhatrapati Sambhajinagar (Aurangabad),',
      'Maharashtra 431003',
    ],
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: [
      'Monday – Saturday: 11 AM – 8 PM',
      'Sunday: Closed',
    ],
    color: 'from-teal-500 to-emerald-600',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 94043 43961'],
    link: `tel:${PHONE}`,
    color: 'from-violet-500 to-purple-600',
  },
]

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, connect to a backend or email service
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="contact" ref={ref} className="section-pad bg-slate-50" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-500" aria-hidden="true" />
            Contact Us
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Book Your Appointment{' '}
            <span className="gradient-text">Today</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Visit us at CIDCO, Chhatrapati Sambhajinagar (Aurangabad) or reach out directly — we're here to help you smile with confidence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left column - info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-2 space-y-5"
          >
            {infoItems.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex gap-4 items-start">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                    aria-hidden="true"
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm mb-1">{item.title}</div>
                    {item.lines.map((line, j) =>
                      item.link ? (
                        <a key={j} href={item.link} className="block text-sky-600 font-medium text-sm hover:underline">
                          {line}
                        </a>
                      ) : (
                        <p key={j} className="text-slate-500 text-sm">{line}</p>
                      )
                    )}
                  </div>
                </div>
              )
            })}

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${PHONE}`}
                id="contact-call-btn"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold py-3 rounded-xl text-sm hover:shadow-lg hover:shadow-sky-200 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Call Dr. Raktade Dental Implant Center"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dr.%20Raktade%20Dental%20Implant%20Center.`}
                id="contact-whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 rounded-xl text-sm hover:shadow-lg hover:shadow-green-200 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100" style={{ height: '220px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.0!2d75.3188!3d19.8762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUyJzM0LjMiTiA3NcKwMTknMDcuNyJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Raktade Dental Implant Center location on Google Maps - Shop No. 2, Shreeji Towers, CIDCO, Chhatrapati Sambhajinagar (Aurangabad)"
              />
            </div>
          </motion.div>

          {/* Right column - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Send Us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <CheckCircle size={56} className="text-emerald-500 mb-4" aria-hidden="true" />
                  <div className="text-lg font-bold text-slate-800 mb-2">Message Sent!</div>
                  <p className="text-slate-500 text-sm">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Appointment booking form">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Number <span className="text-rose-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contact-service" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option>Dental Implants</option>
                      <option>Full Mouth Dental Implants</option>
                      <option>Tooth Extraction</option>
                      <option>Root Canal Treatment</option>
                      <option>Smile Design</option>
                      <option>Cosmetic Dentistry</option>
                      <option>Teeth Cleaning</option>
                      <option>General Dental Treatment</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your dental concern or preferred appointment time..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-base font-semibold shadow-lg shadow-sky-200"
                    aria-label="Submit appointment booking form"
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>

                  <p className="text-xs text-slate-400 text-center mt-4">
                    Or call us directly at{' '}
                    <a href={`tel:${PHONE}`} className="text-sky-600 font-medium hover:underline">
                      +91 94043 43961
                    </a>{' '}
                    · Mon–Sat 11 AM – 8 PM
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
