import useFadeIn from '../hooks/useFadeIn'

const BULLETS = [
  {
    icon: '🤖',
    color: 'rgba(129,140,248,0.18)',
    text: <>Engineered a <strong>production-grade Selenium (Python) automation framework</strong> from scratch using Page Object Model, JSON configuration, structured logging, HTML reporting, and rerun-on-failure, enabling zero-manual-setup test execution across the EDR product.</>
  },
  {
    icon: '⚡',
    color: 'rgba(251,191,36,0.18)',
    text: <>Automated <strong>250+ test cases in 45 days</strong>, cutting manual regression effort by <strong>50%</strong> and accelerating release validation cycles across the product.</>
  },
  {
    icon: '⚛️',
    color: 'rgba(6,182,212,0.18)',
    text: <>Developed <strong>Angular/TypeScript</strong> UI features and resolved <strong>30+ component-level defects</strong> on the EDR front-end, delivering enhancements through structured PR and code-review cycles.</>
  },
  {
    icon: '🐛',
    color: 'rgba(249,115,22,0.18)',
    text: <>Debugged and fixed <strong>AG-Grid</strong> configuration failures (cell-selection, clipboard, sort/resize/pagination) across <strong>5+ dashboards</strong> after a major library upgrade, restoring full functionality within the release window.</>
  },
  {
    icon: '🔍',
    color: 'rgba(74,222,128,0.18)',
    text: <>Identified and documented <strong>200+ defects</strong> through exploratory, smoke, sanity, and regression testing; triaged and tracked all issues end-to-end in <strong>Jira</strong> and <strong>Xray</strong>.</>
  },
  {
    icon: '⚙️',
    color: 'rgba(167,139,250,0.18)',
    text: <>Configured <strong>GitHub Actions CI/CD</strong> with cross-browser and parallel test execution, reducing developer feedback time; rebuilt <strong>Selenium Grid</strong> with static IP for stable distributed test runs on <strong>TeamCity</strong>.</>
  },
  {
    icon: '📝',
    color: 'rgba(251,113,133,0.18)',
    text: <>Authored <strong>BDD test suites</strong> in Python (pytest-bdd/Gherkin) for <strong>5 EDR product modules</strong> (Collection, IOC Detection Rules, Historical Search, Monitoring, Device Search) and validated REST API responses using <strong>Postman</strong>.</>
  }
]

const TAGS = ['Python', 'Selenium', 'pytest-bdd', 'Gherkin', 'Angular', 'TypeScript', 'AG-Grid', 'GitHub Actions', 'TeamCity', 'Jira', 'Xray', 'Postman', 'POM', 'BDD', 'CI/CD']

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
