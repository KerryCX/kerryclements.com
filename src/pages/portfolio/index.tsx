import { Link } from 'react-router-dom'

export const Portfolio = () => {
  return (
    <section>
      <h1>Portfolio</h1>
      <p>Case studies documenting my design and development process.</p>
      <ul>
        <li>
          <Link to="/portfolio/periodic-table">Periodic Table App</Link>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio
