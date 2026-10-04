// Questions and answers for "Ask about Kerry".
// To change an answer, edit the text here. Keep answers short enough for a chat bubble.
// keywords: extra words a visitor might type that should lead to this answer.
// followUps: the ids of the suggested questions shown after this answer.
// text: one string, or a list of strings for several paragraphs, e.g.
//   text: ['First paragraph.', 'Second paragraph.'],
// link: one link, added to the end of the last paragraph.
// links: several links, shown together under the answer, e.g.
//   links: [{ label: 'See all my projects', href: '/portfolio' }, { label: 'GitHub', href: '...' }],

export type AskKerryLink = {
  label: string
  href: string
}

export type AskKerryAnswer = {
  text: string | string[]
  link?: AskKerryLink
  links?: AskKerryLink[]
}

export const paragraphsOf = (answer: AskKerryAnswer): string[] =>
  typeof answer.text === 'string' ? [answer.text] : answer.text

export const linksOf = (answer: AskKerryAnswer): AskKerryLink[] => [
  ...(answer.link ? [answer.link] : []),
  ...(answer.links ?? []),
]

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
      text: [
        "I'm Kerry, a Bristol-based software engineer. I moved here from Leicester, and I live with my family, Ben our golden retriever and Precious, our naughty tortie.",
        'When it comes to work, I love code. I have been a front end engineer for over three years, but I love software engineering in general. Working with a team to build something genuinely useful is really satisfying.',
        'I like to think about accessibility and the user experience when I code, getting the best of both worlds.',
      ],
    },
    followUps: ['experience', 'stack', 'roles'],
  },
  {
    id: 'experience',
    question: 'How much experience do you have?',
    keywords: ['years', 'long', 'commercial', 'senior', 'level', 'career'],
    answer: {
      text: [
        "Over 6 years of commercial software development. Most recently that's 3+ years building production React and TypeScript applications at Scalable Software, and before that I was an analyst programmer at Europcar.",
        "I've worked with people at every level, from the CEO to testers, and with customers when I was at Europcar.",
      ],
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
      link: { label: "Acumen's new home", href: 'https://www.vector-networks.com/scalable/' },
    },
    followUps: ['work', 'agile', 'stakeholders'],
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
      text: [
        'Yes. We were a close-knit team at Scalable, and I was in daily contact with the product manager, UX designer, testers, CEO and Head of Engineering.',
        'I wrote user stories and acceptance criteria, triaged support tickets, and helped turn half-formed requests into clear requirements.',
        'At Europcar, I dealt with customers directly in my credit control and management information roles, handling queries about payments and complaints. In IT, I worked closely with staff at our rental branches.',
      ],
    },
    followUps: ['roles', 'agile'],
  },
  {
    id: 'europcar',
    question: 'What did you do before Scalable?',
    keywords: ['europcar', 'earlier', 'analyst', 'programmer', 'java'],
    answer: {
      text: [
        'I joined Europcar as a credit controller, moved into management information, and then into IT as an analyst programmer from 2005 to 2008, working on their branch network system in C, Java, XML and SQL.',
        'My earlier roles were customer-facing, visiting customers at their offices and speaking to them on the phone.',
      ],
    },
    followUps: ['gap', 'since2025'],
  },
  {
    id: 'gap',
    question: 'What about the gap in your CV?',
    keywords: ['break', 'family', 'time', 'out', 'returner'],
    answer: {
      text: 'I took time out to raise my family, then came back to tech through a web development bootcamp at Bath Spa University before joining Scalable. Having that time for family was great, but now my children are older, I can focus on work without school runs.',
    },
    followUps: ['since2025', 'experience'],
  },
  {
    id: 'since2025',
    question: 'What have you been doing since August 2025?',
    keywords: ['since', 'currently', 'recently', 'now', 'learning', 'certificate'],
    answer: {
      text: [
        'Building portfolio projects, earning a Scrum certification and an art and design qualification, and working towards the Google UX Design Certificate.',
        "As well as this, I'm social media lead for Bristol & West Progressive Jewish Congregation. ",
      ],
      link: { label: 'BWPJC Instagram', href: 'https://www.instagram.com/bwpjc' },
    },
    followUps: ['proud', 'roles', 'list'],
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
      text: [
        "Yes, daily, for analysis, drafting and code review. I treat the output like a colleague's pull request: useful, but I review and test it.",
        'Claude has been brilliant for turning my ideas into working software quickly, and I have a lot of ideas.',
      ],
    },
    followUps: ['testing', 'proud'],
  },
  {
    id: 'proud',
    question: 'Which project are you proudest of?',
    keywords: ['project', 'projects', 'best', 'crypto', 'portfolio'],
    answer: {
      text: [
        "It's a mobile-first app for learning the periodic table, with flashcard and multiple-choice quiz modes, built with React and TypeScript.",
        "I'm proud of it because it's where my UX learning and front-end work came together. I rebuilt it from an earlier flashcard app after studying UX: I designed it in Figma first, checking it against WCAG 2.2 AA before writing any code. ",
        "It's now an installable PWA, and my daughter uses it to revise for her tests. It has Vitest component tests for the flashcard, quiz and end screens, and a GitHub Actions workflow that lints, tests and builds every pull request before it can merge.",
      ],
      link: { label: 'Read the case study', href: '/portfolio/periodic-table' },
    },
    followUps: ['list', 'work', 'backend', 'site'],
  },
  {
    id: 'list',
    question: 'Have you got any personal projects?',
    keywords: ['personal', 'side', 'other', 'apps', 'hobby', 'more'],
    answer: {
      text: [
        'Yes, quite a few. Measure for Measure is a BMI calculator that lets you mix units, like feet and inches with kilograms. Jewish Journey helps me learn Hebrew blessings, prayers and word roots.',
        "I've also built Periodic Table, a flashcard and quiz app for learning the elements, and Jobs Done, a simple logger for household jobs.",
      ],
      links: [
        { label: 'See all my projects', href: '/portfolio' },
        { label: 'My GitHub', href: 'https://github.com/KerryCX' },
      ],
    },
    followUps: ['work', 'backend', 'site'],
  },
  {
    id: 'work',
    question: 'Which work project are you proudest of?',
    keywords: ['work', 'workplace', 'wizard', 'impact', 'contribution'],
    answer: {
      text: [
        'At Scalable I worked on Acumen, a workplace analytics product used by enterprise IT teams, managers and directors.',
        'My most impactful contribution was building a full-screen wizard to replace a modal customers used to create report types. It was designed to be reusable from the start, and it went on to power the creation of KPIs and surveys as well. I handled its loading and error states and wrote the Jest and Cypress tests.',
        'Alongside this I worked on the data-dense side of the app, the charts and tables handling large volumes of analytics data.',
        'Together, these helped clients get useful statistics to make the most of their software, hardware and people, while looking after their employees.',
      ],
      link: { label: "Acumen's new home", href: 'https://www.vector-networks.com/scalable/' },
    },
    followUps: ['proud', 'backend', 'site'],
  },
  {
    id: 'backend',
    question: 'Have you built any back end?',
    keywords: ['backend', 'api', 'rest', 'express', 'fastapi', 'database', 'node'],
    answer: {
      text: [
        'Yes. ticket-zero is a Node.js, Express and TypeScript REST API with around 95 to 100% Jest coverage, and cupboard-api is a FastAPI project with Pydantic validation and a pytest suite.',
        "Watch this space: I've got plenty more ideas, and I'm building on my back end skills all the time.",
      ],
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
      text: "Frontend, full stack or product engineering roles where user experience is taken seriously. I'm looking in Greater Bristol (on-site, hybrid or remote) or remote across the UK, and I'm happy to travel to an office, such as London, once or twice a month.",
    },
    followUps: ['start', 'experience'],
  },
  {
    id: 'start',
    question: 'When can you start?',
    keywords: ['available', 'availability', 'notice', 'when'],
    answer: {
      text: "I'm available to start soon. Email me and we can talk about timings:",
      link: { label: 'hello@kerryclements.com', href: 'mailto:hello@kerryclements.com' },
    },
    followUps: ['roles', 'who'],
  },
  {
    id: 'colour',
    question: 'What is your favourite colour?',
    keywords: ['colour', 'color'],
    answer: {
      text: 'I love turquoise and teal, and really any mix of blue and green. Aqua is also a nice one.',
    },
    followUps: ['start'],
  },
]
