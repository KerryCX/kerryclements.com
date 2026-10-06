import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('renders without crashing and shows the hero heading', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading', { name: "Hi, I'm Kerry" })).toBeInTheDocument()
  })

  it('renders primary CTAs linking to portfolio and contact', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: 'View my work' })).toHaveAttribute('href', '/portfolio')
    expect(screen.getAllByRole('link', { name: "Let's talk" })[0]).toHaveAttribute(
      'href',
      '/contact'
    )
  })

  it('renders Nav and Footer', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByText('© 2026 Kerry Clements')).toBeInTheDocument()
  })
})
