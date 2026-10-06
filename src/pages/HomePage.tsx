import { Link } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { featuredWorkCards, homepageSkills } from '../pages/portfolio/constants'

export default function HomePage() {
  return (
    <div className="site">
      <Nav />
      <main>
        <section className="hero" aria-label="Introduction">
          <div className="hero__content">
            <h1 className="hero__name">Hi, I'm Kerry</h1>
            <p className="hero__tagline">
              Software engineer building accessible, well-tested web applications
            </p>
            <p className="hero__bio">
              I'm a Bristol-based software engineer. The work I enjoy most sits where good code
              meets good user experience.
            </p>
            <div className="hero__ctas">
              <Link to="/portfolio" className="btn btn--primary">
                View my work
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Let's talk
              </Link>
              <Link to="/cv" className="btn btn--outline">
                View CV
              </Link>
            </div>
          </div>
        </section>

        <section className="story" aria-label="About">
          <p className="story__text">
            7 years of commercial software development, most recently 3+ years building
            production React and TypeScript applications, from data-dense analytics features to REST
            API integrations. On my own projects I've built APIs in Node.js and Python, set up CI
            with GitHub Actions, and run full WCAG 2.2 AA accessibility audits.
          </p>
          <ul className="story__skills" aria-label="Skills">
            {homepageSkills.map((skill) => (
              <li key={skill} className="story__skill-tag">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="featured" aria-label="Featured work">
          <div className="featured__header">
            <span className="section-label">Featured work</span>
            <Link to="/portfolio" className="featured__all-link">
              See all work
            </Link>
          </div>
          <div className="featured__grid">
            {featuredWorkCards.map((card) => (
              <article key={card.title} className="featured-card">
                <div className="featured-card__image">
                  <img src={card.image} alt={card.imageAlt} />
                </div>
                <div className="featured-card__content">
                  <h2 className="featured-card__title">{card.title}</h2>
                  <p className="featured-card__description">{card.description}</p>
                  <ul className="featured-card__tags" aria-label="Technologies">
                    {card.tags.map((tag) => (
                      <li key={tag} className="card__tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link to={card.caseStudyLink} className="card__link">
                    View case study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-cta" aria-label="Contact">
          <p className="home-cta__heading">
            Open to frontend, full stack and product engineering roles
          </p>
          <p className="home-cta__sub">
            Based in Bristol, open to hybrid in Greater Bristol or remote across the UK.
          </p>
          <Link to="/contact" className="btn btn--primary">
            Let's talk
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
