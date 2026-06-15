import { emailAddress, linkedInLink, gitHubLink } from '../pages/portfolio/constants'
import { downloadCV } from '../utils'

export const Footer = () => {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="footer__top">
          <span className="footer__name">
            <a href="/" className="nav__name">
              Kerry Clements
            </a>
          </span>
          <button className="footer__cv-button" onClick={downloadCV}>
            Download CV
          </button>
          <a href={`mailto:${emailAddress}`} className="footer__link">
            {emailAddress}
          </a>
          <a href={linkedInLink} className="footer__link" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={gitHubLink} className="footer__link" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p className="footer__copyright">© 2026 Kerry Clements</p>
      </footer>
    </>
  )
}
