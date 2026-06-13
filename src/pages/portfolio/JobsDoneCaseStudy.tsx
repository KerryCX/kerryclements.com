import { Footer } from '../../components/Footer'
import { Nav } from '../../components/Nav'

export const JobsDoneCaseStudy = () => {
  return (
    <div className="site">
      <Nav
        links={[
          { label: '← Back to portfolio', href: '/portfolio' },
          { label: 'Contact', href: '#contact' },
        ]}
      />
      <main>
        <article className="case-study">
          <h1 className="case-study__title">Jobs Done</h1>
          <p className="case-study__subtitle">Case study</p>
          <h2>Overview</h2>
          <p>
            A single-page web app for logging completed tasks through the day and sharing them via
            email or clipboard. Built in vanilla HTML, CSS, and JavaScript: no framework, no
            dependencies, no build step. In real use from day one.
          </p>
          <h2>The origin</h2>
          <p>
            After a particularly overwhelming morning, I wanted a way to log all the physical and
            emotional labour that goes into running a household, without having to tell anyone
            directly, which would just sound silly. I wanted a record that could speak for itself.
          </p>
          <p>
            I built the first version quickly, in a single conversation with Claude. The name Jobs
            Done and the tagline "Everything you do, made visible" came out of that initial
            conversation.
          </p>
          <p>
            On my first share, I got a love reaction from one of my daughters. I'm not sure how
            closely my family reads the list, but I feel more seen. The app did exactly what it was
            supposed to do.
          </p>
          <h2>The technical decision</h2>
          <p>
            Jobs Done is built in vanilla HTML, CSS, and JavaScript; no framework, no dependencies,
            no build step. That was a deliberate choice. The app is simple: one input, a timestamped
            list, two ways to share. A framework would add complexity without adding value, and it
            would bring maintenance overhead (dependency updates, breaking changes) to a personal
            utility that should just work. It may stay this way.
          </p>
          <p>
            This contrasts with the Periodic Table app, which uses React and TypeScript. Different
            problem, different tool.
          </p>
          <h2>The audit</h2>
          <p>
            After v1 shipped, I recreated it pixel-faithfully in Figma and ran a WCAG 2.2 AA
            accessibility check using the Stark plugin. It reported 6 out of 9 violations. That
            wasn't entirely surprising. The colour palette was deliberately soft, and soft colours
            fail contrast requirements. What the audit made clear was that almost all the violations
            traced back to two tokens: <code>text/muted</code> and <code>accent/gold</code>. Fix
            those two, fix nearly everything.
          </p>
          <p>
            The root cause was in the design system, not scattered across the UI. The fix hasn't
            shipped yet. It's the first task for v2. The diagnosis is done and the solution is
            clear.
          </p>
          <h2>What's next</h2>
          <ul>
            <li>
              Darken <code>text/muted</code> and <code>accent/gold</code> to pass WCAG 2.2 AA
            </li>
            <li>Split into separate HTML, CSS, and JS files</li>
            <li>Add localStorage so the list persists between sessions </li>
            <li>
              Typography refresh: replacing the accidental system font stack with a deliberate
              Google Fonts pairing
            </li>
          </ul>
          <h2>Try it</h2>
          <p>
            <a href="https://jobsdone.kerryclements.com" target="_blank" rel="noreferrer">
              jobsdone.kerryclements.com
            </a>
          </p>
          <p>
            <a href="https://github.com/KerryCX/jobs-done" target="_blank" rel="noreferrer">
              View the code on GitHub
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default JobsDoneCaseStudy
