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
  it('shows the floating Ask about Kerry button on pages other than Home', () => {
    renderAt('/cv')
    expect(screen.getByRole('button', { name: 'Ask about Kerry' })).toBeInTheDocument()
  })

  it('leaves it off Home, which has its own Ask about Kerry section', () => {
    renderAt('/')
    expect(screen.queryByRole('button', { name: 'Ask about Kerry' })).not.toBeInTheDocument()
  })
})
