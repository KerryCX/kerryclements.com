import { Footer } from '../../components/Footer'
import { Nav } from '../../components/Nav'

export const KerryClementsComCaseStudy = () => {
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
            that reflected my positioning: a front end developer who brings UX thinking to their
            work. The site needed to demonstrate both skills, not just list them.
          </p>

          <h2>Design decisions</h2>
          <p>
            I designed the site in Figma before writing any code. A token-based colour system was
            established first, with tokens named by role rather than value: <code>bg/primary</code>,{' '}
            <code>text/secondary</code>, <code>accent/rose</code>, to mirror how CSS custom
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
            The layout is desktop first at 1440px with a 1200px content area. The primary audience
            is recruiters reviewing portfolios on desktop. Full-width case study cards give an
            editorial feel and will scale naturally as more projects are added.
          </p>

          <h2>Development decisions</h2>
          <p>Key decisions made during the build:</p>
          <ul>
            <li>
              The portfolio route was moved outside the Layout component. The portfolio has its own
              nav and doesn't need the existing site header
            </li>
            <li>
              CSS tokens in <code>portfolio.css</code> match Figma colour style names exactly,
              keeping design and code in sync
            </li>
            <li>
              Magic strings extracted to a <code>constants.ts</code> file: email address, LinkedIn
              URL, and CV path are defined once and referenced throughout
            </li>
            <li>
              Work cards and skills are driven by data arrays, so adding a new project or skill
              requires no changes to JSX
            </li>
            <li>
              Nav and Footer extracted as shared components. Adding GitHub to the footer once
              updated it across every page — no hunting for duplicate markup
            </li>
            <li>
              Kerry Clements in the Nav and Footer links to the homepage, keeping that detail
              consistent without extra effort
            </li>
            <li>
              Contact was removed from the homepage Nav. The link anchors to the footer, which works
              on longer pages, but on the homepage — currently just a hero — the page is too short
              to scroll, making the link appear broken. It will be restored once the homepage has
              enough content
            </li>
            <li>
              The data-driven work cards paid off immediately: Jobs Done was added to both the
              portfolio and apps pages with no JSX changes
            </li>
            <li>
              Legacy standalone nav and footer implementations removed once the shared components
              were verified in place
            </li>
          </ul>
          <h2>Mobile responsive pass</h2>
          <p>
            The site was built desktop-first at 1440px and needed a mobile audit before being usable
            on phones. The main issues were fixed horizontal padding (120px on nav, hero, cards, and
            footer), a three-column skills grid, and work cards with a fixed-width side-by-side
            image and content layout, all of which broke down well before 390px.
          </p>
          <p>
            A single breakpoint at 768px addresses these: padding drops to 20px, the skills grid
            collapses to one column, and work cards switch from a row to a column layout with the
            image stacked above the content.
          </p>
          <p>
            The CV download button surfaced a separate cross-browser issue. Linking directly to the
            PDF with a <code>download</code> attribute opens Chrome's built-in PDF viewer instead of
            downloading the file, while the same markup works as expected in Edge. Since recruiters
            are more likely to want the file saved for later (to forward or open in their own PDF
            reader) the fix fetches the PDF as a blob and triggers the download programmatically,
            which bypasses the browser's native viewer entirely and behaves consistently across
            browsers.
          </p>
          <h2>Accessibility</h2>
          <p>
            Alt text was added via the Stark plugin throughout the design, since Figma has no native
            alt text field. A full accessibility check was run on the complete page design with 0
            violations before the build began.
          </p>
          <p>
            After launch, a manual keyboard test revealed the photo lightbox failed WCAG 2.1.1
            (Keyboard). The trigger was a clickable image, unreachable by Tab. The original
            implementation was a custom overlay driven by <code>useState</code>. The fix replaced it
            with a semantic <code>{'<button>'}</code> trigger and a native <code>{'<dialog>'}</code>
            , which provides Escape-to-close, focus containment, and focus return without a library,
            and removed more custom code than it added. The <code>:focus-visible</code> styles match
            the accent token, the close target was enlarged to 44px, and a new{' '}
            <code>bg/overlay</code> token was added to both Figma and CSS for the backdrop.
          </p>
          <p>
            Testing on mobile also surfaced a touch-specific issue: <code>:hover</code> styles on
            the nav photo and nav links were sticking after a tap, since touch interactions can
            trigger <code>:hover</code> on devices with no pointer to "unhover" with. Both rules
            were wrapped in <code>@media (hover: hover)</code> so they only apply on devices with a
            genuine hover capability. The photo button's <code>:focus-visible</code> outline was
            split out from this rule first, so keyboard focus styling remains unaffected on all
            devices.
          </p>
          <h2>What's next</h2>
          <ul>
            <li>
              Homepage — currently a hero with positioning statement; needs further content and
              development
            </li>
            <li>
              Contact page with enough content to justify restoring the Contact link in the homepage
              Nav (currently anchors to the footer, which only works once the homepage has more
              content to scroll through). This should also resolve a lingering "brighter text" hover
              state on the Contact link on touch devices, which the broader hover fix didn't fully
              address for in-page anchors
            </li>
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
      </main>
      <Footer />
    </div>
  )
}

export default KerryClementsComCaseStudy
