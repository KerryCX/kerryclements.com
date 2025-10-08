import { Link } from 'react-router-dom'

export const Applications = () => {
  return (
    <>
      Apps listings here
      <p>
        <Link to="/apps/PeriodicTableQuiz">Periodic Table Quiz</Link>
      </p>
      <p>
        <Link to="/apps/BodyMassIndex">BMI Calculator</Link>
      </p>
    </>
  )
}
