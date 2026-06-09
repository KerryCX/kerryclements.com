import { Link } from 'react-router-dom'
import '../../styles/portfolio.css'

export const KerryClementsComCaseStudy = () => {
  return (
    <div className="portfolio">
      <nav className="nav">
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
        <h1 className="case-study__title">kerryclements.com</h1>
        <p className="case-study__subtitle">Case study</p>

        <h2>Overview</h2>
        <p>
          A personal portfolio site designed to demonstrate both front end craft and UX thinking.
          Built with React and TypeScript, designed in Figma with a token-based design system, and
          deployed on Netlify.
        </p>

        <h2>The brief</h2>
        <p>
          Between roles and actively looking for front end and UX positions, I needed a portfolio
          that reflected my positioning: a front end developer who brings UX thinking to their work.
          The site needed to demonstrate both skills, not just list them.
        </p>

        <h2>Design decisions</h2>
        <p>
          I designed the site in Figma before writing any code. A token-based colour system was
          established first, with tokens named by role rather than value — <code>bg/primary</code>,{' '}
          <code>text/secondary</code>, <code>accent/rose</code> — to mirror how CSS custom
          properties would be implemented and to support future theming.
        </p>
        <p>
          A WCAG AA contrast failure was caught during the design phase. The{' '}
          <code>text/tertiary</code> colour was changed from <code>#666666</code> to{' '}
          <code>#888888</code> after a Stark plugin check revealed a 3:1 ratio against the
          background. The final ratio is 5.1:1. This was caught before a single line of CSS was
          written.
        </p>
        <p>
          The layout is desktop first at 1440px with a 1200px content area — the primary audience is
          recruiters reviewing portfolios on desktop. Full-width case study cards give an editorial
          feel and will scale naturally as more projects are added.
        </p>

        <h2>Development decisions</h2>
        <p>Key decisions made during the build:</p>
        <ul>
          <li>
            The portfolio route was moved outside the Layout component — the portfolio has its own
            nav and doesn't need the existing site header
          </li>
          <li>
            CSS tokens in <code>portfolio.css</code> match Figma colour style names exactly, keeping
            design and code in sync
          </li>
          <li>
            Magic strings extracted to a <code>constants.ts</code> file — email address, LinkedIn
            URL, and CV path are defined once and referenced throughout
          </li>
          <li>
            Work cards and skills are driven by data arrays — adding a new project or skill requires
            no changes to JSX
          </li>
          <li>
            Photo lightbox built with React <code>useState</code> — no library needed for a simple
            open/close interaction
          </li>
        </ul>

        <h2>Accessibility</h2>
        <p>
          Alt text was added via the Stark plugin throughout the design — Figma has no native alt
          text field. A full accessibility check was run on the complete page design with 0
          violations before the build began.
        </p>

        <h2>What's next</h2>
        <ul>
          <li>Mobile responsive styles</li>
          <li>Additional case studies as projects are completed</li>
          <li>Scrolling video walkthrough embedded in this case study</li>
        </ul>

        <h2>View it</h2>
        <p>
          <a href="https://kerryclements.com" target="_blank" rel="noreferrer">
            kerryclements.com
          </a>
        </p>
        <p>
          <a href="https://github.com/KerryCX/kerryclements.com" target="_blank" rel="noreferrer">
            View the code on GitHub
          </a>
        </p>
      </article>
    </div>
  )
}

export default KerryClementsComCaseStudy
