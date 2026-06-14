import { Footer } from '../../components/Footer'
import { Nav } from '../../components/Nav'

export const ShoppingListCaseStudy = () => {
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
          <h1 className="case-study__title">Shopping List App</h1>
          <p className="case-study__subtitle">Case study</p>
          <h2>Overview</h2>
          <p>
            A shopping list app built with React, TypeScript, and Vite, featuring item management,
            persistence, and reordering. This started as a recruitment coding challenge and became a
            portfolio rebuild: same brief, no time limit, built with my current stack and tested
            throughout.
          </p>
          <h2>The origin</h2>
          <p>
            This began as a 6-hour coding challenge for a front end developer role I applied for.
            The brief listed ten user stories, from basic CRUD through to budget tracking, sharing,
            and authentication. I aimed for five stories in the time available and completed three.
            The feedback was that it wasn't enough for the time given, which was fair. The code had
            real issues: a direct state mutation bug, dead code, and minimal structure.
          </p>
          <p>
            I didn't get the role, and stepped away from job hunting for a while afterwards. I
            always intended to come back to this project once I had the headspace for it.
          </p>
          <h2>The rebuild</h2>
          <p>
            Returning to it for my portfolio, I rebuilt from scratch rather than patching the
            original. The original was Create React App; this rebuild uses Vite, React, and
            TypeScript, matching my current stack across other portfolio projects.
          </p>
          <p>
            Working with Claude as a pair-programming collaborator, I defined the data model,
            planned a story-by-story build where each story is a working, tested, committed
            increment, and wrote tests alongside each feature using Vitest and Testing Library. This
            is an honest record of an AI-assisted build: I made the scoping and design decisions,
            and used Claude to generate code, explain concepts, and catch issues along the way.
          </p>
          <h2>Key decisions</h2>
          <p>
            <strong>TypeScript rebuild over extending the original.</strong> The original had a
            genuine React bug (direct state mutation) and minimal structure. A clean rebuild in my
            current stack was faster and more honest than patching code I'd already flagged as weak.
          </p>
          <p>
            <strong>Story-by-story commits, never broken.</strong> Each story is its own commit, and
            the app is runnable and tested at every step. This makes the git history a readable
            record of incremental delivery.
          </p>
          <p>
            <strong>Up/down buttons instead of drag-and-drop for reordering.</strong> I originally
            planned drag-and-drop, but chose simple up/down buttons instead. They're trivial to
            implement, need no extra dependency, and are naturally accessible via keyboard and
            screen reader without additional configuration. Accessibility-by-default felt like the
            stronger choice for a portfolio piece demonstrating UX thinking, not just feature
            completeness.
          </p>
          <h2>Styling pass</h2>
          <p>
            With the core functionality built and tested, I did a quick styling pass: a small set of
            colour and spacing tokens, adapted from the palette I used in my original 6-hour
            attempt. The result is a cohesive, branded look without a full Figma design process,
            "before" screenshots saved for comparison with a future visual design pass.
          </p>
          <h2>What's next</h2>
          <ul>
            <li>Budget tracking: item cost, running total, spending limit with alert</li>
            <li>A full visual design pass in Figma, building on the current styling</li>
            <li>Category support, enabling sort by category, cost, or alphabetically</li>
            <li>
              Drag-and-drop reordering as a progressive enhancement alongside the existing buttons
            </li>
          </ul>
          <h2>Try it</h2>
          <p>
            <a href="https://shopping-list.kerryclements.com" target="_blank" rel="noreferrer">
              shopping-list.kerryclements.com
            </a>
          </p>
          <p>
            <a href="https://github.com/KerryCX/shopping-list-app" target="_blank" rel="noreferrer">
              View the code on GitHub
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default ShoppingListCaseStudy
