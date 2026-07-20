import { Link } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { featuredWorkCards, homepageSkills } from '../pages/portfolio/constants'

const homeNavLinks = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Apps', href: '/apps' },
  { label: 'Personal', href: '/personal' },
  { label: 'Contact', href: '/contact' },
]

export default function HomePage() {
  return (
    <div className="site">
      <Nav links={homeNavLinks} />
      <main>
        <section className="hero" aria-label="Introduction">
          <div className="hero__content">
            <h1 className="hero__name">Hi, I'm Kerry</h1>
            <p className="hero__tagline">Front end developer bridging design and code</p>
            <p className="hero__bio">
              I started in front end, grew into design, and now I work where they meet. I care about
              how things look, how they work, and how they're made.
            </p>
            <div className="hero__ctas">
              <Link to="/portfolio" className="btn btn--primary">
                View my work
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Let's talk
              </Link>
            </div>
          </div>
        </section>

        <section className="story" aria-label="About">
          <p className="story__text">
            I have 3.5 years of experience building production React and TypeScript applications.
            Over time I grew into design and UX, learning Figma, running accessibility audits, and
            thinking carefully about the gap between what's designed and what gets built. I work
            across the full front end stack, from components and tokens to testing and deployment.
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
          <p className="home-cta__heading">Open to front end and UX roles</p>
          <p className="home-cta__sub">Let's talk about what you're building.</p>
          <Link to="/contact" className="btn btn--primary">
            Let's talk
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
