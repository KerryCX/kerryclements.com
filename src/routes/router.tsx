import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { Applications } from '../pages/apps'
import ContactPage from '../pages/ContactPage'
import NotFoundPage from '../pages/NotFoundPage'
import { personalRoutes } from './personalRoutes'
import { portfolioRoutes } from './portfolioRoutes'
import { ExternalRedirect } from '../components/ExternalRedirect'

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/contact', element: <ContactPage /> },
  ...portfolioRoutes,
  { path: '/apps', element: <Applications /> },
  ...personalRoutes,
  { path: '/store', element: <ExternalRedirect to="https://store.kerryclements.com" /> },
  { path: '*', element: <NotFoundPage /> },
])
