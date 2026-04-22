import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Briefcase, Building2, Star, Phone, Mail, MapPin } from 'lucide-react'

const education = [
  { year: '2007', degree: 'BDS', college: 'C.S.M.S.S Dental College, Aurangabad' },
  { year: '2010', degree: 'MDS (OMFS)', college: "K.L.E's Institute of Dental Sciences, Bangalore" },
]

const experience = [
  'Senior Resident – St. Martha\'s Hospital, Bangalore',
  'Junior Resident – Kidwai Oncology Institute & NIMHANS, Bangalore',
  'Senior Lecturer – PDU Dental College, Solapur',
  'Assistant Professor – Govt. Dental College, Chh. Sambhajinagar',
  'Associate Professor – Govt. Dental College, Chh. Sambhajinagar',
  'Associate Professor – MIMDSR, Latur',
  'Consultant Maxillofacial Surgeon at 15+ Multispeciality Hospitals',
]

const highlights = [
  { icon: Award, label: '1500+', sub: 'Implants Placed' },
  { icon: Briefcase, label: '15+', sub: 'Years Experience' },
  { icon: Building2, label: '15+', sub: 'Hospitals' },
  { icon: Star, label: 'MDS', sub: 'Oral & Max. Surgery' },
]

export default function Doctor() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="doctor" ref={ref} className="section-pad bg-gradient-to-br from-sky-50 via-white to-teal-50" aria-labelledby="doctor-heading">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-500" aria-hidden="true" />
            Meet Your Doctor
          </div>
          <h2
            id="doctor-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-800"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Expert Care You Can{' '}
            <span className="gradient-text">Trust</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: Photo + Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            {/* Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-100">
              <img
                src="/doctor.jpg"
                alt="Dr. Prashant Raktade - Oral & Maxillofacial Surgeon, Advanced Implantology Specialist at Dr. Raktade Dental Implant Center, Chhatrapati Sambhajinagar"
                className="w-full h-[500px] lg:h-[560px] object-cover object-top"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=80'
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" aria-hidden="true" />

              {/* Name tag */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="glass-card rounded-2xl p-4">
                  <div className="font-bold text-slate-800 text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Dr. Prashant Raktade
                  </div>
                  <div className="text-sky-600 text-sm font-medium">Oral & Maxillofacial Surgeon · Implantologist</div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                    <span className="text-slate-500 text-xs">Currently Accepting Patients</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-5 -right-5 glass-card rounded-2xl p-4 shadow-xl border border-sky-100 text-center"
            >
              <div className="text-2xl font-black text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>1500+</div>
              <div className="text-xs text-slate-500 font-medium">Implants</div>
              <div className="text-xs text-sky-600 font-semibold">Placed</div>
            </motion.div>

            {/* Contact strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-5 bg-white rounded-2xl border border-slate-100 shadow-md p-4 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="tel:+919604881999"
                className="flex items-center gap-3 flex-1 group hover:text-sky-600 transition-colors"
                aria-label="Call Dr. Prashant Raktade"
              >
                <span className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-100 transition-colors flex-shrink-0">
                  <Phone size={16} className="text-sky-600" />
                </span>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Line</div>
                  <div className="text-sm font-semibold text-slate-700 group-hover:text-sky-600">+91 96048 81999</div>
                </div>
              </a>
              <div className="w-px bg-slate-100 hidden sm:block" aria-hidden="true" />
              <a
                href="mailto:prashantraktade@gmail.com"
                className="flex items-center gap-3 flex-1 group hover:text-sky-600 transition-colors"
                aria-label="Email Dr. Prashant Raktade"
              >
                <span className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-100 transition-colors flex-shrink-0">
                  <Mail size={16} className="text-sky-600" />
                </span>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email</div>
                  <div className="text-sm font-semibold text-slate-700 group-hover:text-sky-600 truncate">prashantraktade@gmail.com</div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="space-y-7"
          >
            {/* Name & title */}
            <div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Dr. Prashant Raktade
                <span className="block text-sky-600 text-lg font-semibold mt-1">
                  Oral & Maxillofacial Surgeon · Advanced Implantology Specialist
                </span>
              </h3>
              <div className="flex items-center gap-2 mt-2 text-slate-500 text-sm">
                <MapPin size={14} className="text-sky-500 flex-shrink-0" />
                Chhatrapati Sambhajinagar, Maharashtra
              </div>
            </div>

            {/* Summary */}
            <p className="text-slate-600 leading-relaxed text-sm">
              Dr. Prashant Raktade is a distinguished academician, clinician, and healthcare entrepreneur with extensive
              experience in dental education, advanced clinical dentistry, and academic leadership. He has served as
              Associate Professor, Assistant Professor, and Professor at reputed government and private dental institutions.
              His focus areas include <strong>implantology, full mouth rehabilitation, advanced prosthodontics</strong>, and
              evidence-based clinical practice.
            </p>

            {/* Stat highlights */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => {
                const Icon = h.icon
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.45 }}
                    className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Icon size={17} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>{h.label}</div>
                      <div className="text-slate-500 text-xs">{h.sub}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Education */}
            <div>
              <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <GraduationCap size={16} className="text-sky-500" />
                Education
              </h4>
              <div className="space-y-2">
                {education.map((e) => (
                  <div key={e.degree} className="flex items-start gap-3 bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                    <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-1 rounded-lg flex-shrink-0 mt-0.5">{e.year}</span>
                    <div>
                      <div className="font-semibold text-slate-800 text-sm">{e.degree}</div>
                      <div className="text-slate-400 text-xs">{e.college}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <Briefcase size={16} className="text-sky-500" />
                Experience
              </h4>
              <ul className="space-y-2">
                {experience.map((exp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-2 text-slate-600 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" aria-hidden="true" />
                    {exp}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Founder note */}
            <div className="bg-gradient-to-r from-sky-50 to-teal-50 rounded-2xl p-4 border border-sky-100">
              <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">Founder</div>
              <div className="text-slate-700 text-sm font-medium leading-relaxed">
                Dr. Raktade Dental Implant Center · Dr. Raktade Dental Clinic · Curls & Crowns Aesthetics Studio
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              id="doctor-book-btn"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold shadow-lg shadow-sky-200"
              aria-label="Book a consultation with Dr. Prashant Raktade"
            >
              <span>Book a Consultation</span>
            </a>
          </motion.div>

        </div>

        {/* ── Our Team ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" aria-hidden="true" />
              Our Team
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-800"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Meet Our{' '}
              <span className="gradient-text">Expert Doctors</span>
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
              A dedicated team of specialists committed to delivering the highest standard of dental care.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: 'Dr. Snehal Prashant Raktade',
                degree: 'MDS Prosthodontist',
                specialty: 'Crowns & Bridge',
                avatar: 'SR',
                color: 'from-sky-500 to-blue-600',
                photo: '/team-snehal.jpg',
              },
              {
                name: 'Dr. Shubhangi Shivhar Gajmal',
                degree: 'BDS',
                specialty: 'Root Canal Specialist',
                avatar: 'SG',
                color: 'from-teal-500 to-emerald-600',
                photo: '/team-shubhangi.jpg',
              },
              {
                name: 'Dr. Aditi Anjinkya Ghule',
                degree: 'BDS',
                specialty: 'General Dentistry',
                avatar: 'AG',
                color: 'from-violet-500 to-purple-600',
                photo: '/team-aditi.jpg',
              },
            ].map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.55 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Photo / Avatar area */}
                <div className={`relative aspect-[3/4] bg-gradient-to-br ${doc.color} flex items-center justify-center overflow-hidden`}>
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  {/* Fallback avatar shown behind image — visible if image fails */}
                  <div className="relative z-0 text-white font-black text-4xl opacity-30 select-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {doc.avatar}
                  </div>
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" aria-hidden="true" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-bold text-slate-800 text-base leading-snug mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {doc.name}
                  </h3>
                  <div className="text-sky-600 text-xs font-semibold mb-0.5">{doc.degree}</div>
                  <div className="text-slate-500 text-sm">{doc.specialty}</div>
                  <div className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${doc.color} group-hover:w-full transition-all duration-500`} aria-hidden="true" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
