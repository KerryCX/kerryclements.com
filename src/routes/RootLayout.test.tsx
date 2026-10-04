import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { RootLayout } from './RootLayout'

const renderAt = (path: string): void => {
  const router = createMemoryRouter(
    [
      {
        element: <RootLayout />,
        children: [
          { path: '/', element: <p>Home</p> },
          { path: '/cv', element: <p>CV</p> },
        ],
      },
    ],
    { initialEntries: [path] }
  )
  render(<RouterProvider router={router} />)
}

describe('RootLayout', () => {
  it.each(['/', '/cv'])('shows the floating Ask about Kerry button on %s', (path) => {
    renderAt(path)
    expect(screen.getByRole('button', { name: 'Ask about Kerry' })).toBeInTheDocument()
  })
})
