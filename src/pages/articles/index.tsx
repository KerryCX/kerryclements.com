import { Link } from 'react-router-dom'

export const Articles = () => {
  return (
    <>
      Articles listing will go here
      <p>
        <Link to="/articles/colours">Messing around with colours</Link>
      </p>
      <p>
        <Link to="/articles/february02">Monday 2nd February 2026</Link>
      </p>
    </>
  )
}
