import { useEffect, useState } from 'react'
import type { Lang } from './content/types'
import { es } from './content/es'
import { en } from './content/en'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About, Work, Skills, Education, Contact } from './components/Sections'

const LINKS = {
  github: 'https://github.com/maxin7399',
  linkedin: 'https://www.linkedin.com/in/mateo-marciglia-a050a5258/',
  email: 'marcigliamateo@gmail.com',
  cv: `${import.meta.env.BASE_URL}cv-mateo-marciglia.pdf`,
}
export type Links = typeof LINKS

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch { /* storage bloqueado */ }
  return navigator.language.startsWith('es') ? 'es' : 'en'
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = lang === 'es' ? es : en

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* ignorar */ }
  }, [lang])

  // Revelar secciones al hacer scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 },
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [lang])

  return (
    <>
      <Navbar t={t} lang={lang} onLang={setLang} />
      <main>
        <Hero t={t} links={LINKS} />
        <About t={t} />
        <Work t={t} />
        <Skills t={t} />
        <Education t={t} />
        <Contact t={t} links={LINKS} />
      </main>
      <footer className="footer">
        <span className="mono">© {new Date().getFullYear()} Mateo Marciglia</span>
        <span className="mono muted">{t.footer}</span>
      </footer>
    </>
  )
}
