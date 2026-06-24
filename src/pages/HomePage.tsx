import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export default function HomePage() {
  return (
    <div className="site">
      <Nav />
      <main>
        <section className="hero" aria-label="Introduction">
          <div className="hero__content">
            <h1>Hi, I'm Kerry</h1>
            <p className="hero__tagline">Front end developer bridging design and code</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
