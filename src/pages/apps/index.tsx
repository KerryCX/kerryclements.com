import { Footer } from '../../components/Footer'
import { Nav } from '../../components/Nav'
import { appCards } from '../portfolio/constants'

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
                <a href={card.appLink}>
                  <img src={card.image} alt={card.imageAlt} />
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
