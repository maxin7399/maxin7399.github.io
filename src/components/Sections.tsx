import type { ReactNode } from 'react'
import type { Content } from '../content/types'
import type { Links } from '../App'

function Section({ id, title, index, children }: { id: string; title: string; index: string; children: ReactNode }) {
  return (
    <section id={id} className="section reveal">
      <h2><span className="mono accent">{index}.</span> {title}</h2>
      {children}
    </section>
  )
}

export function About({ t }: { t: Content }) {
  return (
    <Section id="about" index="01" title={t.about.title}>
      <p className="lead">{t.about.body}</p>
      <div className="stats">
        {t.about.stats.map(s => (
          <div key={s.label} className="stat card">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Work({ t }: { t: Content }) {
  return (
    <Section id="work" index="02" title={t.work.title}>
      <p className="muted sub">{t.work.subtitle}</p>
      <div className="projects">
        {t.work.projects.map(p => (
          <article key={p.name} className="project card">
            <header>
              <div>
                <h3>{p.name}</h3>
                <p className="muted">{p.tagline}</p>
              </div>
              <span className="mono muted small">{p.period}</span>
            </header>
            {p.metric && (
              <p className="metric"><strong>{p.metric.value}</strong> <span>{p.metric.label}</span></p>
            )}
            <ul>
              {p.points.map(pt => <li key={pt}>{pt}</li>)}
            </ul>
            <div className="chips">
              {p.stack.map(s => <span key={s} className="chip mono">{s}</span>)}
            </div>
            <a className="repo mono" href={p.repo} target="_blank" rel="noreferrer">
              {t.work.repoLabel} →
            </a>
          </article>
        ))}
      </div>

      <h3 className="other-title">{t.work.otherTitle}</h3>
      <ul className="timeline">
        {t.work.other.map(o => (
          <li key={o.role}>
            <div className="tl-head"><strong>{o.role}</strong><span className="mono muted small">{o.period}</span></div>
            <p className="muted">{o.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Skills({ t }: { t: Content }) {
  return (
    <Section id="skills" index="03" title={t.skills.title}>
      <div className="skills">
        {t.skills.groups.map(g => (
          <div key={g.name} className="card skill-group">
            <h3 className="mono small accent">{g.name}</h3>
            <div className="chips">
              {g.items.map(i => <span key={i} className="chip">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Education({ t }: { t: Content }) {
  return (
    <Section id="education" index="04" title={t.education.title}>
      <ul className="timeline">
        {t.education.items.map(e => (
          <li key={e.title}>
            <div className="tl-head"><strong>{e.title}</strong><span className="mono muted small">{e.meta}</span></div>
            <p className="muted">{e.place}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Contact({ t, links }: { t: Content; links: Links }) {
  return (
    <Section id="contact" index="05" title={t.contact.title}>
      <div className="contact card">
        <p className="lead">{t.contact.body}</p>
        <p className="mono muted small">{t.contact.location}</p>
        <div className="cta">
          <a className="btn primary" href={`mailto:${links.email}`}>{t.contact.emailCta}</a>
          <a className="btn ghost" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn ghost" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="mono small"><a href={`mailto:${links.email}`}>{links.email}</a></p>
      </div>
    </Section>
  )
}
