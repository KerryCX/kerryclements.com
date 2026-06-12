import { Nav } from '../../components/Nav'
import { cvPath, emailAddress, linkedInLink, appCards } from '../portfolio/constants'

export const Applications = () => {
  return (
    <div className="site">
      <Nav />
      <main>
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__name">Apps</h1>
          </div>
        </section>
        <section className="cards" id="apps">
          {appCards.map((card) => (
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
                <a href={card.appLink} className="card__link" target="_blank" rel="noreferrer">
                  Open app →
                </a>
              </div>
              <div className="card__image">
                <img src={card.image} alt={card.imageAlt} />
              </div>
            </div>
          ))}
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
