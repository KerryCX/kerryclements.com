import { Footer } from '../../components/Footer'
import { Nav } from '../../components/Nav'

export const KerryClementsComCaseStudy = () => {
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
          <h1 className="case-study__title">kerryclements.com</h1>
          <p className="case-study__subtitle">Case study</p>

          <h2>Overview</h2>
          <p>
            A personal portfolio site, built to show engineering craft and care for the people using
            it. Built with React and TypeScript, designed in Figma with a token-based design system,
            and deployed on Netlify. It includes Ask about Kerry, a chat that answers recruiters'
            questions in my own words, and an online CV.
          </p>

          <h2>The brief</h2>
          <p>
            When I built this site I was between roles and positioning myself for front end and UX
            positions, so I needed a portfolio that showed a front end developer who brings UX
            thinking to their work. The site needed to demonstrate both skills, not just list them.
            I've since broadened my focus to software engineering roles, but those foundations still
            shape how I work.
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
              updated it across every page, now there is no hunting for duplicate markup
            </li>
            <li>
              Kerry Clements in the Nav and Footer links to the homepage, keeping that detail
              consistent without extra effort
            </li>
            <li>
              Contact was removed from the homepage Nav. The link anchors to the footer, which works
              on longer pages, but on the homepage (currently just a hero) the page is too short to
              scroll, making the link appear broken. It will be restored once the homepage has
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
          <p>
            A further Stark audit caught unlabelled region violations across four pages. Any{' '}
            <code>{'<section>'}</code> element implicitly carries a landmark role, and a landmark
            without a name gives screen reader users no way to distinguish or navigate between them.
            An <code>aria-label</code> was added to every <code>{'<section>'}</code> on the
            homepage, portfolio, apps, and contact pages. 98% score, 1 violation on the homepage
            becoming 100% across all four pages after the fix.
          </p>
          <h2>Contact page</h2>
          <p>
            The homepage's Contact link previously anchored to the footer, which only worked once
            the page had enough content to scroll. On a hero-only homepage this appeared to do
            nothing. The fix was a dedicated <code>/contact</code> route, giving room for a proper
            "Connect" section (email, LinkedIn, GitHub, CV download, each with a one-line caption)
            and a separate "Social Media Work" section highlighting content management experience
            for a local synagogue's Instagram account.
          </p>
          <p>
            Key decisions: no contact form, since email is already public site-wide and a form adds
            complexity (spam handling, Netlify Forms) without real benefit. Personal Instagram and X
            were excluded as they didn't serve the portfolio's professional framing. The footer's
            existing links were kept rather than removed, since it acts as a global utility while
            the Connect section adds page-specific context.
          </p>
          <p>
            Building the page also resolved the lingering touch hover issue flagged earlier: an
            unscoped <code>.nav__links a:hover</code> rule, duplicating the one already scoped to{' '}
            <code>@media (hover: hover)</code>, was still applying on touch devices. Removing it
            fixed the stuck-hover state site-wide. Several case study pages also had hardcoded{' '}
            <code>#contact</code> anchors in their nav links, updated to <code>/contact</code>{' '}
            individually since each page's nav configuration differs slightly.
          </p>
          <h2>Discoverability</h2>
          <p>
            While looking at other developers' portfolios with an AI tool, I noticed it could read
            their sites but not mine. All it saw were my meta tags. The site is a client-side React
            app, so the server sends an empty <code>{'<div id="root">'}</code> and the content only
            appears once JavaScript runs. Browsers were fine, but anything that doesn't run
            JavaScript saw a blank page. That includes the AI tools a recruiter might use to
            summarise a candidate, link previews, and some search crawlers.
          </p>
          <p>
            As a quick fix I enabled Netlify's Prerender extension, which serves fully rendered HTML
            to crawlers and AI agents while visitors still get the normal app. I checked it by
            requesting the page with <code>curl</code> and a Googlebot user agent.
          </p>
          <p>
            Reading the rendered HTML for the first time surfaced issues I hadn't spotted in the
            browser:
          </p>
          <ul>
            <li>
              Two cards had alt text copied from the Berakhot card, so screen reader users heard a
              description of the wrong app
            </li>
            <li>
              Every page declared the homepage as its canonical URL, which tells search engines
              those pages are duplicates of the homepage
            </li>
            <li>
              The Skills column headings were <code>{'<h3>'}</code>s with no <code>{'<h2>'}</code>{' '}
              above them, so they nested under the last project card in the heading outline
            </li>
            <li>Every page shared the same title and description</li>
          </ul>
          <p>
            The alt text and heading fixes were quick. For the rest, I added a root layout route
            with a <code>SiteMeta</code> component. Each route carries its own title and description
            in its React Router <code>handle</code>, and <code>SiteMeta</code> renders the{' '}
            <code>{'<title>'}</code>, meta description, canonical, and Open Graph tags. React 19
            hoists these into <code>{'<head>'}</code> on its own, so no extra library was needed. It
            also replaced three hand-written <code>useEffect</code> hooks on the personal pages that
            had been setting the title and canonical directly on the DOM.
          </p>
          <h2>Light and dark themes</h2>
          <p>
            The site launched dark only, while the personal pages had a cream light theme. Clicking
            through to Personal was a jarring jump from near-black to near-white, and nothing
            followed the visitor's own system setting.
          </p>
          <p>
            I added a light theme and a theme switcher in the nav with three options: System, Light
            and Dark. System is the default and follows the device, even if it changes while the
            page is open. Choosing Light or Dark saves that choice on the device. A small inline
            script in <code>index.html</code> sets the theme before the first paint, so there is no
            flash of the wrong colours.
          </p>
          <p>
            The switcher is a radio group inside a <code>{'<fieldset>'}</code>, so screen readers
            announce it as a group and the arrow keys move between options. On small screens it
            collapses into a single button that opens a dropdown with text labels. A Stark scan
            flagged the options for target size, because the real radio inputs were visually hidden
            at 1px. Stretching the invisible inputs over each 28px option fixed it.
          </p>
          <p>
            My first light theme was a straight inversion of the dark one, and it felt empty: a pale
            grey page, white cards, and nothing defining the space. Dark mode gets its depth from
            contrast, but light mode needed structure. I moved to a warm off-white palette and added
            three light-only tokens: a card shadow, a nav shadow and a soft rose wash at the top of
            each page. They are set to <code>none</code> in dark mode, so the dark theme is
            unchanged. The personal pages now use the same colours, so moving between pages feels
            like one site.
          </p>
          <p>
            With both themes in place, the generous spacing stood out more. I replaced the hardcoded
            values with three spacing tokens and tightened the vertical rhythm on every page.
          </p>

          <h2>Ask about Kerry</h2>
          <p>
            Recruiters skim portfolios, and the questions they want answered are usually the same:
            how much experience, which stack, what kind of role, when can I start. I wanted them to
            be able to just ask, and get an answer from me. Ask about Kerry is a chat panel that
            floats in the bottom right corner of every page.
          </p>
          <p>
            The obvious way to build it would have been to connect an AI model. I chose not to. With
            so many AI-written applications and automated replies around, I wanted visitors to know
            they are hearing from a real person. Every answer is written by me, in my own words, so
            it is always accurate and it sounds like me. There is no paid API and nothing that can
            make things up. A note under the question box says so: "Not AI. Answers are matched to
            questions I've written, so it may not know everything."
          </p>
          <p>
            Visitors can tap a suggested question or type their own. Typed questions are matched in
            plain TypeScript. The question is split into words, filler words like "what" and "your"
            are dropped, and each answer is scored on the words it shares. Words in an answer's
            keywords count slightly more than words in its question, and rare words count more than
            common ones, so "remote" outweighs "work". If a word isn't known anywhere, near matches
            count instead, which catches typos and the start of longer words, so "access" finds
            "accessibility".
          </p>
          <p>
            My first version simply counted shared words, and questions about work kept landing on
            the wrong answer because "work" appeared in several of them. Weighting by keywords and
            word rarity fixed it. Later, "remotely" didn't match "remote", so I added light
            stemming.
          </p>
          <p>
            I wanted it to feel like chatting to me rather than searching a FAQ. Answers appear
            after a short typing pause, so it reads like a conversation. After each answer the chat
            suggests follow-up questions, and it never suggests one that has already been answered.
            Some answers have a "tell me more" follow-up for visitors who want more depth, such as
            my work at Europcar or the wizard I built at Scalable. When someone types a question,
            the answer shows which question it is answering, so a vague question like "current"
            still makes sense.
          </p>
          <p>
            The chat has its own colours: a deep rose in the dark theme and a soft pink in the light
            theme, so it stands out from the page while still feeling part of the site. On the pink,
            the muted text and rose accent failed WCAG AA, so the chat redefines those tokens with
            darker shades, inside the chat only.
          </p>
          <p>
            The panel is a labelled dialog. It opens from a button with <code>aria-expanded</code>,
            closes with Escape and returns focus to the button, and new messages are announced
            through a polite live region. On phones, focusing the question box popped up the
            on-screen keyboard and pushed the answer out of view. Now, when the panel is opened or a
            suggestion is tapped on a touch screen, focus stays out of the text box. Keyboard users
            still go straight to it.
          </p>
          <p>
            The questions and answers live in one content file, separate from the component, so
            updating an answer is a text edit. Tests check that every id is unique, that every
            follow-up points to a question that exists, and that no answer contains an em dash. To
            find gaps, I ran 120 things a recruiter might type through the matcher. Only 30 landed
            on a sensible answer at first, so I added keywords and new answers, from salary and
            contract work to how the chat itself works, until most of them did. It now covers 44
            questions.
          </p>

          <h2>Online CV</h2>
          <p>
            My CV used to be a PDF download only. I added a <code>/cv</code> page so recruiters can
            read it in the browser. The page is built from typed content in one file,{' '}
            <code>cv.ts</code>, so the roles, skills and education all come from the same data.
          </p>
          <p>
            I first added a View CV button to the home page hero, next to View my work and Let's
            talk. Three buttons competed for attention, and a CV is something people look for from
            any page, so I moved it into the main nav instead.
          </p>
          <p>
            The download buttons used JavaScript to fetch the PDF and trigger a download. I replaced
            them with plain links using the <code>download</code> attribute. They work without
            JavaScript, can be right-clicked to save or copy, and are the right element for fetching
            a file. It also let me delete a utility function and two CSS rules that only existed to
            make buttons look like links.
          </p>
          <p>
            The skill groups on the CV page sat right on top of each other. Each heading had a top
            margin except the first, using <code>:first-child</code>, but each heading and its list
            sit inside their own <code>{'<div>'}</code>, so every heading was the first child and
            lost its margin. Moving the gap onto the groups fixed it.
          </p>

          <h2>What's next</h2>
          <ul>
            <li>Additional case studies as projects are completed</li>
            <li>Scrolling video walkthrough embedded in this case study</li>
            <li>
              Move from the Prerender extension to build-time prerendering with React Router
              framework mode, so every visitor gets real HTML, not just crawlers
            </li>
            <li>
              Turn Ask about Kerry into a reusable package, so I can add it to my other apps, such
              as Periodic Table and Jewish Journey, with their own questions and colours
            </li>
            <li>
              Voice recordings of my answers in the chat, and a short intro video, so visitors can
              hear and see the real person behind the site
            </li>
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
