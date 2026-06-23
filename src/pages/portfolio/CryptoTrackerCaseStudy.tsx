import { Footer } from '../../components/Footer'
import { Nav } from '../../components/Nav'

export const CryptoTrackerCaseStudy = () => {
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
          <h1 className="case-study__title">Crypto Tracker</h1>
          <p className="case-study__subtitle">Case study</p>
          <h2>Overview</h2>
          <p>
            A live crypto market dashboard built to demonstrate KendoReact Grid skills from a
            previous role. It shows the top 50 coins by market cap in a sortable, filterable data
            grid. Clicking any row opens a detail view with key stats and a 7-day price history
            chart powered by the CoinGecko public API.
          </p>
          <h2>The reason for building it</h2>
          <p>
            At Scalable I spent a lot of time binding KendoReact components to API data to build
            grids and charts for financial dashboards. I wanted a portfolio project that showed that
            work directly, rather than asking a recruiter to take my word for it.
          </p>
          <h2>Licensing decisions</h2>
          <p>
            KendoReact is split into free and commercial tiers. The Grid has a genuinely free,
            production-safe tier covering sorting, filtering, and paging. Charts do not; there is no
            free tier, and an unlicensed chart shows a page-level banner on every visit.
          </p>
          <p>
            Rather than carry that banner on a live portfolio project, I paired the free Kendo Grid
            with Recharts for the price history chart. This is a realistic pattern in production
            codebases, where teams mix vendor and open-source tooling rather than buying every
            component from one supplier. The case study is honest about that decision rather than
            pretending Recharts was the obvious first choice.
          </p>
          <h2>Things I hit along the way</h2>
          <p>
            Vite's default TypeScript config has <code>verbatimModuleSyntax</code> enabled, which
            requires <code>import type</code> for type-only imports. The error surfaced in the
            browser console rather than the terminal, which was a good reminder to check both.
          </p>
          <p>
            The <code>cells.data</code> prop on <code>GridColumn</code> triggers a premium feature
            warning in KendoReact v15. The free tier does not support per-cell custom renderers
            through that API. The fix was to pre-format the data in the processing step before
            handing it to the grid, rather than formatting inside the cell. That also simplified the
            column definitions.
          </p>
          <p>
            KendoReact v15 no longer applies the <code>k-alt</code> class to alternating rows.
            Targeting it in CSS had no effect. The fix was CSS <code>nth-child</code> instead, which
            turned out to be simpler.
          </p>
          <p>
            Recharts props only accept plain strings, not CSS custom properties. A{' '}
            <code>chartTheme.ts</code> constants file bridges that gap, with comments mapping each
            value back to its CSS variable so the relationship stays explicit when colours change.
          </p>
          <h2>Securing the API key</h2>
          <p>
            After adding a CoinGecko Demo API key, I noticed it was visible in the browser's Network
            tab. Because this is a Vite frontend app, environment variables get bundled into the
            client-side JavaScript at build time, so anyone inspecting the network requests could
            read the key.
          </p>
          <p>
            The fix was to proxy the API calls through Netlify Functions. The frontend now calls its
            own <code>/api/markets</code>, <code>/api/coin/:id</code>, and{' '}
            <code>/api/price-history/:id</code> endpoints. The functions make the CoinGecko requests
            server-side with the key in the environment, so it never reaches the client bundle.
          </p>
          <h2>What's next</h2>
          <ul>
            <li>Vitest unit tests for the hooks and formatters</li>
            <li>Allow the user to switch between more coins (currently fixed at top 50)</li>
            <li>Light mode and system preference support</li>
          </ul>
          <h2>Try it</h2>
          <p>
            <a href="https://cryptotracker.kerryclements.com" target="_blank" rel="noreferrer">
              cryptotracker.kerryclements.com
            </a>
          </p>
          <p>
            <a href="https://github.com/KerryCX/crypto-tracker" target="_blank" rel="noreferrer">
              View the code on GitHub
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default CryptoTrackerCaseStudy
