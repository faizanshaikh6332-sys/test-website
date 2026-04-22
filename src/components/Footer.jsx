import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Doctor', href: '#doctor' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Dental Implants',
  'Full Mouth Implants',
  'Root Canal Treatment',
  'Smile Design',
  'Cosmetic Dentistry',
  'Teeth Cleaning',
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-[#0c1a40] to-[#0a2540] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-black flex items-center justify-center">
                <img src="/dr-raktade-logo.png" alt="Dr. Raktade Dental Implant Center Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>Dr. Raktade Dental Implant Center</div>
                <div className="text-sky-400 text-xs">DENTAL IMPLANT CENTER</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Expert dental implant care with a personal touch. Serving CIDCO and Chhatrapati Sambhajinagar with precision, comfort, and trust.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/PRMAXFACINDIA/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-sky-500 flex items-center justify-center transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-pink-500 flex items-center justify-center transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-500" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-500" aria-hidden="true" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Contact Info
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex gap-3 text-sm text-slate-400">
                <MapPin size={16} className="text-sky-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Shop No. 2, Shreeji Towers, Jai Bhavani Rd, Kamgar Chowk, N 2, Cidco, Chhatrapati Sambhajinagar – 431003</span>
              </li>
              <li>
                <a href="tel:+919604881999" className="flex gap-3 text-sm text-slate-400 hover:text-sky-400 transition-colors">
                  <Phone size={16} className="text-sky-400 flex-shrink-0" aria-hidden="true" />
                  +91 96048 81999
                </a>
              </li>
              <li className="flex gap-3 text-sm text-slate-400">
                <Clock size={16} className="text-sky-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Mon–Sat: 11 AM – 8 PM<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Dr. Raktade Dental Implant Center. All rights reserved. |{' '}
            <span className="text-slate-400">Best Dental Implant Clinic in Chhatrapati Sambhajinagar</span>
          </p>
          <p className="text-slate-600 text-xs">
            📍 CIDCO, Chhatrapati Sambhajinagar, Maharashtra
          </p>
        </div>

        {/* Designer credit */}
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-center gap-2">
          <span className="text-slate-600 text-xs">Website designed by <span className="text-slate-400 font-medium">Faizan Shaikh</span></span>
          <a
            href="https://wa.me/919960969658?text=Hi%20Faizan%2C%20I%20saw%20your%20work%20on%20Dr.%20Raktade%27s%20website!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Faizan Shaikh on WhatsApp"
            className="flex items-center gap-1 bg-green-600/20 hover:bg-green-500/30 text-green-400 text-xs px-2 py-1 rounded-full transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.418A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm5.313 13.688c-.219.617-1.289 1.18-1.77 1.238-.48.059-.934.238-3.152-.656-2.664-1.074-4.37-3.77-4.5-3.945-.133-.176-1.09-1.449-1.09-2.766 0-1.316.688-1.965 1.012-2.234.281-.238.613-.285.82-.285h.586c.188 0 .445-.07.695.531.258.621.875 2.148.953 2.305.078.156.129.336.027.543-.102.207-.152.336-.301.516-.152.18-.32.402-.457.539-.152.152-.312.316-.137.621.176.305.785 1.289 1.684 2.086 1.156 1.031 2.129 1.348 2.434 1.5.305.152.484.133.664-.074.18-.207.758-.887.965-1.191.207-.305.41-.254.691-.152.281.102 1.789.844 2.094.996.305.152.508.227.582.355.078.129.078.746-.14 1.363Z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
