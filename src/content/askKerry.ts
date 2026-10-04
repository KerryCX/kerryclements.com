// Questions and answers for "Ask about Kerry".
// To change an answer, edit the text here. Keep answers short enough for a chat bubble.
// keywords: extra words a visitor might type that should lead to this answer.
// followUps: the ids of the suggested questions shown after this answer.

export type AskKerryLink = {
  label: string
  href: string
}

export type AskKerryAnswer = {
  text: string
  link?: AskKerryLink
}

export type AskKerryEntry = {
  id: string
  question: string
  keywords: string[]
  answer: AskKerryAnswer
  followUps: string[]
}

export const askKerryGreeting: AskKerryAnswer = {
  text: "Hi, I'm Kerry. Ask me about my experience, skills, projects or the roles I'm looking for.",
}

export const askKerryFallback: AskKerryAnswer = {
  text: "I haven't written an answer for that one yet. Try one of the questions below, or email me at",
  link: { label: 'hello@kerryclements.com', href: 'mailto:hello@kerryclements.com' },
}

export const askKerryStarters: string[] = ['who', 'experience', 'stack', 'roles']

export const askKerryEntries: AskKerryEntry[] = [
  {
    id: 'who',
    question: 'Who are you?',
    keywords: ['kerry', 'introduce', 'introduction', 'yourself', 'background'],
    answer: {
      text: "I'm Kerry, a Bristol-based software engineer. The work I enjoy most sits where good code meets good user experience.",
    },
    followUps: ['experience', 'stack', 'roles'],
  },
  {
    id: 'experience',
    question: 'How much experience do you have?',
    keywords: ['years', 'long', 'commercial', 'senior', 'level', 'career'],
    answer: {
      text: "Over 6 years of commercial software development. Most recently that's 3+ years building production React and TypeScript applications at Scalable Software, and before that I was an analyst programmer at Europcar.",
    },
    followUps: ['scalable', 'europcar', 'gap'],
  },
  {
    id: 'stack',
    question: "What's your tech stack?",
    keywords: ['tech', 'technologies', 'languages', 'tools', 'skills', 'react', 'typescript'],
    answer: {
      text: 'React, TypeScript and JavaScript on the front end; Node.js, Express, Python and FastAPI on the back end. For testing I use Jest, Vitest, Cypress and pytest, plus Git and GitHub Actions for CI.',
    },
    followUps: ['fullstack', 'testing', 'accessibility'],
  },
  {
    id: 'fullstack',
    question: 'Are you front end or full stack?',
    keywords: ['fullstack', 'frontend', 'backend', 'node', 'python', 'server'],
    answer: {
      text: "Front end is my strongest area, but I'm growing into full stack. I've built REST APIs in Node.js with TypeScript and in Python with FastAPI, both with full test suites.",
    },
    followUps: ['backend', 'stack'],
  },
  {
    id: 'scalable',
    question: 'What did you do at Scalable?',
    keywords: ['acumen', 'last', 'previous', 'job', 'analytics', 'recent'],
    answer: {
      text: 'I built front-end features for Acumen, a workplace analytics platform, in a small cross-functional team. That included data-dense charts and tables, REST API integrations, and Jest and Cypress tests alongside every feature.',
    },
    followUps: ['agile', 'stakeholders'],
  },
  {
    id: 'agile',
    question: 'Have you worked in Agile teams?',
    keywords: ['scrum', 'master', 'sprint', 'standup', 'retro', 'kanban', 'team'],
    answer: {
      text: 'Yes. I worked in Scrum throughout my time at Scalable, and for a few months I was also Scrum Master, running stand-ups, sprint planning and retros. I hold the BCS EXIN Foundation Certificate in Agile Scrum.',
    },
    followUps: ['stakeholders', 'roles'],
  },
  {
    id: 'stakeholders',
    question: 'Do you work with product and stakeholders?',
    keywords: ['requirements', 'stories', 'communication', 'business', 'collaborate'],
    answer: {
      text: 'Yes. I wrote user stories and acceptance criteria, triaged support tickets, and worked with the CEO, Head of Engineering, UX designer and QA to turn half-formed requests into clear requirements.',
    },
    followUps: ['roles', 'agile'],
  },
  {
    id: 'europcar',
    question: 'What did you do before Scalable?',
    keywords: ['europcar', 'earlier', 'analyst', 'programmer', 'java'],
    answer: {
      text: 'I was an analyst programmer at Europcar from 2005 to 2008, working on their branch network system in C, Java, XML and SQL, with code reviews and testing.',
    },
    followUps: ['gap', 'since2025'],
  },
  {
    id: 'gap',
    question: 'What about the gap in your CV?',
    keywords: ['break', 'family', 'time', 'out', 'returner'],
    answer: {
      text: 'I took time out to raise my family, then came back to tech through a web development bootcamp at Bath Spa University before joining Scalable.',
    },
    followUps: ['since2025', 'experience'],
  },
  {
    id: 'since2025',
    question: 'What have you been doing since August 2025?',
    keywords: ['since', 'currently', 'recently', 'now', 'learning', 'certificate'],
    answer: {
      text: 'Building portfolio projects, earning a Scrum certification and an art and design qualification, and working towards the Google UX Design Certificate.',
    },
    followUps: ['proud', 'roles'],
  },
  {
    id: 'accessibility',
    question: 'How do you approach accessibility?',
    keywords: ['a11y', 'wcag', 'screen', 'reader', 'keyboard', 'inclusive'],
    answer: {
      text: "I treat it as part of the job rather than an extra. I build to WCAG 2.2 AA, test with keyboards and Stark, and I've run full accessibility audits on my own projects.",
    },
    followUps: ['testing', 'site'],
  },
  {
    id: 'testing',
    question: 'How do you approach testing?',
    keywords: ['tests', 'jest', 'vitest', 'cypress', 'tdd', 'quality'],
    answer: {
      text: 'Tests go alongside the feature, not after it. I use Jest or Vitest with React Testing Library for components, Cypress for end-to-end, and GitHub Actions so nothing merges without passing.',
    },
    followUps: ['ai', 'accessibility'],
  },
  {
    id: 'ai',
    question: 'Do you use AI tools?',
    keywords: ['ai', 'claude', 'copilot', 'chatgpt', 'llm'],
    answer: {
      text: "Yes, daily, for analysis, drafting and code review. I treat the output like a colleague's pull request: useful, but I review and test it.",
    },
    followUps: ['testing', 'proud'],
  },
  {
    id: 'proud',
    question: 'Which project are you proudest of?',
    keywords: ['project', 'projects', 'best', 'crypto', 'portfolio'],
    answer: {
      text: 'Crypto Tracker: a live market dashboard of the top 50 coins, built with React, TypeScript and KendoReact, with a Netlify Functions proxy keeping the API key server-side.',
      link: { label: 'Read the case study', href: '/portfolio/crypto-tracker' },
    },
    followUps: ['backend', 'site'],
  },
  {
    id: 'backend',
    question: 'Have you built any back end?',
    keywords: ['backend', 'api', 'rest', 'express', 'fastapi', 'database', 'node'],
    answer: {
      text: 'Yes. ticket-zero is a Node.js, Express and TypeScript REST API with around 95 to 100% Jest coverage, and cupboard-api is a FastAPI project with Pydantic validation and a pytest suite.',
    },
    followUps: ['testing', 'fullstack'],
  },
  {
    id: 'site',
    question: 'How was this site built?',
    keywords: ['website', 'built', 'portfolio', 'figma', 'netlify', 'themes'],
    answer: {
      text: "It's designed in Figma with a token-based design system, built in React and TypeScript, deployed on Netlify, and checked by GitHub Actions before anything merges.",
      link: { label: 'Read the case study', href: '/portfolio/kerryclements-com' },
    },
    followUps: ['accessibility', 'testing'],
  },
  {
    id: 'roles',
    question: 'What roles are you looking for?',
    keywords: ['job', 'role', 'position', 'hiring', 'remote', 'hybrid', 'bristol', 'location'],
    answer: {
      text: "Frontend, full stack or product engineering roles where user experience is taken seriously. I'm looking in Greater Bristol (on-site, hybrid or remote) or remote across the UK, and I'm happy to travel to an office once or twice a month.",
    },
    followUps: ['start', 'experience'],
  },
  {
    id: 'start',
    question: 'When can you start?',
    keywords: ['available', 'availability', 'notice', 'when'],
    answer: {
      text: "I'm available to start soon. Email me and we can talk about timings.",
      link: { label: 'hello@kerryclements.com', href: 'mailto:hello@kerryclements.com' },
    },
    followUps: ['roles', 'who'],
  },
]
