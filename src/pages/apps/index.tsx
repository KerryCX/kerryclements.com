import { Link } from 'react-router-dom'

export const Applications = () => {
  return (
    <>
      Apps listings here
      <p>
        <Link to="/apps/periodic-table-case-study">Periodic Table App - Case Study</Link>
      </p>
      <p>
        <Link to="/apps/BodyMassIndex">BMI Calculator</Link>
      </p>
    </>
  )
}
