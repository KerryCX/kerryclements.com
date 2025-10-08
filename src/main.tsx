import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PeriodicTableQuiz from './pages/PeriodicTableQuiz'
import { Articles } from './pages/articles/Articles'
import { Article1 } from './pages/articles/Article1'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/periodicTableQuiz', element: <PeriodicTableQuiz /> },
      { path: '/articles', element: <Articles /> },
      { path: '/articles/Article1', element: <Article1 /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
