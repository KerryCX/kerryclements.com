import { Link } from 'react-router-dom'
import '../../styles/site.css'

export const PeriodicTableCaseStudy = () => {
  return (
    <div className="portfolio">
      <nav className="nav" aria-label="Main">
        <Link to="/portfolio" className="nav__name">
          Kerry Clements
        </Link>
        <ul className="nav__links">
          <li>
            <Link to="/portfolio">← Back to portfolio</Link>
          </li>
        </ul>
      </nav>
      <article className="case-study">
        <h1 className="case-study__title">Periodic Table App</h1>
        <p className="case-study__subtitle">Case study</p>

        <h2>Overview</h2>
        <p>
          A mobile-first learning tool for the periodic table, rebuilt from an earlier project after
          studying User Experience Design (UX). The app offers two modes, flashcards with
          self-rating and a multiple choice quiz, designed to suit different learning styles and
          moments.
        </p>

        <h2>The origin</h2>
        <p>
          The original version started as a practical solution. My daughter was revising for a
          chemistry test and needed a way to drill element symbols. I built a basic flashcard app
          quickly. It worked, but it was rough. Buttons were unstyled, there was no layout
          structure, no progress tracking, and only one way to use it.
        </p>
        <p>
          You can still see the <a href="/apps/PeriodicTableQuiz">original version here</a>.
        </p>
        <p>
          When I started studying User Experience Design (UX), I came back to it. It became the
          first project where I deliberately applied a UX process before writing a single line of
          code.
        </p>

        <h2>The problem with the original</h2>
        <p>
          Looking at it critically, the original had several issues. Content stacked down the page
          as you clicked through, with no sense of where you were in the sequence. There was no way
          to test yourself, only to reveal answers. The interface gave no feedback and asked nothing
          of the user. It worked as a prototype, but not as a product.
        </p>

        <h2>The process</h2>
        <p>
          I started in Figma rather than code. I defined a clear v1 scope, two modes, mobile first,
          no feature creep, and built a design system first: colour styles, text styles, and a
          consistent component approach. Accessibility was checked at the design stage using the
          Stark plugin, which caught a contrast failure on the primary button colour before it ever
          reached the browser.
        </p>
        <p>
          Eight screens were designed and accessibility-checked before any code was written. This
          was a deliberate change in my working practice, previously I would have reached for the
          code immediately.
        </p>

        <h2>The build</h2>
        <p>The app was built in React and TypeScript with Vite, deployed on Netlify.</p>
        <p>Key decisions made during the build:</p>
        <ul>
          <li>
            Flashcard self-rating (Got it / Nearly / No idea) was added during development, a UX
            improvement identified when thinking through the actual user flow rather than just the
            happy path
          </li>
          <li>
            Rating data is currently not aggregated, a known limitation and a clear v2 candidate
            alongside localStorage persistence
          </li>
          <li>
            Quiz mode uses randomised questions from the full 118 elements, with guaranteed unique
            options per question
          </li>
          <li>Utility functions were unit tested with Vitest before the components were built</li>
        </ul>

        <h2>What I learned</h2>
        <p>
          Designing before coding changes the quality of the decisions. Issues that would have
          required refactoring, like the contrast failure, or the button layout after reveal, were
          caught and resolved in Figma in minutes. The build phase was smoother as a result.
        </p>
        <p>
          I also noticed that even with a design in place, implementation reveals things the design
          doesn't anticipate. The rating buttons were not in the original Figma when the Revealed
          screen was first designed. They emerged from thinking through the flow during development.
          The design was updated to reflect the real behaviour before the code was merged.
        </p>

        <h2>What's next</h2>
        <ul>
          <li>Aggregated flashcard rating results at the end of a session</li>
          <li>localStorage persistence so progress is saved between sessions</li>
          <li>Category filtering to focus on specific element groups</li>
          <li>Component tests for Flashcard, Quiz, and EndScreen</li>
        </ul>

        <h2>Try it</h2>
        <p>
          <a href="https://periodic-table.kerryclements.com" target="_blank" rel="noreferrer">
            periodic-table.kerryclements.com
          </a>
        </p>
        <p>
          <a href="https://github.com/KerryCX/periodic-table" target="_blank" rel="noreferrer">
            View the code on GitHub
          </a>
        </p>
      </article>
    </div>
  )
}

export default PeriodicTableCaseStudy
