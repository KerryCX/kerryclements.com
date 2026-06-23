import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Applications } from './pages/apps'
import { Portfolio } from './pages/portfolio'
import { PeriodicTableCaseStudy } from './pages/portfolio/PeriodicTableCaseStudy'
import { KerryClementsComCaseStudy } from './pages/portfolio/KerryClementsComCaseStudy'
import { JobsDoneCaseStudy } from './pages/portfolio/JobsDoneCaseStudy'
import { ShoppingListCaseStudy } from './pages/portfolio/ShoppingListCaseStudy'
import ContactPage from './pages/ContactPage'
import { BerakhotCaseStudy } from './pages/portfolio/BerakhotCaseStudy'
import { CryptoTrackerCaseStudy } from './pages/portfolio/CryptoTrackerCaseStudy'
import { TicTacToeCaseStudy } from './pages/portfolio/TicTacToeCaseStudy'
import NotFoundPage from './pages/NotFoundPage'

export const App = () => {
  const ExternalRedirect = ({ to }: { to: string }) => {
    window.location.href = to
    return null
  }
  const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/contact', element: <ContactPage /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/portfolio/periodic-table', element: <PeriodicTableCaseStudy /> },
    { path: '/portfolio/kerryclements-com', element: <KerryClementsComCaseStudy /> },
    { path: '/portfolio/jobs-done', element: <JobsDoneCaseStudy /> },
    { path: '/portfolio/shopping-list', element: <ShoppingListCaseStudy /> },
    { path: '/portfolio/berakhot', element: <BerakhotCaseStudy /> },
    { path: '/portfolio/crypto-tracker', element: <CryptoTrackerCaseStudy /> },
    { path: '/portfolio/tic-tac-toe', element: <TicTacToeCaseStudy /> },
    { path: '/apps', element: <Applications /> },
    { path: '/store', element: <ExternalRedirect to="https://store.kerryclements.com" /> },
    { path: '*', element: <NotFoundPage /> },
  ])

  return <RouterProvider router={router} />
}
