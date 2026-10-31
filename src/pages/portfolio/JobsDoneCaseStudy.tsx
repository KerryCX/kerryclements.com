import { Footer } from '../../components/Footer'
import { Nav } from '../../components/Nav'

export const JobsDoneCaseStudy = () => {
  return (
    <div className="site">
      <Nav
        links={[
          { label: '← Back to portfolio', href: '/portfolio' },
          { label: 'Contact', href: '/contact' },
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
            The root cause was in the design system, not scattered across the UI, so the fix was
            small.
          </p>
          <h2>The fix</h2>
          <p>
            I changed <code>text/muted</code> from <code>#8a8378</code> to <code>#6f685e</code>,
            which takes it from 3.6:1 to 5.3:1 against the page background. The gold needed a
            different answer: at 3.0:1 it was fine as decoration but not as small text. I kept the
            original gold in the palette and added a darker <code>accent/gold-text</code> (
            <code>#8a6218</code>, 5.3:1) for the day headings.
          </p>
          <p>
            The app looks almost the same. The tagline, the timestamps and the empty message are a
            little darker, and the day headings are a deeper gold. It still feels soft, and it now
            passes.
          </p>
          <h2>Keeping it fixed</h2>
          <p>
            An audit only tells you where things stood on the day. To stop the same problem coming
            back, I added tests that open the app in a real browser and an axe accessibility scan
            against WCAG 2.2 AA, in both the empty and the populated state. They run in GitHub
            Actions on every pull request, so a colour change that fails contrast can't be merged
            without me seeing it.
          </p>
          <p>
            Before I made any changes, the scan failed on the same two tokens the Figma audit had
            pointed to: the muted text (the tagline, the empty message and the timestamps) at 3.6:1,
            and the day headings at 3.0:1. It measures the code rather than my Figma recreation, so
            the counts differ, but the cause was the same. That was a useful check on the audit
            itself.
          </p>
          <p>
            The tests also cover the behaviour: adding, deleting and clearing jobs, grouping by day,
            the exact text that gets copied for WhatsApp, storage, and the warning before you close
            the tab. I decided what the tests needed to protect and worked with Claude to write
            them. The one thing they can't cover is the email button, because a browser test can't
            observe a <code>mailto:</code> link opening.
          </p>
          <h2>A false alarm</h2>
          <p>
            Once the colours were fixed, the accessibility scan still failed now and then in CI,
            even though it passed on my machine. Each new job fades in over a fraction of a second,
            and the scan sometimes measured text that was only half visible. The app already turns
            that animation off for people who prefer reduced motion, so I ran the tests with that
            setting on. It was a flaky test, not a flaky app, but it was a good reminder to check
            what a failing result is actually measuring before changing the design.
          </p>
          <h2>What's next</h2>
          <ul>
            <li>Split into separate HTML, CSS, and JS files</li>
            <li>Add localStorage so the list persists between sessions</li>
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
