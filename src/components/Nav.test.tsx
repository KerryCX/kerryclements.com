import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { Nav } from './Nav'

describe('Nav', () => {
  it('renders the brand name linking home', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: 'Kerry Clements' })).toHaveAttribute('href', '/')
  })

  it('renders the default nav links', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '/portfolio')
    expect(screen.getByRole('link', { name: 'Apps' })).toHaveAttribute('href', '/apps')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
  })

  it('renders custom links when provided', () => {
    render(
      <MemoryRouter>
        <Nav links={[{ label: 'Custom', href: '/custom' }]} />
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: 'Custom' })).toHaveAttribute('href', '/custom')
    expect(screen.queryByRole('link', { name: 'Portfolio' })).not.toBeInTheDocument()
  })

  it('has an accessible button for viewing the larger photo', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
    expect(
      screen.getByRole('button', { name: 'View larger photo of Kerry Clements' })
    ).toBeInTheDocument()
  })
})
