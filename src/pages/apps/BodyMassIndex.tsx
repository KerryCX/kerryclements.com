import { Footer } from '../../components/Footer'
import { Nav } from '../../components/Nav'
import '../../styles/styles.css'

export const BodyMassIndex = (): React.JSX.Element => {
  return (
    <div className="site">
      <Nav />
      <main>
        <div className="application-container">
          <div className="main-container">
            <h1>BMI Calculator</h1>
            <h2>Coming soon...</h2>
            <h3>
              With flexibility of the unit of measurement, a calculator to give your BMI result
            </h3>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
