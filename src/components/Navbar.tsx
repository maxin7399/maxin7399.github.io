import type { Content, Lang } from '../content/types'

interface Props { t: Content; lang: Lang; onLang: (l: Lang) => void }

export function Navbar({ t, lang, onLang }: Props) {
  const items = [
    ['about', t.nav.about],
    ['work', t.nav.work],
    ['skills', t.nav.skills],
    ['education', t.nav.education],
    ['contact', t.nav.contact],
  ] as const

  return (
    <header className="nav">
      <a href="#top" className="logo mono" aria-label="Inicio">
        <span className="accent">~/</span>mateo
      </a>
      <nav className="nav-links">
        {items.map(([id, label]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </nav>
      <div className="lang mono" role="group" aria-label="Idioma / Language">
        {(['es', 'en'] as const).map(l => (
          <button key={l} className={l === lang ? 'active' : ''} aria-pressed={l === lang} onClick={() => onLang(l)}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  )
}
