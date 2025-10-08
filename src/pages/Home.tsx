import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h3>Welcome to my Website</h3>
      <p>
        Early days, under construction.
        <br />
        Please look at the periodic table quiz in the apps section, here:{' '}
        <Link to="/apps/PeriodicTableQuiz">Periodic Table Quiz</Link>
      </p>
    </section>
  )
}
