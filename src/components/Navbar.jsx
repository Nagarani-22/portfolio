import { useState, useEffect } from 'react'

const LINKS = ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map(l => document.getElementById(l.toLowerCase())).filter(Boolean)
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#hero" className="nav-logo" onClick={close}>Gudditi Nagarani</a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {LINKS.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={close}
                className={active === l.toLowerCase() ? 'nav-active' : ''}
              >{l}</a>
            </li>
          ))}
          <li>
            <a
              href="/Gudditi_Nagarani_Resume.pdf"
              download
              className="nav-resume-btn"
              onClick={close}
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 998 }}
          onClick={close}
        />
      )}
    </nav>
  )
}
