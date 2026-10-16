export type Lang = 'es' | 'en'

export interface Project {
  name: string
  tagline: string
  period: string
  repo: string
  stack: string[]
  metric?: { value: string; label: string }
  points: string[]
}

export interface Content {
  nav: { about: string; work: string; skills: string; education: string; contact: string }
  hero: {
    kicker: string
    role: string
    pitch: string
    available: string
    ctaProjects: string
    ctaCv: string
  }
  about: { title: string; body: string; stats: { value: string; label: string }[] }
  work: { title: string; subtitle: string; repoLabel: string; projects: Project[]; otherTitle: string; other: { role: string; period: string; desc: string }[] }
  skills: { title: string; groups: { name: string; items: string[] }[] }
  education: { title: string; items: { title: string; place: string; meta: string }[] }
  contact: { title: string; body: string; location: string; emailCta: string }
  footer: string
}
