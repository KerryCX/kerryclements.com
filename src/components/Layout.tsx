import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <header>
        <h3>Kerry Clements</h3>
        <nav>
          <Link to="/">Home</Link> |<Link to="/apps">Apps</Link> |
          <Link to="/articles">Articles</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© 2025 Kerry Clements</footer>
    </div>
  )
}
