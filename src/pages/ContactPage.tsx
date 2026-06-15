import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { downloadCV } from '../utils'
import { emailAddress, gitHubLink, linkedInLink } from './portfolio/constants'

const ContactPage = () => {
  return (
    <div className="site contact-page">
      <Nav
        links={[
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Apps', href: '/apps' },
        ]}
      />
      <main>
        <section className="hero">
          <span className="section-label">Contact</span>
          <h1 className="hero__name">Let's Talk</h1>
          <p className="hero__tagline">
            Open to Front End and UX roles. Happy to chat about opportunities, collaborations, or
            anything portfolio-related.
          </p>
        </section>

        <section className="contact-section">
          <span className="section-label section-label--rose">Connect</span>
          <ul className="connect-list">
            <li>
              <a href={`mailto:${emailAddress}`} className="connect-link">
                {emailAddress}
              </a>
              <p className="connect-caption">Get in touch directly</p>
            </li>
            <li>
              <a href={linkedInLink} className="connect-link" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <p className="connect-caption">Professional background and experience</p>
            </li>
            <li>
              <a href={gitHubLink} className="connect-link" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <p className="connect-caption">Code for portfolio projects and case studies</p>
            </li>
            <li>
              <button onClick={downloadCV} className="connect-link connect-link--button">
                Download CV
              </button>
              <p className="connect-caption">Tech experience and skills</p>
            </li>
          </ul>
        </section>

        <section className="contact-section">
          <span className="section-label section-label--sage">Social Media Work</span>
          <ul className="connect-list">
            <li>
              <a
                href="https://www.instagram.com/bwpjc/"
                className="connect-link"
                target="_blank"
                rel="noreferrer"
              >
                BWPJC on Instagram
              </a>
              <p className="connect-caption">Social media management for a Bristol synagogue</p>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
