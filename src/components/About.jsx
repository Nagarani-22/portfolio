import useFadeIn from '../hooks/useFadeIn'

const HIGHLIGHTS = [
  {
    icon: '🔒',
    title: 'Cybersecurity Domain',
    desc: 'Working on EDR (Endpoint Detection & Response) product at Trellix, a leading cybersecurity company.'
  },
  {
    icon: '🤖',
    title: 'Test Automation Expert',
    desc: 'Built production-grade Selenium (Python) frameworks with POM, BDD/Gherkin, and CI/CD integration.'
  },
  {
    icon: '⚛️',
    title: 'Frontend Developer',
    desc: 'Angular/TypeScript UI development with AG-Grid, component architecture, and REST API integration.'
  },
  {
    icon: '🎓',
    title: 'Strong Academic Foundation',
    desc: 'B.Tech CSE, CGPA 9.1/10, GATE CSE Qualified, published research in cloud computing.'
  }
]

export default function About() {
  const ref = useFadeIn()

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider" />
        </div>

        <div className="about-grid fade-in" ref={ref}>
          <div className="about-text">
            <p>
              I&apos;m a <strong>Software Engineer</strong> with 1 year of industry experience at{' '}
              <strong>Trellix</strong>, a leading <strong>cybersecurity company</strong>, contributing
              across both test automation and frontend development on the{' '}
              <strong>Endpoint Detection and Response (EDR)</strong> product.
            </p>
            <p>
              Passionate about building reliable, scalable software in security-critical environments,
              with hands-on expertise in <strong>Python-based test automation</strong>,{' '}
              <strong>Angular/TypeScript frontend development</strong>, and CI/CD-integrated testing
              workflows.
            </p>
            <p>
              I thrive at the intersection of quality engineering and frontend development — ensuring
              software not only works correctly but is also robust enough to meet the standards of
              security-sensitive products. Seeking to leverage a cross-functional engineering
              background to deliver high-quality software in dynamic, impact-driven teams.
            </p>
          </div>

          <div className="about-highlights">
            {HIGHLIGHTS.map(h => (
              <div key={h.title} className="highlight-card">
                <span className="highlight-icon">{h.icon}</span>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
