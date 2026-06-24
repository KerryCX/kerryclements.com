import { Footer } from '../../components/Footer'
import { Nav } from '../../components/Nav'

export const TimeTrackingCaseStudy = () => {
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
          <h1 className="case-study__title">Time Tracking Dashboard</h1>
          <p className="case-study__subtitle">Case study</p>
          <h2>Overview</h2>
          <p>
            This project started in 2022 as one of my first attempts at React, built around a{' '}
            <a
              href="https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor time tracking dashboard challenge
            </a>
            . I picked it up again in 2026 to finish what I started and modernise the codebase.
          </p>
          <h2>2022 - where I left it</h2>
          <p>
            I built this during a period when React was still new to me. My bootcamp had touched on
            the fundamentals but data wiring was not something I had got comfortable with yet. I got
            the layout working (all six cards, the grid, the colour-coded tops) but the timeframe
            switching was never wired up. All the data was hardcoded as strings directly in the JSX.
            I knew it was unfinished but I had just started a full time job, and with that and
            family commitments, personal projects had to wait.
          </p>
          <p>The code sat on GitHub, undeployed, for four years.</p>
          <h2>2026 - coming back to it</h2>
          <p>
            I have been going through old repositories, tying up loose ends. When I opened this one
            I was immediately confused by how it worked. I tried <code>npm run dev</code> out of
            habit before realising it needed <code>npm start</code>, it was still using Create React
            App, the older React build tool that has since been replaced by Vite. When I got it
            running I was pleased with how the layout looked, but looking at the code told a
            different story. Hardcoded strings in the JSX, no data file, no interactivity. I could
            see exactly where 2022-me had run out of road.
          </p>
          <h2>What I changed</h2>
          <p>
            The first job was modernising the stack. I migrated from CRA to Vite, upgraded from
            React 17 to React 18, and added TypeScript throughout. TypeScript was unfamiliar to me
            in 2022 but I spent three and a half years using it professionally at Scalable Software,
            so that part felt natural.
          </p>
          <p>
            Once the stack was sorted I added the FEM data file, defined typed interfaces for the
            activity data and a <code>TimeFrame</code> union type, and wired up the Daily / Weekly /
            Monthly switching with <code>useState</code>. I also moved the category colours and
            previous period labels into a constants file rather than scattering them through the
            JSX.
          </p>
          <p>
            The last piece was some accessibility improvements - replacing non-interactive{' '}
            <code>div</code> elements with semantic <code>button</code> elements, adding{' '}
            <code>aria-pressed</code> to the timeframe nav, and adding <code>aria-label</code> to
            the card menu buttons.
          </p>
          <h2>Accessibility</h2>
          <p>
            After deploying I ran a Stark audit against the live site and found five contrast
            violations. Daily and Monthly in the timeframe nav were failing because{' '}
            <code>text-indigo-400</code> was too close to the <code>bg-indigo-900</code> background.
            The fix was straightforward, switching inactive buttons to <code>text-indigo-200</code>{' '}
            gave enough separation to pass.
          </p>
          <p>
            The trickier ones were "Report for", "Jeremy", and "Robson" in the profile card. The
            text was white but the background was <code>bg-indigo-500</code>, which only gives
            around 3:1 contrast against white, not enough for normal-sized text. Darkening the
            background to <code>bg-indigo-700</code> brought it up to roughly 5.9:1 and cleared all
            three violations. It was a good reminder that white text is not automatically safe, the
            background matters just as much.
          </p>
          <h2>What I learned</h2>
          <p>
            Coming back to old code is a useful exercise. It is easy to feel like you have not
            progressed, but looking at code you wrote four years ago and immediately seeing what is
            wrong with it is actually a sign of growth. The things that stumped me in 2022( data
            wiring, component structure, TypeScript) are things I now reach for without thinking.
            Professional experience closed that gap more than anything else.
          </p>
          <h2>Try it</h2>
          <p>
            <a href="https://timetracking.kerryclements.com" target="_blank" rel="noreferrer">
              timetracking.kerryclements.com
            </a>
          </p>
          <p>
            <a
              href="https://github.com/KerryCX/time-tracking-dash-react"
              target="_blank"
              rel="noreferrer"
            >
              View the code on GitHub
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default TimeTrackingCaseStudy
