import useFadeIn from '../hooks/useFadeIn'

const SKILL_GROUPS = [
  {
    title: 'Languages',
    tags: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML5', 'CSS3', 'PHP']
  },
  {
    title: 'Frontend',
    tags: ['Angular', 'React.js', 'Redux', 'Bootstrap', 'AG-Grid']
  },
  {
    title: 'Backend & Database',
    tags: ['Node.js', 'MySQL', 'MongoDB', 'REST APIs', 'Microservices', 'PostgreSQL']
  },
  {
    title: 'Test Automation',
    tags: ['Selenium WebDriver', 'pytest-bdd', 'Gherkin / BDD', 'Selenium Grid', 'POM', 'Cross-Browser Testing', 'Parallel Execution', 'Playwright']
  },
  {
    title: 'Testing Types',
    tags: ['UI Testing', 'Regression', 'Functional', 'Smoke', 'Sanity', 'API Testing', 'Alert Validation', 'Exploratory']
  },
  {
    title: 'CI/CD & Tools',
    tags: ['Git', 'GitHub', 'GitHub Actions', 'TeamCity', 'Jira', 'Xray', 'Postman', 'Confluence', 'VS Code']
  },
  {
    title: 'Core CS',
    tags: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks']
  },
  {
    title: 'AI & LLM',
    tags: ['Claude (Anthropic)', 'GitHub Copilot', 'Prompt Engineering', 'LLMs', 'RAG']
  },
  {
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
              <div className="skill-group-title">{g.title}</div>
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
