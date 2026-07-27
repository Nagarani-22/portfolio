import useFadeIn from '../hooks/useFadeIn'

const BULLETS = [
  {
    icon: '⚛️',
    color: 'rgba(6,182,212,0.18)',
    text: <>Built and shipped <strong>Angular/TypeScript</strong> UI features end-to-end — from component design and REST API integration to PR reviews — on the EDR front-end used by enterprise security teams.</>
  },
  {
    icon: '🏗️',
    color: 'rgba(99,102,241,0.18)',
    text: <>Developed <strong>reusable Angular components</strong> with strong TypeScript typing, following Angular best practices (lazy loading, reactive forms, RxJS observables) and resolved <strong>30+ component-level defects</strong> through structured PR cycles.</>
  },
  {
    icon: '🐛',
    color: 'rgba(249,115,22,0.18)',
    text: <>Debugged and fixed complex <strong>AG-Grid</strong> rendering failures (cell-selection, clipboard, sort/resize/pagination) across <strong>5+ security dashboards</strong> after a major library upgrade, restoring full dashboard functionality within the release window.</>
  },
  {
    icon: '🔗',
    color: 'rgba(20,184,166,0.18)',
    text: <>Integrated <strong>REST APIs</strong> into Angular components — handled authentication headers, error states, loading indicators, and data transformation — ensuring seamless communication between the EDR frontend and backend services.</>
  },
  {
    icon: '🤖',
    color: 'rgba(129,140,248,0.18)',
    text: <>Engineered a <strong>production-grade Selenium (Python) automation framework</strong> from scratch using Page Object Model, JSON config, structured logging, and HTML reporting, enabling zero-manual-setup test execution across the EDR product.</>
  },
  {
    icon: '⚡',
    color: 'rgba(251,191,36,0.18)',
    text: <>Automated <strong>250+ test cases in 45 days</strong>, cutting manual regression effort by <strong>50%</strong> and accelerating release validation cycles; authored <strong>BDD suites</strong> (pytest-bdd/Gherkin) for 5 EDR modules.</>
  },
  {
    icon: '🔍',
    color: 'rgba(74,222,128,0.18)',
    text: <>Identified and documented <strong>200+ defects</strong> across exploratory, smoke, sanity, and regression cycles; triaged all issues end-to-end in <strong>Jira</strong> and <strong>Xray</strong> and validated REST APIs via <strong>Postman</strong>.</>
  },
  {
    icon: '⚙️',
    color: 'rgba(167,139,250,0.18)',
    text: <>Configured <strong>GitHub Actions CI/CD</strong> with cross-browser and parallel test execution; rebuilt <strong>Selenium Grid</strong> with static IP for stable distributed test runs on <strong>TeamCity</strong>, reducing developer feedback loops.</>
  }
]

const TAGS = ['Angular', 'TypeScript', 'RxJS', 'AG-Grid', 'REST API', 'Python', 'Selenium', 'pytest-bdd', 'Gherkin', 'GitHub Actions', 'TeamCity', 'Jira', 'Xray', 'Postman', 'POM', 'BDD', 'CI/CD']

export default function Experience() {
  const ref = useFadeIn()

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Work Experience</span>
          <h2 className="section-title">Where I&apos;ve Worked</h2>
          <div className="section-divider" />
        </div>

        <div className="fade-in" ref={ref}>
          <div className="exp-card">
            <div className="exp-header">
              <div className="exp-company-row">
                <div className="exp-logo">TRX</div>
                <div>
                  <span className="exp-company">Trellix</span>
                  <span className="exp-location">📍 Bangalore, India</span>
                </div>
              </div>
              <div className="exp-badge-col">
                <span className="exp-badge">● Currently Working</span>
                <span className="exp-role">Software Engineer, Apprentice</span>
                <span className="exp-dates">Jul 2025 – Present</span>
              </div>
            </div>

            <hr className="exp-divider" />

            <ul className="exp-bullets">
              {BULLETS.map((b, i) => (
                <li key={i} className="exp-bullet">
                  <span className="exp-bullet-icon" style={{ background: b.color }}>
                    {b.icon}
                  </span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>

            <div className="exp-tags">
              {TAGS.map(t => (
                <span key={t} className="exp-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
