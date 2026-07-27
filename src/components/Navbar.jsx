import { useState, useEffect } from 'react'

const LINKS = ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#hero" className="nav-logo" onClick={close}>GN</a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {LINKS.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={close}>{l}</a>
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
