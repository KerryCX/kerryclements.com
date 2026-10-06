// Questions and answers for "Ask about Kerry".
// To change an answer, edit the text here. Keep answers short enough for a chat bubble.
// keywords: extra words a visitor might type that should lead to this answer.
// followUps: the ids of the suggested questions shown after this answer.
// text: one string, or a list of strings for several paragraphs, e.g.
//   text: ['First paragraph.', 'Second paragraph.'],
// link: one link, added to the end of the last paragraph.
// links: several links, shown together under the answer, e.g.
//   links: [{ label: 'See all my projects', href: '/portfolio' }, { label: 'GitHub', href: '...' }],

import { cvPath, emailAddress, gitHubLink, linkedInLink } from '../pages/portfolio/constants'

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
    keywords: [
      'kerry',
      'introduce',
      'introduction',
      'yourself',
      'background',
      'hello',
      'hi',
      'hey',
      'pets',
      'dog',
      'cat',
      'leicester',
    ],
    answer: {
      text: [
        "I'm Kerry, a Bristol-based software engineer. I moved here from Leicester, and I live with my family, Ben our golden retriever and Precious, our naughty tortie.",
        'When it comes to work, I love code. I have been a front end engineer for over three years, but I love software engineering in general. Working with a team to build something genuinely useful is really satisfying.',
        'I like to think about accessibility and the user experience when I code, getting the best of both worlds.',
      ],
    },
    followUps: ['experience', 'skills', 'stack', 'roles'],
  },
  {
    id: 'experience',
    question: 'How much experience do you have?',
    keywords: ['years', 'long', 'commercial', 'senior', 'level', 'career'],
    answer: {
      text: [
        "7 years of commercial software development. Most recently that's 3+ years building production React and TypeScript applications at Scalable Software, and before that I was an analyst programmer at Europcar.",
        "I've worked with people at every level, from the CEO to testers, and with customers when I was at Europcar.",
      ],
    },
    followUps: ['scalable', 'europcar', 'gap'],
  },
  {
    id: 'stack',
    question: "What's your tech stack?",
    keywords: [
      'tech',
      'technologies',
      'languages',
      'tools',
      'react',
      'typescript',
      'javascript',
      'css',
      'html',
      'sass',
      'git',
      'java',
      'tailwind',
    ],
    answer: {
      text: 'React, TypeScript, JavaScript, Tailwind and Kendo UI on the front end; Node.js, Express, Python and FastAPI on the back end. For testing I use Jest, Vitest, Cypress and pytest, plus Git and GitHub Actions for CI.',
    },
    followUps: ['fullstack', 'testing', 'accessibility'],
  },
  {
    id: 'skills',
    question: 'What are your strongest skills?',
    keywords: ['skills', 'strengths', 'strongest', 'good', 'best', 'design', 'ux', 'ui', 'hire'],
    answer: {
      text: [
        'Building React and TypeScript front ends that are tested, accessible and easy to use. I build to WCAG 2.2 AA and write tests alongside every feature.',
        "Beyond code, I'm good at turning half-formed requests into clear requirements. I've written user stories, worked daily with product, UX and the CEO, and been Scrum Master. I'm also studying UX, so I can work on the design side as well as build it.",
      ],
    },
    followUps: ['stack', 'accessibility', 'stakeholders'],
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
    keywords: [
      'acumen',
      'last',
      'previous',
      'job',
      'analytics',
      'recent',
      'kendo',
      'charts',
      'dashboard',
      'visualisation',
      'visualization',
    ],
    answer: {
      text: 'I built front-end features for Acumen, a workplace analytics platform, using React, TypeScript and Kendo UI in a small cross-functional team. That included data-dense charts and tables, REST API integrations, and Jest and Cypress tests alongside every feature.',
      link: { label: "Acumen's new home", href: 'https://www.vector-networks.com/scalable/' },
    },
    followUps: ['work', 'agile', 'stakeholders', 'redundancy'],
  },
  {
    id: 'redundancy',
    question: 'Why did you leave Scalable?',
    keywords: [
      'leave',
      'last',
      'previous',
      'job',
      'redundancy',
      'redundant',
      'aws',
      'cloud',
      'fired',
      'looking',
    ],
    answer: {
      text: [
        'Unfortunately we had lost our main customer for Acumen. The funding was withdrawn, and I was made redundant.',
        'I was Scrum Master for the team responsible for moving our service onto AWS, and I was really excited about it, so it was a shame to leave.',
      ],
    },
    followUps: ['work', 'agile', 'since2025'],
  },
  {
    id: 'agile',
    question: 'Have you worked in Agile teams?',
    keywords: [
      'scrum',
      'master',
      'sprint',
      'standup',
      'retro',
      'kanban',
      'team',
      'jira',
      'confluence',
      'leadership',
    ],
    answer: {
      text: 'Yes. I worked in Scrum throughout my time at Scalable, and for a few months I was also Scrum Master, running stand-ups, sprint planning and retros. I hold the BCS EXIN Foundation Certificate in Agile Scrum.',
    },
    followUps: ['stakeholders', 'roles'],
  },
  {
    id: 'stakeholders',
    question: 'Do you work with product and stakeholders?',
    keywords: [
      'requirements',
      'stories',
      'communication',
      'business',
      'collaborate',
      'product',
      'pm',
    ],
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
    question: 'What did you do at Europcar?',
    keywords: ['europcar', 'earlier', 'analyst', 'programmer'],
    answer: {
      text: [
        'I joined Europcar as a credit controller, moved into management information, and then into IT as an analyst programmer from 2005 to 2008, working on their branch network system in Prolifics, C, SQL and XML.',
        'My earlier roles were customer-facing, visiting customers at their offices and speaking to them on the phone.',
      ],
    },
    followUps: ['programmer', 'since2025', 'creditcontroller'],
  },
  {
    id: 'programmer',
    question: 'Tell me more about Europcar',
    keywords: ['europcar', 'analyst', 'programmer', 'prolifics', 'screens', 'fullstack'],
    answer: {
      text: [
        "In IT, I worked on both sides of the system that ran Europcar's rental branches. I built and changed the branch screens in Prolifics, and wrote the C services, embedded SQL and batch jobs behind them. Today we'd call that full stack.",
        "I tested my own code and the team's, did code reviews and wrote documentation. Having worked in credit control and management information first, I already knew how the business used its data, which helped when working with the branches.",
      ],
    },
    followUps: ['backend', 'creditcontroller', 'mi'],
  },
  {
    id: 'creditcontroller',
    question: 'Tell me more about your time as a credit controller',
    keywords: ['credit', 'controller', 'europcar'],
    answer: {
      text: [
        'This was my first role at Europcar (then called Eurodollar). I had my own ledger of accounts, chasing payments, dealing with customer queries and applying payments to accounts.',
        'I was promoted to National Accounts Controller, where I was responsible for medium and large businesses. I would often visit them to go through their queries.',
      ],
    },
    followUps: ['mi', 'scalable', 'gap'],
  },
  {
    id: 'mi',
    question: 'Tell me more about your time as a Management Information Analyst',
    keywords: ['management', 'europcar', 'information'],
    answer: {
      text: [
        'This was part of my move into tech. I was responsible for producing reports for our customers, on their car rental fleet.',
        'As well as ad hoc reports, we had monthly reports that we would send out. We automated these reports using Visual Basic and Access.',
      ],
    },
    followUps: ['programmer', 'scalable', 'gap'],
  },
  {
    id: 'gap',
    question: 'What about the gap in your CV?',
    keywords: ['break', 'family', 'time', 'out', 'returner', 'kids', 'children', 'change'],
    answer: {
      text: 'I took time out to raise my family, then came back to tech through a web development bootcamp at Bath Spa University before joining Scalable. Having that time for family was great, but now my children are older, I can focus on work without school runs.',
    },
    followUps: ['bootcamp', 'degree', 'since2025', 'experience'],
  },
  {
    id: 'degree',
    question: 'Do you have a degree?',
    keywords: [
      'degree',
      'university',
      'ou',
      'bsc',
      'study',
      'studied',
      'education',
      'qualification',
      'diploma',
    ],
    answer: {
      text: [
        'Yes, a BSc (Hons) Open degree from the Open University, with a 2:1. I studied part-time from 2001 to 2006 while working full time at Europcar, mainly IT and Computing, and gained a Diploma in Computing along the way.',
        'It led to my move into IT. My final module, Software Systems and their Development, was a Distinction, and that got me the 2:1.',
      ],
    },
    followUps: ['courses', 'programmer', 'gap'],
  },
  {
    id: 'courses',
    question: 'Which courses did you study?',
    keywords: ['courses', 'modules', 'module', 'databases', 'oop', 'planetary'],
    answer: {
      text: [
        'The core was computing: object-oriented programming, relational databases, putting computer systems to work, and software systems and their development, which was my Distinction.',
        'I also studied microprocessor-based computers, artificial intelligence, and information and communication technologies, which looked at how people interact with technology. And for something completely different, planetary science and the search for life.',
      ],
    },
    followUps: ['degree', 'programmer', 'accessibility'],
  },
  {
    id: 'bootcamp',
    question: 'Tell me about the bootcamp',
    keywords: ['bootcamp', 'bath', 'spa', 'retrain', 'retraining'],
    answer: {
      text: [
        'I did a web development bootcamp at Bath Spa University from October 2021 to January 2022. It was a practical course covering React, HTML, CSS, Tailwind, JavaScript, Git and working with APIs.',
        'It was my route back into tech after my career break, and three months after finishing I joined Scalable as a software engineer.',
      ],
    },
    followUps: ['scalable', 'degree', 'gap'],
  },
  {
    id: 'since2025',
    question: 'What have you been doing since August 2025?',
    keywords: ['since', 'currently', 'recently', 'now', 'learning', 'certificate', 'google'],
    answer: {
      text: [
        'Building portfolio projects, earning a Scrum certification and an art and design qualification, and working towards the Google UX Design Certificate.',
        "As well as this, I'm social media lead for Bristol & West Progressive Jewish Congregation. ",
      ],
      link: { label: 'BWPJC Instagram', href: 'https://www.instagram.com/bwpjc' },
    },
    followUps: ['proud', 'roles', 'list', 'social'],
  },
  {
    id: 'social',
    question: 'Tell me about your social media work',
    keywords: [
      'social',
      'media',
      'instagram',
      'facebook',
      'canva',
      'graphics',
      'posts',
      'synagogue',
    ],
    answer: {
      text: [
        "I'm social media lead for Bristol & West Progressive Jewish Congregation. I design the posts and event graphics in Canva and share them on Instagram and Facebook.",
        "It's not tech, but it uses the same skills: thinking about who the audience is, keeping the look consistent, and making the key information easy to take in at a glance.",
      ],
      link: { label: 'BWPJC Instagram', href: 'https://www.instagram.com/bwpjc' },
    },
    followUps: ['since2025', 'accessibility', 'roles'],
  },
  {
    id: 'accessibility',
    question: 'How do you approach accessibility?',
    keywords: [
      'a11y',
      'wcag',
      'screen',
      'reader',
      'keyboard',
      'inclusive',
      'contrast',
      'alt',
      'aria',
      'stark',
    ],
    answer: {
      text: "I treat it as part of the job rather than an extra. I build to WCAG 2.2 AA, test with keyboards and Stark, and I've run full accessibility audits on my own projects.",
    },
    followUps: ['testing', 'site'],
  },
  {
    id: 'testing',
    question: 'How do you approach testing?',
    keywords: ['tests', 'quality', 'ci', 'actions', 'pipeline'],
    answer: {
      text: 'Tests go alongside the feature, not after it. I use Jest or Vitest with React Testing Library for components, Cypress for end-to-end, and GitHub Actions so nothing merges without passing.',
    },
    followUps: ['unit', 'integration', 'e2e', 'tdd'],
  },
  {
    id: 'unit',
    question: "What's your experience with unit testing?",
    keywords: ['unit', 'jest', 'vitest', 'component', 'rtl', 'coverage', 'library'],
    answer: {
      text: [
        "I write unit and component tests as standard. At Scalable I used Jest alongside every feature, and on my own projects I use Vitest with React Testing Library. That means testing what the user sees and does, not the component's internals.",
        'GitHub Actions runs the tests on every pull request, so nothing merges without passing.',
      ],
    },
    followUps: ['integration', 'e2e', 'tdd'],
  },
  {
    id: 'integration',
    question: "What's your experience with integration testing?",
    keywords: ['integration', 'supertest', 'testclient', 'pytest', 'endpoint', 'endpoints'],
    answer: {
      text: [
        "My back end projects are tested this way. In ticket-zero, Jest and Supertest send real HTTP requests through the whole Express app, so each test checks the route, validation and data together. cupboard-api does the same in Python with FastAPI's TestClient and pytest.",
        "I reset the data before every test so they can't affect each other. They sit between unit tests, which check each piece on its own, and end-to-end tests, which check the whole journey in the browser.",
      ],
    },
    followUps: ['unit', 'e2e', 'backend'],
  },
  {
    id: 'e2e',
    question: "What's your experience with end-to-end testing?",
    keywords: ['e2e', 'cypress', 'browser', 'journey', 'journeys', 'mock', 'mocks', 'stub'],
    answer: {
      text: [
        'At Scalable I wrote Cypress tests alongside feature work, to check whole user journeys in the browser. I used them on the wizard I built, to check what happened at each step when a user clicked certain things, and that the validation stopped them moving on until a step was complete.',
        'We used mock data for the API responses, so the tests were fast and repeatable, and we could easily test different user settings and error cases.',
        'Unit tests tell you each piece works. End-to-end tests tell you they work together, the way a user would use them.',
      ],
    },
    followUps: ['wizard', 'unit', 'integration'],
  },
  {
    id: 'tdd',
    question: 'What do you think of Test-Driven Development (TDD)?',
    keywords: ['tests', 'tdd'],
    answer: {
      text: [
        "It has its place. At Scalable, we didn't always have a dev environment with a realistic dataset. Before any dummy data was set up, writing the tests first gave me a way to check the code I was writing, and it helped keep the code concise.",
        "I'd skip it for visual layout and styling, where you need to see the result in the browser, and for early prototypes when I'm still working out what to build. There I'd write the tests alongside the feature once the shape is clear.",
      ],
    },
    followUps: ['testing', 'accessibility', 'ai'],
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
    keywords: [
      'project',
      'projects',
      'best',
      'periodic',
      'table',
      'elements',
      'chemistry',
      'flashcard',
      'quiz',
      'pwa',
      'mobile',
    ],
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
    keywords: [
      'personal',
      'side',
      'other',
      'apps',
      'hobby',
      'more',
      'portfolio',
      'crypto',
      'tracker',
      'measure',
      'bmi',
      'jewish',
      'journey',
      'hebrew',
      'chores',
      'household',
      'done',
    ],
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
    followUps: ['proud', 'backend', 'site', 'wizard'],
  },
  {
    id: 'wizard',
    question: 'Tell me more about the wizard',
    keywords: ['wizard', 'validation'],
    answer: {
      text: [
        "I used Kendo UI's Stepper component to build a wizard that took the user through each step.",
        "It fetched the user's settings from the back end through an API call, and those decided which options they saw.",
        "It also needed a lot of validation, so users couldn't move on until the current step was valid.",
      ],
    },
    followUps: ['e2e', 'testing', 'fullstack'],
  },
  {
    id: 'backend',
    question: 'Have you built any back end?',
    keywords: [
      'backend',
      'api',
      'rest',
      'express',
      'fastapi',
      'database',
      'node',
      'sql',
      'sybase',
      'tuxedo',
      'unix',
      'ticket',
      'cupboard',
    ],
    answer: {
      text: [
        'Yes. As an analyst programmer at Europcar, most of my work was server-side, on a 2000s enterprise stack.',
        'I wrote C services on BEA Tuxedo that the branch systems called to fetch rates and save rentals and reservations, much like API endpoints today, with embedded SQL against Sybase behind them.',
        'I also designed tables and schema changes for an integration that exchanged XML messages through queues, maintained Unix batch jobs, and investigated live issues on the servers.',
        'More recently, ticket-zero is a Node.js, Express and TypeScript REST API with around 95 to 100% Jest coverage, and cupboard-api is a FastAPI project with Pydantic validation and a pytest suite.',
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
    id: 'chatbot',
    question: 'How does this chat work?',
    keywords: ['chatbot', 'chat', 'bot', 'scripted', 'matching'],
    answer: {
      text: [
        "There's no AI behind it. I wrote every answer myself, and when you type a question it compares your words with each answer's keywords, allowing for small typos, then shows the closest match.",
        'I built it this way so the answers are always my own and always accurate, with no paid AI service.',
      ],
    },
    followUps: ['site', 'ai', 'accessibility'],
  },
  {
    id: 'roles',
    question: 'What roles are you looking for?',
    keywords: [
      'job',
      'role',
      'position',
      'hiring',
      'remote',
      'hybrid',
      'bristol',
      'location',
      'based',
      'live',
      'city',
      'home',
      'wfh',
      'permanent',
      'contract',
      'freelance',
    ],
    answer: {
      text: "Frontend, full stack or product engineering roles where user experience is taken seriously. I'm looking in Greater Bristol (on-site, hybrid or remote) or remote across the UK, and I'm happy to travel to an office, such as London, once or twice a month.",
    },
    followUps: ['onsite', 'start', 'experience'],
  },
  {
    id: 'onsite',
    question: 'Would you work on-site?',
    keywords: [
      'onsite',
      'site',
      'office',
      'commute',
      'travel',
      'london',
      'gloucester',
      'cheltenham',
    ],
    answer: {
      text: "Yes. I'm happy to work on-site, hybrid or remote in and around Bristol, including Bath, Gloucester and Cheltenham. Further afield, I'd look at remote roles, and I'm happy to travel to an office, such as London, once or twice a month.",
    },
    followUps: ['roles', 'start', 'contact'],
  },
  {
    id: 'contact',
    question: 'Where can I find you online?',
    keywords: [
      'contact',
      'email',
      'linkedin',
      'github',
      'cv',
      'reach',
      'links',
      'online',
      'touch',
      'phone',
      'call',
      'resume',
      'message',
      'thanks',
      'thank',
    ],
    answer: {
      text: "Here's where to find me. Email is the best way to get in touch.",
      links: [
        { label: emailAddress, href: `mailto:${emailAddress}` },
        { label: 'LinkedIn', href: linkedInLink },
        { label: 'GitHub', href: gitHubLink },
        { label: 'My CV online', href: '/cv' },
        { label: 'My CV as a PDF', href: cvPath },
      ],
    },
    followUps: ['roles', 'start', 'list'],
  },
  {
    id: 'start',
    question: 'When can you start?',
    keywords: ['available', 'availability', 'notice', 'when', 'immediately', 'asap', 'now'],
    answer: {
      text: "I'm available to start soon. Email me and we can talk about timings:",
      link: { label: 'hello@kerryclements.com', href: 'mailto:hello@kerryclements.com' },
    },
    followUps: ['roles', 'onsite', 'work'],
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
