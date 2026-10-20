import type { Content } from './types'

export const es: Content = {
  nav: { about: 'Perfil', work: 'Proyectos', skills: 'Habilidades', education: 'Formación', contact: 'Contacto' },
  hero: {
    kicker: 'Ingeniero de Sistemas',
    role: 'Desarrollador backend junior',
    pitch: 'Construyo APIs y herramientas con C#, ASP.NET Core y Python, y automatizo procesos con IA. Software que ya usan profesionales de la salud.',
    available: 'Disponible · remoto o reubicación',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
  },
  about: {
    title: 'Perfil',
    body: 'Ingeniero de Sistemas enfocado en desarrollo backend con C#, ASP.NET Core y PostgreSQL, y en automatización de procesos con inteligencia artificial. Desde mayo de 2026 desarrollo y mantengo una aplicación en uso por profesionales de la salud, y construí una API REST con pruebas automatizadas. Busco mi primer rol como desarrollador backend junior.',
    stats: [
      { value: '80 %', label: 'menos tiempo por plan de rehabilitación (15 → 3 min)' },
      { value: 'En producción', label: 'app usada a diario por profesionales de la salud' },
      { value: '400+ h', label: 'de formación complementaria (.NET, Python, seguridad)' },
    ],
  },
  work: {
    title: 'Experiencia y proyectos',
    subtitle: 'Problemas reales, decisiones técnicas concretas.',
    repoLabel: 'Ver repositorio',
    projects: [
      {
        name: 'NeuroDocs',
        tagline: 'Desarrollador de software (freelance)',
        period: 'may 2026 – actualidad',
        repo: 'https://github.com/maxin7399/NeuroDocs',
        stack: ['C#', '.NET 10', 'WPF', 'Gemini API'],
        metric: { value: '15 → 3 min', label: 'por plan de rehabilitación' },
        points: [
          'Reduje en un 80 % el tiempo de elaboración de cada plan de rehabilitación; en uso por profesionales de la salud.',
          'Extracción de datos clínicos desde PDF y generación del plan final desde la plantilla institucional.',
          'Integración con la API de Gemini para clasificar funciones cognitivas, con revisión humana obligatoria.',
        ],
      },
      {
        name: 'FerreAPI',
        tagline: 'Desarrollador de software (freelance)',
        period: 'jul 2026 – actualidad',
        repo: 'https://github.com/maxin7399/FerreAPI',
        stack: ['C#', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'JWT', 'xUnit', 'Testcontainers'],
        points: [
          'API REST con facturación transaccional, cálculo de IVA y control de inventario.',
          'Concurrencia optimista que evita vender más del stock en ventas simultáneas, verificada con pruebas de integración (Testcontainers).',
          'Autenticación JWT con autorización por roles y manejo global de errores con ProblemDetails.',
        ],
      },
    ],
    otherTitle: 'Otra experiencia',
    other: [
      { role: 'Diseñador CAD · Solvo', period: 'ene 2025 – ene 2026', desc: 'Modelado 3D de viviendas en SketchUp para firmas de arquitectura.' },
      { role: 'Servicio al cliente · Ferretería El Chispazo', period: 'ene 2021 – ene 2022', desc: 'Asesoría a clientes en el proceso de compra y facturación.' },
    ],
  },
  skills: {
    title: 'Habilidades',
    groups: [
      { name: 'Lenguajes', items: ['C#', 'Python', 'SQL', 'JavaScript / TypeScript (inicial)'] },
      { name: 'Backend', items: ['ASP.NET Core', 'EF Core', 'PostgreSQL', 'APIs REST', 'FastAPI'] },
      { name: 'Pruebas', items: ['xUnit', 'Testcontainers'] },
      { name: 'IA', items: ['Integración de LLMs vía API (Gemini)', 'Diseño de prompts'] },
      { name: 'Herramientas', items: ['Git', 'GitHub', 'Docker', 'Visual Studio'] },
      { name: 'Idiomas', items: ['Español (nativo)', 'Inglés (B1)'] },
    ],
  },
  education: {
    title: 'Formación',
    items: [
      { title: 'Ingeniería de Sistemas', place: 'Institución Universitaria Americana', meta: 'Graduado' },
      { title: 'Técnico en Programación de Computadores', place: 'Institución Universitaria Americana', meta: '2021 – 2023' },
      { title: 'Diplomado en Seguridad Informática', place: 'Inst. Universitaria Americana', meta: '2026 · 80 h' },
      { title: 'Bootcamp Desarrollo Web con Python y FastAPI', place: 'KOOP Tecnológica', meta: '2024 · 240 h' },
      { title: 'Diplomado .NET', place: 'Inst. Universitaria Americana', meta: '2023 · 87 h' },
    ],
  },
  contact: {
    title: '¿Hablamos?',
    body: 'Estoy buscando mi primer rol como desarrollador backend junior. Si mi perfil encaja con tu equipo, escríbeme.',
    location: 'Barranquilla, Colombia · remoto o reubicación',
    emailCta: 'Escríbeme',
  },
  footer: 'Hecho con React + TypeScript',
}
