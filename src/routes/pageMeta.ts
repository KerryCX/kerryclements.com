export type PageMeta = {
  title: string
  description: string
  noCanonical?: boolean
}

export const siteMeta: PageMeta = {
  title: 'Kerry Clements - Software Engineer Portfolio',
  description:
    'Software engineer building accessible, well-tested web applications. React, TypeScript and Node.js projects covering accessibility, testing and APIs.',
}

// One entry per route. Titles follow "Page - Kerry Clements"; descriptions stay under about 160 characters.
export const pageMeta = {
  home: siteMeta,
  portfolio: {
    title: 'Portfolio - Kerry Clements',
    description:
      'Case studies from software engineer Kerry Clements. React, TypeScript and Node.js projects covering accessibility, testing, APIs and design systems.',
  },
  apps: {
    title: 'Apps - Kerry Clements',
    description:
      'Live apps built by Kerry Clements, from a periodic table learning app to a crypto market dashboard. Open any of them and try it out.',
  },
  contact: {
    title: 'Contact - Kerry Clements',
    description:
      'Open to frontend, full stack and product engineering roles. Get in touch with Kerry Clements by email, LinkedIn, or GitHub, or download her CV.',
  },
  cv: {
    title: 'CV - Kerry Clements',
    description:
      'CV for Kerry Clements, a software engineer with 7 years of commercial experience, most recently in React and TypeScript, with a focus on accessibility.',
  },
  notFound: {
    title: 'Page not found - Kerry Clements',
    description: "This page doesn't exist, or it may have moved.",
    noCanonical: true,
  },

  periodicTable: {
    title: 'Periodic Table case study - Kerry Clements',
    description:
      'A mobile-first periodic table learning app with flashcards and a quiz, rebuilt after studying UX. React, TypeScript, PWA, and WCAG AA.',
  },
  kerryClementsCom: {
    title: 'kerryclements.com case study - Kerry Clements',
    description:
      'How I designed my portfolio in Figma with a token-based design system and built it in React and TypeScript, with CI, tests and accessibility built in.',
  },
  jobsDone: {
    title: 'Jobs Done case study - Kerry Clements',
    description:
      'A task logger for busy parents, built in vanilla HTML, CSS, and JavaScript with no framework or build step. In real use from day one.',
  },
  shoppingList: {
    title: 'Shopping List case study - Kerry Clements',
    description:
      'A recruitment coding challenge rebuilt with no time limit: a React and TypeScript shopping list with persistence, reordering, and tests.',
  },
  jewishJourney: {
    title: 'Jewish Journey case study - Kerry Clements',
    description:
      'A growing set of study tools for Jewish conversion study: blessings, prayers, Hebrew roots and resources, built with React and Tailwind with accessibility as a target from the start.',
  },
  cryptoTracker: {
    title: 'Crypto Tracker case study - Kerry Clements',
    description:
      'A live crypto market dashboard built to show KendoReact Grid skills: the top 50 coins in a sortable, filterable grid with a 7-day price chart.',
  },
  ticTacToe: {
    title: 'Tic Tac Toe case study - Kerry Clements',
    description:
      'An early vanilla JavaScript project refactored around a proper game state model, fixing a win detection bug along the way.',
  },
  timeTracking: {
    title: 'Time Tracking Dashboard case study - Kerry Clements',
    description:
      'A Frontend Mentor challenge left unfinished in 2022 and completed in 2026, migrated from Create React App to Vite with TypeScript throughout.',
  },
  measureForMeasure: {
    title: 'Measure for Measure case study - Kerry Clements',
    description:
      'A BMI calculator that lets you mix height and weight units. Built in React, TypeScript, and Material UI v6, tested, and audited to WCAG 2.2 AA.',
  },

  personal: {
    title: 'Personal - Kerry Clements',
    description:
      'A few things that are personal to me, presented with the same care I bring to my work.',
  },
  wellnessJourney: {
    title: 'My Wellness Journey: Sleep - Kerry Clements',
    description:
      'Starting my health and wellness journey with sleep before anything else, and the research behind why.',
  },
  clearSkinLaser: {
    title: 'Why I Had the CO2 Laser - Kerry Clements',
    description: 'Twelve days into recovery from my latest CO2 laser, and why the timing finally made sense.',
  },
  claudeStylist: {
    title: 'I Asked Claude to Be My Personal Stylist for a Day - Kerry Clements',
    description: "I couldn't afford the £1,000 AI makeover app, so I asked Claude instead.",
  },
} satisfies Record<string, PageMeta>
