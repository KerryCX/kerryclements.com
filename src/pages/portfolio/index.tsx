import { cvPath, emailAddress, linkedInLink, skills, workCards } from './constants'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'

export const Portfolio = () => {
  return (
    <div className="site">
      <Nav />
      <main>
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
        <section className="cards" id="work">
          <span className="section-label">Work</span>
          {workCards.map((card) => (
            <div className="card" key={card.title}>
              <div className="card__content">
                <h2 className="card__title">{card.title}</h2>
                <p className="card__description">{card.description}</p>
                <div className="card__tags">
                  {card.tags.map((tag) => (
                    <span key={tag} className="card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={card.caseStudyLink} className="card__link">
                  View case study →
                </a>
              </div>
              <div className="card__image">
                <a href={card.caseStudyLink}>
                  <img src={card.image} alt={card.imageAlt} />
                </a>
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
      </main>
      <Footer />
    </div>
  )
}

export default Portfolio
