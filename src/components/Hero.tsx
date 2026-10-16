import { useEffect, useState } from 'react'
import type { Content } from '../content/types'
import type { Links } from '../App'

const COMMAND = 'dotnet run --project MateoMarciglia'

function useTyped(text: string) {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [n, setN] = useState(reduced ? text.length : 0)
  useEffect(() => {
    if (n >= text.length) return
    const id = setTimeout(() => setN(n + 1), 45)
    return () => clearTimeout(id)
  }, [n, text])
  return { typed: text.slice(0, n), done: n >= text.length }
}

export function Hero({ t, links }: { t: Content; links: Links }) {
  const { typed, done } = useTyped(COMMAND)

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <p className="badge mono"><span className="dot" />{t.hero.available}</p>
      <p className="kicker mono">{t.hero.kicker}</p>
      <h1>Mateo Marciglia</h1>
      <p className="role">{t.hero.role} <span className="muted">· C# / ASP.NET Core · Python · {t.skills.groups[3].name}</span></p>
      <p className="pitch">{t.hero.pitch}</p>

      <div className="terminal mono" aria-label={COMMAND}>
        <div className="term-bar"><i /><i /><i /></div>
        <div className="term-body">
          <span className="ok">❯</span> {typed}<span className="caret" />
          {done && (
            <div className="term-out">
              <div><span className="muted">info:</span> Backend.Api[0] <span className="ok">listening</span></div>
              <div><span className="muted">info:</span> Status: <span className="accent">open_to_work</span> = true</div>
            </div>
          )}
        </div>
      </div>

      <div className="cta">
        <a className="btn primary" href="#work">{t.hero.ctaProjects}</a>
        <a className="btn" href={links.cv} download>{t.hero.ctaCv} ↓</a>
        <a className="btn ghost" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn ghost" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}
