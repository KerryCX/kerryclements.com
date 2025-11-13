import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { PeriodicTableQuiz } from './pages/apps/PeriodicTableQuiz'
import { Applications } from './pages/apps'
import { Articles } from './pages/articles'
import { Colours } from './pages/articles/Colours'
import { BodyMassIndex } from './pages/apps/BodyMassIndex'

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/apps/periodicTableQuiz', element: <PeriodicTableQuiz /> },
        { path: '/apps/BodyMassIndex', element: <BodyMassIndex /> },
        { path: '/apps', element: <Applications /> },
        { path: '/articles', element: <Articles /> },
        { path: '/articles/Colours', element: <Colours /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
