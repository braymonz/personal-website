export const profile = {
  name: 'Brayan Monge Méndez',
  role: 'Software Engineer',
  location: 'San Ramón, Alajuela — Costa Rica',
  tagline:
    'I build polished, reliable software at the intersection of cloud, full-stack, and DevOps.',
  intro:
    'Software Engineer with 5+ years delivering enterprise solutions for multinational organizations across software development, cloud infrastructure, enterprise systems, and DevOps — with a focus on engineering excellence.',
  email: 'contact@braymonz.com',
  website: 'https://www.braymonz.com',
  websiteLabel: 'braymonz.com',
  github: 'https://github.com/braymonz',
  githubLabel: 'github.com/braymonz',
  linkedin: 'https://linkedin.com/in/braymonz',
  linkedinLabel: 'linkedin.com/in/braymonz',
  blog: 'https://medium.com/@braymonz',
  blogLabel: 'medium.com/@braymonz',
}

export type Experience = {
  company: string
  companyUrl?: string
  role: string
  period: string
  summary: string
  stack: string[]
}

export const experiences: Experience[] = [
  {
    company: 'P&G',
    companyUrl: 'https://us.pg.com/',
    role: 'Software Engineer',
    period: '2024 — Present',
    summary:
      'Building enterprise platforms on Google Cloud — Python APIs, ETL pipelines, and full-stack web apps with automated CI/CD and AI-integrated solutions.',
    stack: ['Python', 'Google Cloud', 'CI/CD', 'DevOps', 'React', 'Node.js', 'AI'],
  },
  {
    company: 'Accenture',
    companyUrl: 'https://www.accenture.com/',
    role: 'Web Developer',
    period: '2021 — 2024',
    summary:
      'Delivered scalable frontend and backend solutions in Adobe Experience Manager for Caterpillar’s global corporate sites.',
    stack: ['AEM', 'Java', 'React', 'Node.js'],
  },
  {
    company: '3M',
    companyUrl: 'https://www.3m.com/',
    role: 'Email Developer',
    period: '2021',
    summary:
      'Designed responsive HTML emails and interactive landing pages for global marketing campaigns.',
    stack: ['JavaScript', 'HTML', 'CSS', 'Eloqua'],
  },
]

export type Project = {
  name: string
  url?: string
  repoUrl?: string
  tagline: string
  description: string
  stack: string[]
  role?: string
}

export const projects: Project[] = [
  {
    name: 'Brewfinder',
    url: 'https://www.brewfinder.app/',
    repoUrl: 'https://github.com/braymonz/brewfinder',
    role: 'Creator',
    tagline: 'Discover, save, and install Homebrew packages with ease.',
    description:
      'A modern web app for searching Homebrew formulae and casks, curating reusable package lists, and generating ready-to-run install scripts — built to make spinning up a new macOS environment effortless.',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Auth.js',
      'MongoDB',
      'Redis',
    ],
  },
]

export type Writing = {
  title: string
  url: string
  date?: string
  excerpt: string
  topics?: string[]
  publication?: string
}

export const writingsIntro =
  'I write to think out loud — sharing articles about cloud, full-stack, and DevOps, and giving back to the community that shaped my craft.'

export const writings: Writing[] = [
  {
    publication: 'Medium',
    title: 'My blog',
    url: 'https://medium.com/@braymonz',
    excerpt:
      'Articles and notes on software engineering, cloud infrastructure, AI-assisted workflows, and the craft of building reliable systems.',
    topics: [
      'Software Engineering',
      'Cloud & DevOps',
      'AI Workflows',
      'Developer Productivity',
    ],
  },
]

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: 'Languages & Frameworks',
    skills: [
      'TypeScript',
      'JavaScript',
      'Python',
      'React',
      'Node.js',
      'HTML',
      'CSS',
      'Functional Programming',
    ],
  },
  {
    label: 'Backend, Cloud & DevOps',
    skills: [
      'GCP',
      'CI/CD',
      'DevOps',
      'ETL Pipelines',
      'SonarQube',
      'Testing Automation',
      'REST APIs',
    ],
  },
  {
    label: 'AI & Developer Productivity',
    skills: [
      'GitHub Copilot',
      'MCP Integrations',
      'AI-Assisted Workflows',
      'Code Review',
      'Documentation',
    ],
  },
]
