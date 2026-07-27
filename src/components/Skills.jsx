import useFadeIn from '../hooks/useFadeIn'

// devicon class = rendered as <i> element; emoji string = rendered as text
const SKILL_ICONS = {
  // Languages
  'JavaScript (ES6+)': { type: 'devicon', cls: 'devicon-javascript-plain colored' },
  'TypeScript':        { type: 'devicon', cls: 'devicon-typescript-plain colored' },
  'Python':            { type: 'devicon', cls: 'devicon-python-plain colored' },
  'Java':              { type: 'devicon', cls: 'devicon-java-plain colored' },
  'SQL':               { type: 'devicon', cls: 'devicon-azuresqldatabase-plain colored' },
  'HTML5':             { type: 'devicon', cls: 'devicon-html5-plain colored' },
  'CSS3':              { type: 'devicon', cls: 'devicon-css3-plain colored' },
  'PHP':               { type: 'devicon', cls: 'devicon-php-plain colored' },
  // Frontend
  'Angular':           { type: 'devicon', cls: 'devicon-angularjs-plain colored' },
  'React.js':          { type: 'devicon', cls: 'devicon-react-original colored' },
  'Redux':             { type: 'devicon', cls: 'devicon-redux-original colored' },
  'Bootstrap':         { type: 'devicon', cls: 'devicon-bootstrap-plain colored' },
  'AG-Grid':           { type: 'emoji', icon: '📊' },
  // Backend & Database
  'Node.js':           { type: 'devicon', cls: 'devicon-nodejs-plain colored' },
  'MySQL':             { type: 'devicon', cls: 'devicon-mysql-plain colored' },
  'MongoDB':           { type: 'devicon', cls: 'devicon-mongodb-plain colored' },
  'REST APIs':         { type: 'emoji', icon: '🔗' },
  'Microservices':     { type: 'emoji', icon: '🔧' },
  'PostgreSQL':        { type: 'devicon', cls: 'devicon-postgresql-plain colored' },
  // Test Automation
  'Selenium WebDriver':    { type: 'devicon', cls: 'devicon-selenium-original colored' },
  'pytest-bdd':            { type: 'devicon', cls: 'devicon-pytest-plain colored' },
  'Gherkin / BDD':         { type: 'emoji', icon: '🥒' },
  'Selenium Grid':         { type: 'devicon', cls: 'devicon-selenium-original colored' },
  'POM':                   { type: 'emoji', icon: '📐' },
  'Cross-Browser Testing': { type: 'emoji', icon: '🌐' },
  'Parallel Execution':    { type: 'emoji', icon: '⚡' },
  'Playwright':            { type: 'devicon', cls: 'devicon-playwright-plain colored' },
  // Testing Types
  'UI Testing':        { type: 'emoji', icon: '🖱️' },
  'Regression':        { type: 'emoji', icon: '🔁' },
  'Functional':        { type: 'emoji', icon: '⚙️' },
  'Smoke':             { type: 'emoji', icon: '💨' },
  'Sanity':            { type: 'emoji', icon: '✔️' },
  'API Testing':       { type: 'emoji', icon: '🔌' },
  'Alert Validation':  { type: 'emoji', icon: '🔔' },
  'Exploratory':       { type: 'emoji', icon: '🔭' },
  // CI/CD & Tools
  'Git':               { type: 'devicon', cls: 'devicon-git-plain colored' },
  'GitHub':            { type: 'devicon', cls: 'devicon-github-original colored' },
  'GitHub Actions':    { type: 'devicon', cls: 'devicon-githubactions-plain colored' },
  'TeamCity':          { type: 'emoji', icon: '🏗️' },
  'Jira':              { type: 'devicon', cls: 'devicon-jira-plain colored' },
  'Xray':              { type: 'emoji', icon: '🔍' },
  'Postman':           { type: 'devicon', cls: 'devicon-postman-plain colored' },
  'Confluence':        { type: 'devicon', cls: 'devicon-confluence-plain colored' },
  'VS Code':           { type: 'devicon', cls: 'devicon-vscode-plain colored' },
  // Core CS
  'DSA':               { type: 'emoji', icon: '🧮' },
  'OOP':               { type: 'emoji', icon: '📦' },
  'DBMS':              { type: 'emoji', icon: '🗄️' },
  'Operating Systems': { type: 'emoji', icon: '🖥️' },
  'Computer Networks': { type: 'emoji', icon: '🌐' },
  // AI & LLM
  'Claude (Anthropic)':   { type: 'emoji', icon: '✨' },
  'GitHub Copilot':       { type: 'emoji', icon: '🤖' },
  'Prompt Engineering':   { type: 'emoji', icon: '📝' },
  'LLMs':                 { type: 'emoji', icon: '🧠' },
  'RAG':                  { type: 'emoji', icon: '🔗' },
  // Methodologies
  'Agile':                    { type: 'emoji', icon: '🔄' },
  'Scrum':                    { type: 'emoji', icon: '🏃' },
  'SDLC':                     { type: 'emoji', icon: '♻️' },
  'Test Planning':            { type: 'emoji', icon: '📋' },
  'Quality Assurance (QA)':  { type: 'emoji', icon: '✅' },
}

function SkillIcon({ name }) {
  const entry = SKILL_ICONS[name]
  if (!entry) return null
  if (entry.type === 'devicon') {
    return <i className={`${entry.cls} skill-tech-icon`} />
  }
  return <span className="skill-tech-icon skill-tech-emoji">{entry.icon}</span>
}

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
                  <span key={t} className="skill-tag" data-tip={t}>
                    <SkillIcon name={t} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
