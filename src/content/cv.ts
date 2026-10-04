// Single source of truth for the CV page (and, later, the "Ask about Kerry" chatbot).
// Keep this in step with public/kerry-clements-cv.pdf when the CV changes.
// Public copy: no phone number or street-level location.

export type CvLink = {
  label: string
  href: string
}

export type CvSkillGroup = {
  heading: string
  items: string[]
}

export type CvRole = {
  title: string
  organisation?: string
  dates: string
  highlights: string[]
}

export type CvProject = {
  name: string
  link: CvLink
  description: string
}

export type CvEducation = {
  institution: string
  dates?: string
  details: string[]
}

export type Cv = {
  name: string
  location: string
  profile: string
  skills: CvSkillGroup[]
  experience: CvRole[]
  earlierCareer: CvRole[]
  projects: CvProject[]
  certifications: string[]
  education: CvEducation[]
}

export const cv: Cv = {
  name: 'Kerry Clements',
  location: 'Bristol, UK',
  profile:
    'Front-end leaning software engineer with 3+ years of commercial React and TypeScript experience, building data-dense features for a workplace analytics product in a small cross-functional team. Comfortable owning work end to end: taking partly-formed requirements, working them through with the people who raised them, and shipping tested features with Jest and Cypress. On personal projects has built REST APIs in Node.js/Express and Python/FastAPI, and a serverless API proxy. Strong interest in UI/UX, currently completing the Google UX Design Professional Certificate, with a consistent focus on usability and accessibility (WCAG 2.2 AA). Uses AI tools daily to work faster.',
  skills: [
    {
      heading: 'Technical',
      items: [
        'TypeScript',
        'JavaScript',
        'React',
        'HTML',
        'CSS/Sass',
        'Kendo UI',
        'Node.js',
        'Express',
        'Python',
        'FastAPI',
        'Pydantic',
        'REST APIs',
        'SQL',
      ],
    },
    {
      heading: 'Tools and CI',
      items: [
        'Git (GitHub/GitLab)',
        'GitHub Actions',
        'Unix command line',
        'Claude (AI-assisted analysis, drafting and code review)',
      ],
    },
    { heading: 'Testing', items: ['Jest', 'Vitest', 'Cypress', 'pytest'] },
    {
      heading: 'UX and product',
      items: [
        'Figma',
        'WCAG 2.2 AA accessibility auditing',
        'Requirements gathering',
        'User story writing',
        'Scrum (incl. acting Scrum Master)',
        'Jira',
        'Confluence',
      ],
    },
  ],
  experience: [
    {
      title: 'Building Portfolio and Continued Learning',
      dates: 'Aug 2025 – Present',
      highlights: [
        'Built a portfolio of production-quality React/TypeScript applications while completing a Pre-Access to HE (UAL Level 2 Award in Art and Design, awarded August 2026), a Scrum certification (BCS EXIN Foundation Certificate in Agile Scrum, awarded December 2025), and the Google UX Design Professional Certificate (in progress).',
      ],
    },
    {
      title: 'Software Engineer',
      organisation: 'Scalable',
      dates: 'April 2022 – August 2025',
      highlights: [
        'Developed and maintained front-end features for Acumen, a Digital Employee Experience web application, using React, TypeScript and Kendo UI, with a consistent focus on usability and accessibility.',
        'Built and maintained data-dense interface features, including charts and tables handling large volumes of analytics data, with attention to performance and usability at scale.',
        'Consumed and integrated REST APIs from backend services, handling loading, error and edge-case states in production features.',
        'Wrote Jest unit tests and Cypress end-to-end tests alongside feature work as standard practice, and gave and received code review feedback.',
        'Worked with internal stakeholders, including the CEO, Head of Engineering, UX designer and QA testers, to turn loosely defined requests into clear requirements, acting as a bridge between leadership and engineering.',
        'Wrote and amended user stories and acceptance criteria for smaller features, gap fixes and bugs, and triaged and prioritised support tickets.',
        'For a few months, additionally took on the Scrum Master role alongside development, running stand-ups, sprint planning and retrospectives, and joining prioritisation meetings on what to build next.',
      ],
    },
  ],
  earlierCareer: [
    {
      title: 'Analyst Programmer',
      organisation: 'Europcar Group UK, Leicester',
      dates: 'Nov 2005 – Aug 2008',
      highlights: [
        'Tested own code and that of the team, carried out code reviews, and wrote documentation.',
        'Coded changes to the UI of the branch network system using C, Java, XML and SQL, with CVS/SCCS for version control.',
      ],
    },
    {
      title: 'Career break',
      dates: 'c. 2008 – 2017',
      highlights: [
        'Relocated to Bristol and raised a family, before resuming casual work (retail, freelance usability testing) and retraining into tech through a web development bootcamp.',
      ],
    },
  ],
  projects: [
    {
      name: 'Crypto Tracker',
      link: {
        label: 'cryptotracker.kerryclements.com',
        href: 'https://cryptotracker.kerryclements.com',
      },
      description:
        'React/TypeScript market dashboard consuming the CoinGecko REST API via a Netlify Functions proxy, keeping the API key server-side rather than exposing it in the browser.',
    },
    {
      name: 'ticket-zero',
      link: {
        label: 'github.com/KerryCX/ticket-zero',
        href: 'https://github.com/KerryCX/ticket-zero',
      },
      description:
        'Node.js, Express, and TypeScript REST API, with Jest test coverage of approximately 95–100% across 22 tests.',
    },
    {
      name: 'cupboard-api',
      link: {
        label: 'github.com/KerryCX/cupboard-api',
        href: 'https://github.com/KerryCX/cupboard-api',
      },
      description:
        'Python learning project: a FastAPI REST API with full CRUD endpoints, declarative request validation using Pydantic models, and a pytest suite of 12 tests covering validation (422) and not-found (404) cases.',
    },
    {
      name: 'Jobs Done',
      link: { label: 'jobsdone.kerryclements.com', href: 'https://jobsdone.kerryclements.com' },
      description:
        'Personal web application; completed a full WCAG 2.2 AA accessibility audit, now feeding into a Figma-based v2 redesign.',
    },
    {
      name: 'kerryclements.com',
      link: { label: 'kerryclements.com', href: 'https://kerryclements.com' },
      description:
        'Portfolio site built with React and TypeScript and deployed to Netlify. GitHub Actions checks (a build and tests) must pass before anything merges to main.',
    },
    {
      name: 'periodic-table',
      link: {
        label: 'github.com/KerryCX/periodic-table',
        href: 'https://github.com/KerryCX/periodic-table',
      },
      description:
        'Mobile-first periodic table learning app with flashcard and quiz modes, built with React and TypeScript, designed in Figma with accessibility (WCAG) in mind. GitHub Actions workflow runs tests on every pull request to main.',
    },
    {
      name: 'react-fundamentals',
      link: {
        label: 'github.com/KerryCX/react-fundamentals',
        href: 'https://github.com/KerryCX/react-fundamentals',
      },
      description:
        'Custom useFetch<T> hook and an accessible DataDisplay component, with a test suite achieving 100% coverage.',
    },
  ],
  certifications: [
    'BCS EXIN Foundation Certificate in Agile Scrum V4.0, awarded December 2025',
    'UAL Level 2 Award in Art and Design, awarded August 2026',
  ],
  education: [
    {
      institution: 'Bath Spa University',
      dates: 'Oct 2021 – Jan 2022',
      details: [
        'Web Development Bootcamp: practical course covering React, HTML, CSS, JavaScript, Git and working with APIs.',
      ],
    },
    {
      institution: 'Open University',
      details: [
        'BSc (Hons) Open, 2:1 (principally IT and Computing)',
        'Principal coursework included Object-Oriented Programming, Java, C++ and Relational Databases.',
      ],
    },
  ],
}
