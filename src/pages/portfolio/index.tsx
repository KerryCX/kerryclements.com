import { useState } from 'react'
import '../../styles/portfolio.css'

export const Portfolio = () => {
  const [photoOpen, setPhotoOpen] = useState(false)

  return (
    <div className="portfolio">
      <nav className="nav">
        <div className="nav__brand">
          <img
            src="/kerry-clements-2025.jpeg"
            alt="Kerry Clements"
            className="nav__photo"
            onClick={() => setPhotoOpen(true)}
          />
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
            <a href="/kerry-clements-cv.pdf" className="hero__link">
              Download CV
            </a>
            <a href="mailto:hello@kerryclements.com" className="hero__link">
              hello@kerryclements.com
            </a>
            <a
              href="https://linkedin.com/in/kerrycx"
              className="hero__link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      <section className="work" id="work">
        <span className="section-label">Work</span>
        <div className="work-card">
          <div className="work-card__content">
            <h2 className="work-card__title">Periodic Table App</h2>
            <p className="work-card__description">
              A learning app for chemistry students — flashcard and quiz modes, built with React and
              TypeScript.
            </p>
            <div className="work-card__tags">
              <span className="work-card__tag">React</span>
              <span className="work-card__tag">TypeScript</span>
              <span className="work-card__tag">Figma</span>
              <span className="work-card__tag">WCAG 2.2 AA</span>
            </div>
            <a href="/portfolio/periodic-table" className="work-card__link">
              View case study →
            </a>
          </div>
          <div className="work-card__image">
            <img
              src="/periodic-table-app.png"
              alt="Screenshot of the Periodic Table app mode select screen, showing Flashcard and Quiz options"
            />
          </div>
        </div>
      </section>
      <section className="skills" id="skills">
        <span className="section-label">Skills</span>
        <div className="skills__grid">
          <div className="skills__column">
            <h3 className="skills__heading">Front end</h3>
            <ul className="skills__list">
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>HTML · CSS</li>
              <li>Kendo UI</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div className="skills__column">
            <h3 className="skills__heading">Design</h3>
            <ul className="skills__list">
              <li>Figma</li>
              <li>WCAG 2.2</li>
              <li>UX thinking</li>
            </ul>
          </div>
          <div className="skills__column">
            <h3 className="skills__heading">Tools</h3>
            <ul className="skills__list">
              <li>Vite</li>
              <li>Vitest</li>
              <li>Jest</li>
              <li>Git</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="footer" id="contact">
        <div className="footer__top">
          <span className="footer__name">Kerry Clements</span>
          <a href="/kerry-clements-cv.pdf" className="footer__link">
            Download CV
          </a>
          <a href="mailto:hello@kerryclements.com" className="footer__link">
            hello@kerryclements.com
          </a>
          <a
            href="https://linkedin.com/in/kerrycx"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p className="footer__copyright">© 2025 Kerry Clements</p>
      </footer>
      {photoOpen && (
        <div className="photo-overlay" onClick={() => setPhotoOpen(false)}>
          <div className="photo-overlay__container" onClick={(e) => e.stopPropagation()}>
            <button className="photo-overlay__close" onClick={() => setPhotoOpen(false)}>
              ✕
            </button>
            <img
              src="/kerry-clements-2025.jpeg"
              alt="Kerry Clements"
              className="photo-overlay__img"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio
