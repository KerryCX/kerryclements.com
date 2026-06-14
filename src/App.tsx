import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Applications } from './pages/apps'
import { Portfolio } from './pages/portfolio'
import { PeriodicTableCaseStudy } from './pages/portfolio/PeriodicTableCaseStudy'
import { KerryClementsComCaseStudy } from './pages/portfolio/KerryClementsComCaseStudy'
import { JobsDoneCaseStudy } from './pages/portfolio/JobsDoneCaseStudy'
import { ShoppingListCaseStudy } from './pages/portfolio/ShoppingListCaseStudy'

export const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/portfolio/periodic-table', element: <PeriodicTableCaseStudy /> },
    { path: '/portfolio/kerryclements-com', element: <KerryClementsComCaseStudy /> },
    { path: '/portfolio/jobs-done', element: <JobsDoneCaseStudy /> },
    { path: '/portfolio/shopping-list', element: <ShoppingListCaseStudy /> },
    { path: '/apps', element: <Applications /> },
  ])

  return <RouterProvider router={router} />
}
