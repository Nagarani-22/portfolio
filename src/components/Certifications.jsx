import useFadeIn from '../hooks/useFadeIn'

const CERTS = [
  {
    icon: '📄',
    title: 'Research Publication',
    desc: (
      <>
        <strong>"Optimizing Cloud Load Balancing with PSO on XEN"</strong> — ZKG International
        Journal (ISSN: 2366-1313), Vol IX, Issue II, July 2024.
        UGC Approved &amp; Web of Science Indexed. Impact Factor: <strong>5.3</strong>.
      </>
    )
  },
  {
    icon: '🏆',
    title: 'GATE CSE Qualified',
    desc: 'Cleared the national-level Graduate Aptitude Test in Engineering covering algorithms, data structures, databases, and core computer science subjects.'
  },
  {
    icon: '💻',
    title: 'Problem Solving — HackerRank & LeetCode',
    desc: (
      <>
        Qualified HackerRank&apos;s{' '}
        <a href="https://www.hackerrank.com/profile/guditinagarani" target="_blank" rel="noreferrer">
          Problem Solving (Basic)
        </a>{' '}
        assessment (Aug 2024) covering data structures, algorithms, sorting, and recursion;
        actively solving{' '}
        <a href="https://leetcode.com/u/guditinagarani/" target="_blank" rel="noreferrer">
          LeetCode
        </a>{' '}
        problems across arrays, strings, linked lists, trees, and dynamic programming.
      </>
    )
  },
  {
    icon: '📗',
    title: 'Functional Programming with JavaScript ES6+',
    desc: 'LinkedIn Learning (2025) — Completed structured course covering pure functions, immutability, higher-order functions, and functional patterns in modern JavaScript.'
  },
  {
    icon: '🤖',
    title: 'AICTE PRAGYA SHAL Internship — AI/ML',
    desc: 'AI/ML internship covering the end-to-end machine learning workflow through the Helmet Detection System project built using Python and OpenCV.'
  }
]

export default function Certifications() {
  const ref = useFadeIn()

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Certifications &amp; Achievements</span>
          <h2 className="section-title">Recognition & Learning</h2>
          <div className="section-divider" />
        </div>

        <div className="cert-grid fade-in" ref={ref}>
          {CERTS.map((c, i) => (
            <div key={i} className="cert-card">
              <span className="cert-icon">{c.icon}</span>
              <div>
                <div className="cert-title">{c.title}</div>
                <div className="cert-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
