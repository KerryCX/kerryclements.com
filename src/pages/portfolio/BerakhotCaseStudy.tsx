import { Footer } from '../../components/Footer'
import { Nav } from '../../components/Nav'

export const BerakhotCaseStudy = () => {
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
          <h1 className="case-study__title">Berakhot</h1>
          <p className="case-study__subtitle">Case study</p>
          <h2>Overview</h2>
          <p>
            A blessing lookup tool built in React, Vite, and Tailwind CSS v4. Pick a blessing and
            reveal as much or as little as you need: Hebrew with or without nikkud, transliteration,
            translation, and a self-recorded pronunciation video. It's the first piece of a larger
            project called Jewish Journey.
          </p>
          <h2>The origin</h2>
          <p>
            I'm studying for conversion to Judaism through Liberal Judaism (BWPJC), and I kept
            wanting the same thing during study sessions: a quick way to look up a blessing without
            it giving everything away at once. Nikkud (the vowel marks) can act as a bit of a
            crutch, so I wanted it hideable rather than removed, on request from my Rabbi, who
            advised that it ideally be kept available rather than stripped out entirely. The same
            logic extended naturally to transliteration and translation: show only what you're ready
            to be tested on.
          </p>
          <p>
            I built the first version in an evening, in vanilla HTML, CSS, and JavaScript. A
            dropdown, a fetch call to a JSON file, four toggles. It worked, and I used it.
          </p>
          <h2>The technical decision</h2>
          <p>
            The vanilla version stayed in real use for a while, but I knew it wasn't the version I'd
            want to put in front of a recruiter. So I rebuilt it in React, Vite, and Tailwind CSS
            v4, deliberately, for portfolio purposes, keeping every piece of existing behaviour
            intact: the toggles, the right-to-left Hebrew handling, the YouTube embed.
          </p>
          <p>
            The rebuild surfaced a real bug in the original. The toggles div had a{' '}
            <code>hidden</code> attribute meant to keep it out of view until a blessing was
            selected, but my own CSS rule (
            <code>
              .toggles {'{'} display: flex {'}'}
            </code>
            ) was overriding it, since author styles beat the browser's default hidden behaviour.
            The toggles had been visible the whole time. React's conditional rendering fixed it
            without me trying to, just by not putting the element in the DOM until it was needed. A
            small reminder that the CSS cascade doesn't care what attribute you meant to rely on.
          </p>
          <h2>Where it stands now</h2>
          <p>
            I'll be upfront: the colour palette is rough. I picked it quickly while building the
            vanilla version, going on instinct rather than any deliberate system, a pale cyan
            background, a dark navy for text, a mid blue for borders and accents. It reads fine, but
            it wasn't designed so much as landed on.
          </p>
          <p>
            I'm working through it properly now in Figma: a real colour variable collection mapped
            onto the existing CSS tokens, and a typography pass to go with it. The plan is to treat
            this the same way I treated the Jobs Done audit, name what's weak, then fix it
            deliberately, rather than pretend the first pass was the considered one.
          </p>
          <p>
            What is finished: four of the ten blessings now have a real recording of me saying them
            aloud (Wine/Grape Juice, Bread, Fruit of the Tree, and Fruit of the Ground), embedded
            via YouTube's privacy-enhanced domain so nothing tracks back to a public channel.
          </p>
          <h2>What's next</h2>
          <ul>
            <li>
              Finish the Figma colour and type system, then bring the rebuilt palette into code
            </li>
            <li>Record the remaining six blessings</li>
            <li>A quiz mode, for testing recall rather than just looking things up</li>
            <li>Study guides and downloadable PDFs</li>
          </ul>
          <h2>Try it</h2>
          <p>
            <a href="https://jewishjourney.kerryclements.com" target="_blank" rel="noreferrer">
              jewishjourney.kerryclements.com
            </a>
          </p>
          <p>
            <a href="https://github.com/KerryCX/jewish-journey" target="_blank" rel="noreferrer">
              View the code on GitHub
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default BerakhotCaseStudy
