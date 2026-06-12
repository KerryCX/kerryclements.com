import '../styles/site.css'
import { cvPath, emailAddress, linkedInLink } from '../pages/portfolio/constants'
import { Nav } from '../components/Nav'

export default function HomePage() {
  return (
    <div className="site">
      <Nav
        links={[
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Apps', href: '/apps' },
        ]}
      />
      <main>
        <section className="hero">
          <div className="hero__content">
            <h1>Hi, I'm Kerry</h1>
            <p className="hero__tagline">Front end developer bridging design and code</p>
          </div>
        </section>
      </main>
      <footer className="footer" id="contact">
        <div className="footer__top">
          <span className="footer__name">Kerry Clements</span>
          <a href={cvPath} className="footer__link">
            Download CV
          </a>
          <a href={`mailto:${emailAddress}`} className="footer__link">
            {emailAddress}
          </a>
          <a href={linkedInLink} className="footer__link" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="footer__copyright">© 2026 Kerry Clements</p>
      </footer>
    </div>
  )
}
