import { Footer } from '../../components/Footer'
import { Nav } from '../../components/Nav'

export const TicTacToeCaseStudy = () => {
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
          <h1 className="case-study__title">Tic Tac Toe</h1>
          <p className="case-study__subtitle">Case study</p>
          <h2>Overview</h2>
          <p>
            A two-player browser game built with vanilla HTML, CSS, and JavaScript. This was one of
            my earliest projects. I returned to it recently to refactor the code, and the gap
            between the two versions is a useful marker of how my thinking has developed.
          </p>
          <h2>The original code</h2>
          <p>
            The original worked, but game state lived in the DOM. Rather than tracking the board in
            a JavaScript data structure, the code read <code>.innerText</code> back from the squares
            to figure out what had been played.
          </p>
          <p>
            Win detection was the most visible symptom of this. Every square had its own block of
            conditional logic, amounting to over 90 lines of repetitive code. It also contained a
            bug: if the centre square was the last move to complete the middle row, no win was
            declared. That combination was missing from the centre square's branch.
          </p>
          <h2>The refactor</h2>
          <p>
            The fix was to separate state from the DOM. I introduced a <code>board</code> array as
            the single source of truth and a <code>WIN_COMBINATIONS</code> constant listing all
            eight winning lines as index triplets. Win detection became a five-line function. The
            90-line <code>checkIfWinner</code> was gone and the bug was fixed.
          </p>
          <p>
            Other changes followed from that foundation. CSS classes replaced inline style
            manipulation for win and draw highlighting. <code>classList.add</code> and{' '}
            <code>classList.remove</code> replaced <code>classList.toggle</code>, which is fragile
            if state ever gets out of sync. Loop variables got <code>let</code>. Reset was rewritten
            to always return to a consistent starting state.
          </p>
          <h2>Accessibility</h2>
          <p>
            A Stark WCAG 2.2 AA audit flagged one violation: the <code>&lt;section&gt;</code>{' '}
            wrapping the grid had an implicit ARIA region role but no accessible name. Adding{' '}
            <code>aria-label="Game board"</code> resolved it. The audit finished at 94%, zero
            violations, 34 checks passed. Two potentials were flagged but are not visible on Stark's
            free tier, investigating them is on the to-do list.
          </p>
          <h2>Why vanilla JS</h2>
          <p>
            This is a vanilla JS project alongside Jobs Done. I could have rewritten it in React but
            wanted to improve it on its own terms. The same principles apply regardless of
            framework: state managed separately from the UI, logic that is easy to follow and test,
            accessibility considered as part of the build.
          </p>
          <h2>What's next</h2>
          <ul>
            <li>Vitest unit tests for the game logic</li>
            <li>Score tracking across games</li>
            <li>Human vs computer mode</li>
          </ul>
          <h2>Try it</h2>
          <p>
            <a href="https://tictactoe.kerryclements.com" target="_blank" rel="noreferrer">
              tictactoe.kerryclements.com
            </a>
          </p>
          <p>
            <a href="https://github.com/KerryCX/tic-tac-toe" target="_blank" rel="noreferrer">
              View the code on GitHub
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default TicTacToeCaseStudy
