import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Doctor', href: '#doctor' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-sky-100/50'
        : 'bg-transparent'
        }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo — Dr. Raktade + Curls & Crowns */}
          <div className="flex items-center gap-3">
            {/* Brand 1: Dr. Raktade */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex items-center gap-2.5 group"
              aria-label="Dr. Raktade Dental Implant Center - Home"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img src="/dr-raktade-logo.png" alt="Dr. Raktade Logo" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <div className={`font-bold text-sm lg:text-base leading-tight transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-white'}`}
                  style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Dr. Raktade
                </div>
                <div className={`text-xs font-medium transition-colors duration-300 ${scrolled ? 'text-sky-600' : 'text-sky-300'}`}>
                  Dental Implant Center
                </div>
              </div>
            </a>

            {/* Divider */}
            <div className={`hidden sm:block w-px h-9 mx-1 ${scrolled ? 'bg-slate-200' : 'bg-white/25'}`} aria-hidden="true" />

            {/* Brand 2: Curls & Crowns */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex items-center gap-2.5 group"
              aria-label="Curls & Crowns Aesthetic Dental & Hair Transplant Studio"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 bg-[#f5ede7]">
                <img src="/curls-crowns-logo.png" alt="Curls & Crowns Logo" className="w-full h-full object-contain p-0.5" />
              </div>
              <div className="hidden sm:block">
                <div className={`font-bold text-sm lg:text-base leading-tight transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-white'}`}
                  style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Curls &amp; Crowns
                </div>
                <div className={`text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${scrolled ? 'text-amber-600' : 'text-amber-300'}`}>
                  Aesthetic Dental &amp; Hair Studio
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className={`nav-link text-sm font-medium transition-colors duration-300 pb-0.5 ${scrolled ? 'text-slate-700 hover:text-sky-600' : 'text-white/90 hover:text-white'
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919604881999"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-slate-600 hover:text-sky-600' : 'text-white/80 hover:text-white'
                }`}
              aria-label="Call the clinic"
            >
              <Phone size={15} />
            </a>
            <a
              href="#contact"
              id="navbar-book-btn"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-sky-200"
              aria-label="Book an appointment"
            >
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
            }`}
          aria-hidden={!isOpen}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 mt-2 border border-slate-100">
            <ul className="space-y-1" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="block px-4 py-2.5 text-slate-700 font-medium rounded-xl hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:+919604881999"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-sky-200 text-sky-600 font-semibold text-sm"
                aria-label="Call Now"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href="#contact"
                id="mobile-book-btn"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="btn-primary py-2.5 rounded-xl text-sm font-semibold text-center"
                aria-label="Book Appointment"
              >
                <span>Book Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
