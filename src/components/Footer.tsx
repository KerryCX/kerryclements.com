import { cvPath, emailAddress, linkedInLink } from '../pages/portfolio/constants'

export const Footer = () => {
  return (
    <>
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
    </>
  )
}
