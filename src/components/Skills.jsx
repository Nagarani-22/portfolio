import useFadeIn from '../hooks/useFadeIn'

const SKILL_GROUPS = [
  {
    icon: '💻',
    color: 'rgba(129,140,248,0.2)',
    title: 'Languages',
    tags: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML5', 'CSS3', 'PHP']
  },
  {
    icon: '⚛️',
    color: 'rgba(6,182,212,0.2)',
    title: 'Frontend',
    tags: ['Angular', 'React.js', 'Redux', 'Bootstrap', 'AG-Grid']
  },
  {
    icon: '🗄️',
    color: 'rgba(16,185,129,0.2)',
    title: 'Backend & Database',
    tags: ['Node.js', 'MySQL', 'MongoDB', 'REST APIs', 'Microservices', 'PostgreSQL']
  },
  {
    icon: '🤖',
    color: 'rgba(251,191,36,0.2)',
    title: 'Test Automation',
    tags: ['Selenium WebDriver', 'pytest-bdd', 'Gherkin / BDD', 'Selenium Grid', 'POM', 'Cross-Browser Testing', 'Parallel Execution', 'Playwright']
  },
  {
    icon: '🧪',
    color: 'rgba(249,115,22,0.2)',
    title: 'Testing Types',
    tags: ['UI Testing', 'Regression', 'Functional', 'Smoke', 'Sanity', 'API Testing', 'Alert Validation', 'Exploratory']
  },
  {
    icon: '⚙️',
    color: 'rgba(167,139,250,0.2)',
    title: 'CI/CD & Tools',
    tags: ['Git', 'GitHub', 'GitHub Actions', 'TeamCity', 'Jira', 'Xray', 'Postman', 'Confluence', 'VS Code']
  },
  {
    icon: '🧠',
    color: 'rgba(236,72,153,0.2)',
    title: 'Core CS',
    tags: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks']
  },
  {
    icon: '✨',
    color: 'rgba(34,211,238,0.2)',
    title: 'AI & LLM',
    tags: ['Claude (Anthropic)', 'GitHub Copilot', 'Prompt Engineering', 'LLMs', 'RAG']
  },
  {
    icon: '🔄',
    color: 'rgba(74,222,128,0.2)',
    title: 'Methodologies',
    tags: ['Agile', 'Scrum', 'SDLC', 'Test Planning', 'Quality Assurance (QA)']
  }
]

export default function Skills() {
  const ref = useFadeIn()

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">What I Work With</h2>
          <div className="section-divider" />
        </div>

        <div className="skills-grid fade-in" ref={ref}>
          {SKILL_GROUPS.map(g => (
            <div key={g.title} className="skill-group">
              <div className="skill-group-title">
                <span className="skill-group-icon" style={{ background: g.color }}>{g.icon}</span>
                {g.title}
              </div>
              <div className="skill-tags">
                {g.tags.map(t => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
