import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PeriodicTableQuiz from './pages/PeriodicTableQuiz'
import { Articles } from './pages/articles/Articles'
import { Article1 } from './pages/articles/Article1'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> }, // homepage
        { path: '/periodic-table-quiz', element: <PeriodicTableQuiz /> }, // your previous app
        { path: '/articles', element: <Articles /> },
        { path: '/articles/article1', element: <Article1 /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
