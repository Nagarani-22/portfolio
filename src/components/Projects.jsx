import useFadeIn from '../hooks/useFadeIn'

const GitIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const PROJECTS = [
  {
    num: '01',
    icon: '🛒',
    title: 'E-Commerce Platform',
    tech: ['React.js', 'Redux', 'JavaScript', 'CSS3'],
    desc: [
      'Built a responsive e-commerce app with React component-driven architecture and Redux for global state management, covering product listing, cart, and multi-step checkout.',
      'Designed reusable UI components with business logic in Redux slices; deployed on Netlify with lazy loading and continuous deployment.'
    ],
    links: [
      { label: 'Live Demo', href: 'https://transcendent-crumble-00b05c.netlify.app/', icon: <LinkIcon /> }
    ]
  },
  {
    num: '02',
    icon: '⚙️',
    title: 'E-Commerce Microservices Backend',
    tech: ['Java 17', 'Spring Boot 3.2', 'Spring Cloud', 'Apache Kafka', 'Redis', 'PostgreSQL', 'MongoDB', 'Docker'],
    desc: [
      'Architected a scalable backend using 7 independent microservices with Spring Cloud Eureka for service discovery and an API Gateway with JWT validation.',
      'Implemented event-driven order/payment processing via Apache Kafka and Redis caching; integrated Prometheus + Grafana for real-time observability.'
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Nagarani-22/ecommerce-microservices', icon: <GitIcon /> }
    ]
  },
  {
    num: '03',
    icon: '🔐',
    title: 'Fraud Detection System',
    tech: ['Java 17', 'Spring Boot 3.2', 'Spring WebFlux', 'Apache Kafka', 'Redis', 'PostgreSQL', 'Spring Security', 'JWT', 'Docker'],
    desc: [
      'Built a real-time fraud detection platform implementing 5 detection rules: high-value transactions, velocity checks, geographic anomaly, unknown device, and blacklisted merchant detection.',
      'Event-driven architecture with REST API → Kafka → detection engine → PostgreSQL alerts, with Redis caching for performance and JWT authentication.'
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Nagarani-22/fraud-detection-system', icon: <GitIcon /> }
    ]
  },
  {
    num: '04',
    icon: '✈️',
    title: 'Tour & Travel Management Website',
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
    desc: [
      'Full-stack travel platform with destination browsing, package selection, and booking flow using PHP backend and MySQL for persistent data.',
      'Implemented user registration, login, and session management with real-time search filtering via dynamic JavaScript.'
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Nagarani-22/tour-and-travel-management-website', icon: <GitIcon /> }
    ]
  },
  {
    num: '05',
    icon: '📱',
    title: 'Toll Plaza QR Payment App',
    tech: ['Kotlin', 'Android', 'Firebase', 'Firestore', 'Cloud Functions', 'ZXing', 'FCM'],
    desc: [
      'Android app enabling drivers to make toll payments by scanning QR codes; supports QR generation and scanning using ZXing library.',
      'Firebase-backed with real-time payment processing, Firestore transaction history, user authentication, and push notifications for payment confirmations.'
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Nagarani-22/Toll-plaza-app', icon: <GitIcon /> }
    ]
  },
  {
    num: '06',
    icon: '👁️',
    title: 'Face Detection System',
    tech: ['Python', 'OpenCV', 'Machine Learning'],
    desc: [
      'Python-based face detection system using OpenCV for real-time image processing and face recognition.',
      'Implements computer vision techniques for detecting and processing facial features from live camera feed or image input.'
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Nagarani-22/face-detection', icon: <GitIcon /> }
    ]
  }
]

export default function Projects() {
  const ref = useFadeIn()

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Things I&apos;ve Built</h2>
          <div className="section-divider" />
        </div>

        <div className="projects-grid fade-in" ref={ref}>
          {PROJECTS.map(p => (
            <div key={p.num} className="project-card">
              <div className="project-card-top">
                <span className="project-num">{p.num}</span>
                <div className="project-icon">{p.icon}</div>
                <div className="project-title">{p.title}</div>
              </div>

              <div className="project-card-body">
                <div className="project-tech">
                  {p.tech.map(t => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
                </div>
                <ul className="project-desc-list">
                  {p.desc.map((d, i) => (
                    <li key={i} className="project-desc-item">{d}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                {p.links.map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="project-link">
                    {l.icon} {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
