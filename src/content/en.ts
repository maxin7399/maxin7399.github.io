import type { Content } from './types'

export const en: Content = {
  nav: { about: 'About', work: 'Projects', skills: 'Skills', education: 'Education', contact: 'Contact' },
  hero: {
    kicker: 'Systems Engineer',
    role: 'Junior backend developer',
    pitch: 'I build APIs and tools with C#, ASP.NET Core and Python, and automate workflows with AI. Software already used by healthcare professionals.',
    available: 'Available · remote or relocation',
    ctaProjects: 'See projects',
    ctaCv: 'Download CV',
  },
  about: {
    title: 'About',
    body: 'Systems Engineer focused on backend development with C#, ASP.NET Core and PostgreSQL, and on process automation with artificial intelligence. Since May 2026 I have been building and maintaining an application used by healthcare professionals, and I built a REST API with automated tests. I am looking for my first role as a junior backend developer.',
    stats: [
      { value: '80 %', label: 'less time per rehabilitation plan (15 → 3 min)' },
      { value: 'In production', label: 'app used daily by healthcare professionals' },
      { value: '400+ h', label: 'of additional training (.NET, Python, security)' },
    ],
  },
  work: {
    title: 'Experience & projects',
    subtitle: 'Real problems, concrete technical decisions.',
    repoLabel: 'View repository',
    projects: [
      {
        name: 'NeuroDocs',
        tagline: 'Software developer (freelance)',
        period: 'May 2026 – present',
        repo: 'https://github.com/maxin7399/NeuroDocs',
        stack: ['C#', '.NET 10', 'WPF', 'Gemini API'],
        metric: { value: '15 → 3 min', label: 'per rehabilitation plan' },
        points: [
          'Cut the time to produce each rehabilitation plan by 80 %; used by healthcare professionals.',
          'Clinical data extraction from PDFs and final plan generation from the institutional template.',
          'Gemini API integration to classify cognitive functions, with mandatory human review.',
        ],
      },
      {
        name: 'FerreAPI',
        tagline: 'Inventory & invoicing',
        period: '2026',
        repo: 'https://github.com/maxin7399/FerreAPI',
        stack: ['C#', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'JWT', 'xUnit', 'Testcontainers'],
        points: [
          'REST API with transactional invoicing, VAT calculation and inventory control.',
          'Optimistic concurrency that prevents overselling stock under simultaneous sales, verified with integration tests (Testcontainers).',
          'JWT authentication with role-based authorization and global error handling via ProblemDetails.',
        ],
      },
    ],
    otherTitle: 'Other experience',
    other: [
      { role: 'CAD Designer · Solvo', period: 'Jan 2025 – Jan 2026', desc: '3D house modeling in SketchUp for architecture firms.' },
      { role: 'Customer service · Ferretería El Chispazo', period: 'Jan 2021 – Jan 2022', desc: 'Advised customers through purchasing and invoicing.' },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      { name: 'Languages', items: ['C#', 'Python', 'SQL', 'JavaScript / TypeScript (basic)'] },
      { name: 'Backend', items: ['ASP.NET Core', 'EF Core', 'PostgreSQL', 'REST APIs', 'FastAPI'] },
      { name: 'Testing', items: ['xUnit', 'Testcontainers'] },
      { name: 'AI', items: ['LLM integration via API (Gemini)', 'Prompt design'] },
      { name: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Visual Studio'] },
      { name: 'Languages spoken', items: ['Spanish (native)', 'English (B1)'] },
    ],
  },
  education: {
    title: 'Education',
    items: [
      { title: 'B.Sc. Systems Engineering', place: 'Institución Universitaria Americana', meta: 'Graduated' },
      { title: 'Computer Programming Technician', place: 'Institución Universitaria Americana', meta: '2021 – 2023' },
      { title: 'Information Security Diploma', place: 'Inst. Universitaria Americana', meta: '2026 · 80 h' },
      { title: 'Web Development Bootcamp with Python & FastAPI', place: 'KOOP Tecnológica', meta: '2024 · 240 h' },
      { title: '.NET Diploma', place: 'Inst. Universitaria Americana', meta: '2023 · 87 h' },
    ],
  },
  contact: {
    title: "Let's talk",
    body: "I'm looking for my first role as a junior backend developer. If my profile fits your team, drop me a line.",
    location: 'Barranquilla, Colombia · remote or relocation',
    emailCta: 'Email me',
  },
  footer: 'Built with React + TypeScript',
}
