import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Applications } from './pages/apps'
import { Portfolio } from './pages/portfolio'
import { PeriodicTableCaseStudy } from './pages/portfolio/PeriodicTableCaseStudy'
import { KerryClementsComCaseStudy } from './pages/portfolio/KerryClementsComCaseStudy'

export const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/portfolio/periodic-table', element: <PeriodicTableCaseStudy /> },
    { path: '/portfolio/kerryclements-com', element: <KerryClementsComCaseStudy /> },
    { path: '/apps', element: <Applications /> },
  ])

  return <RouterProvider router={router} />
}
