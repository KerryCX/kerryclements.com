import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import { PeriodicTableQuiz } from './pages/apps/PeriodicTableQuiz'
import { Applications } from './pages/apps'
import { Articles } from './pages/articles'
import { Colours } from './pages/articles/Colours'
import { BodyMassIndex } from './pages/apps/BodyMassIndex'
import { Portfolio } from './pages/portfolio'
import { PeriodicTableCaseStudy } from './pages/portfolio/PeriodicTableCaseStudy'
import { KerryClementsComCaseStudy } from './pages/portfolio/KerryClementsComCaseStudy'

export const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/apps/periodicTableQuiz', element: <PeriodicTableQuiz /> },
        { path: '/apps/BodyMassIndex', element: <BodyMassIndex /> },
        { path: '/articles', element: <Articles /> },
        { path: '/articles/Colours', element: <Colours /> },
      ],
    },
    { path: '/', element: <HomePage /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/portfolio/periodic-table', element: <PeriodicTableCaseStudy /> },
    { path: '/portfolio/kerryclements-com', element: <KerryClementsComCaseStudy /> },
    { path: '/apps', element: <Applications /> },
  ])

  return <RouterProvider router={router} />
}
