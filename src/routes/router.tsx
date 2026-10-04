import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { Applications } from '../pages/apps'
import ContactPage from '../pages/ContactPage'
import CvPage from '../pages/CvPage'
import NotFoundPage from '../pages/NotFoundPage'
import { personalRoutes } from './personalRoutes'
import { portfolioRoutes } from './portfolioRoutes'
import { ExternalRedirect } from '../components/ExternalRedirect'
import { RootLayout } from './RootLayout'
import { pageMeta } from './pageMeta'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage />, handle: pageMeta.home },
      { path: '/contact', element: <ContactPage />, handle: pageMeta.contact },
      { path: '/cv', element: <CvPage />, handle: pageMeta.cv },
      ...portfolioRoutes,
      { path: '/apps', element: <Applications />, handle: pageMeta.apps },
      ...personalRoutes,
      { path: '/store', element: <ExternalRedirect to="https://store.kerryclements.com" /> },
      { path: '*', element: <NotFoundPage />, handle: pageMeta.notFound },
    ],
  },
])
