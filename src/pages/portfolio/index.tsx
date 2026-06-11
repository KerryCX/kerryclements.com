import { useRef } from 'react'
import '../../styles/portfolio.css'
import { cvPath, emailAddress, linkedInLink, skills, workCards } from './constants'

export const Portfolio = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <div className="portfolio">
      <nav className="nav">
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
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__name">Kerry Clements</h1>
          <p className="hero__tagline">Front end developer bridging design and code</p>
          <p className="hero__bio">
            I started as a front end developer and recently found a passion for design and UX. I
            bring UX thinking to front end development.
          </p>
          <div className="hero__links">
            <a href={cvPath} className="hero__link">
              Download CV
            </a>
            <a href={`mailto:${emailAddress}`} className="hero__link">
              {emailAddress}
            </a>
            <a href={linkedInLink} className="hero__link" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      <section className="work" id="work">
        <span className="section-label">Work</span>
        {workCards.map((card) => (
          <div className="work-card" key={card.title}>
            <div className="work-card__content">
              <h2 className="work-card__title">{card.title}</h2>
              <p className="work-card__description">{card.description}</p>
              <div className="work-card__tags">
                {card.tags.map((tag) => (
                  <span key={tag} className="work-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={card.caseStudyLink} className="work-card__link">
                View case study →
              </a>
            </div>
            <div className="work-card__image">
              <img src={card.image} alt={card.imageAlt} />
            </div>
          </div>
        ))}
      </section>
      <section className="skills" id="skills">
        <span className="section-label">Skills</span>
        <div className="skills__grid">
          {skills.map((column) => (
            <div className="skills__column" key={column.heading}>
              <h3 className="skills__heading">{column.heading}</h3>
              <ul className="skills__list">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
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
        <p className="footer__copyright">© 2025 Kerry Clements</p>
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

export default Portfolio
