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
            A browser-based Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript. This was
            one of my earliest projects. I returned to it recently to refactor the code and add new
            features, and the gap between the two versions is a useful marker of how my thinking has
            developed.
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
          <h2>Human vs computer mode</h2>
          <p>
            With the state model in place, adding a computer opponent was straightforward. The board
            array and <code>WIN_COMBINATIONS</code> constant were already everything the computer
            needed to reason about the game.
          </p>
          <p>
            I added two difficulty levels, designed around how they feel to play rather than how
            they work technically:
          </p>
          <ul>
            <li>
              <strong>Easy</strong> - picks a random empty square. Plays like a parent who sometimes
              lets their child win.
            </li>
            <li>
              <strong>Hard</strong> - wins if it can, blocks if it must, otherwise picks randomly.
              Plays like a decent human opponent who occasionally loses focus.
            </li>
          </ul>
          <p>
            I considered adding an unbeatable minimax mode but decided against it. Tic Tac Toe is a
            solved game - perfect play always draws, so an unbeatable opponent is only interesting
            if you want to prove you can draw every time. Hard mode is more fun.
          </p>
          <h2>Accessibility</h2>
          <p>
            A Stark WCAG 2.2 AA audit flagged one violation: the <code>&lt;section&gt;</code>{' '}
            wrapping the grid had an implicit ARIA region role but no accessible name. Adding{' '}
            <code>aria-label="Game board"</code> resolved it. The final audit on desktop finished at
            97%, zero violations, 76 passed. A separate mobile audit caught a contrast failure on
            the turn message colour against the pink background, which was resolved by darkening the
            blue and lightening the background. Two potentials remain flagged but are not visible on
            Stark's free tier.
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
