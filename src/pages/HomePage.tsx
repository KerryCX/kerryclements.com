import { useRef } from 'react'
import '../styles/site.css'
import { cvPath, emailAddress, linkedInLink } from '../pages/portfolio/constants'

export default function HomePage() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  return (
    <div className="portfolio">
      <nav className="nav" aria-label="Main">
        <div className="nav__brand">
          <button
            type="button"
            className="nav__photo-button"
            onClick={() => dialogRef.current?.showModal()}
            aria-label="View larger photo of Kerry Clements"
          >
            <img src="/kerry-clements-2025.jpeg" alt="" className="nav__photo" />
          </button>
          <span className="nav__name">Kerry Clements</span>
        </div>
        <ul className="nav__links">
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/apps">Apps</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
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
      <dialog
        ref={dialogRef}
        className="photo-overlay"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close()
        }}
      >
        <button
          type="button"
          className="photo-overlay__close"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close photo"
        >
          ✕
        </button>
        <img src="/kerry-clements-2025.jpeg" alt="Kerry Clements" className="photo-overlay__img" />
      </dialog>
    </div>
  )
}
