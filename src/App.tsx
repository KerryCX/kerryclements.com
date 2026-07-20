import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Applications } from './pages/apps'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import { personalRoutes } from './routes/personalRoutes'
import { portfolioRoutes } from './routes/portfolioRoutes'

export const App = () => {
  const ExternalRedirect = ({ to }: { to: string }) => {
    window.location.href = to
    return null
  }
  const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/contact', element: <ContactPage /> },
    ...portfolioRoutes,
    { path: '/apps', element: <Applications /> },
    ...personalRoutes,
    { path: '/store', element: <ExternalRedirect to="https://store.kerryclements.com" /> },
    { path: '*', element: <NotFoundPage /> },
  ])

  return <RouterProvider router={router} />
}
