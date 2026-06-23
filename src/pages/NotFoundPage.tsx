import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="site">
      <div className="hero">
        <p className="hero__tagline">404</p>
        <h1 className="hero__name">Page not found</h1>
        <p className="hero__bio">This page doesn't exist — or it may have moved.</p>
        <div className="hero__links">
          <Link to="/" className="hero__link">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
