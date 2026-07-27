import useFadeIn from '../hooks/useFadeIn'

const EDU = [
  {
    icon: '🎓',
    inst: 'RGUKT RKvalley (IIIT)',
    degree: 'B.Tech, Computer Science and Engineering',
    cgpa: '9.1 / 10',
    years: '2021 – 2025',
    loc: 'Kadapa, Andhra Pradesh'
  },
  {
    icon: '📚',
    inst: 'RGUKT RKvalley (IIIT)',
    degree: 'Intermediate (MBI PC)',
    cgpa: '9.83 / 10',
    years: '2019 – 2021',
    loc: 'Kadapa, Andhra Pradesh'
  },
  {
    icon: '🏫',
    inst: 'A.P. Model School, Annamaiah District',
    degree: 'SSC (10th Grade)',
    cgpa: '10 / 10',
    years: '2019',
    loc: 'Andhra Pradesh'
  }
]

export default function Education() {
  const ref = useFadeIn()

  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <div className="section-divider" />
        </div>

        <div className="edu-timeline fade-in" ref={ref}>
          {EDU.map((e, i) => (
            <div key={i} className="edu-item">
              <div className="edu-dot">{e.icon}</div>
              <div className="edu-content">
                <div className="edu-inst">{e.inst}</div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-meta">
                  <span className="edu-meta-item">🏆 CGPA: <span className="val">{e.cgpa}</span></span>
                  <span className="edu-meta-item">📅 <span className="val">{e.years}</span></span>
                  <span className="edu-meta-item">📍 {e.loc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
