const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Nagarani-22',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gudditi-nagarani-a9b826239',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    label: 'Email',
    href: 'mailto:guditinagarani@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    )
  },
  {
    label: 'Phone',
    href: 'tel:+919390692071',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.07-1.07a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    )
  },
  {
    label: 'HackerRank',
    href: 'https://www.hackerrank.com/profile/guditinagarani',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24C10.714 24 2.25 19.114 1.608 18 .963 16.886.963 7.114 1.608 6 2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.801a.258.258 0 0 0-.516 0v10.388c0 .142.116.258.258.258.143 0 .258-.116.258-.258v-3.875h4.074v3.875c0 .142.116.258.258.258.143 0 .258-.116.258-.258V7.057a.256.256 0 0 0-.258-.258z"/>
      </svg>
    )
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/guditinagarani/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    )
  }
]

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-2col">
          {/* Left: text content */}
          <div className="hero-inner">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Open to opportunities
            </div>

            <h1 className="hero-name">
              Gudditi <span className="accent">Nagarani</span>
            </h1>

            <p className="hero-title">Software Engineer</p>

            <p className="hero-tagline">
              Test automation &amp; frontend development at{' '}
              <strong style={{ color: '#a5b4fc' }}>Trellix</strong> (Cybersecurity).
              Building reliable software in security-critical environments.
            </p>

            <div className="hero-passions">
              <div className="hero-passion-item">
                <span className="hero-passion-icon">🔍</span>
                <span>Passionate Problem Solver</span>
              </div>
              <div className="hero-passion-item">
                <span className="hero-passion-icon">🐛</span>
                <span>Debugging Enthusiast</span>
              </div>
              <div className="hero-passion-item">
                <span className="hero-passion-icon">🧪</span>
                <span>Quality-Driven Tester</span>
              </div>
              <div className="hero-passion-item">
                <span className="hero-passion-icon">⚡</span>
                <span>Clean Code Advocate</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="/Gudditi_Nagarani_Resume.pdf" download className="btn-primary">
                Download Resume
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            {/* Icon-only social links */}
            <div className="hero-socials">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') || s.href.startsWith('tel') ? '_self' : '_blank'}
                  rel="noreferrer"
                  className="social-icon-link"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

          </div>

          {/* Right: profile photo */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring">
              <img
                src="/profile.jpg"
                alt="Gudditi Nagarani"
                className="hero-photo"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div className="hero-photo-fallback">GN</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  )
}
