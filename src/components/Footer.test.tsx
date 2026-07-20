import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'
import { emailAddress, linkedInLink, gitHubLink } from '../pages/portfolio/constants'

describe('Footer', () => {
  it('renders the brand name linking home', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Kerry Clements' })).toHaveAttribute('href', '/')
  })

  it('renders the email, LinkedIn, and GitHub links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: emailAddress })).toHaveAttribute(
      'href',
      `mailto:${emailAddress}`
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', linkedInLink)
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', gitHubLink)
  })

  it('renders a download CV button', () => {
    render(<Footer />)
    expect(screen.getByRole('button', { name: 'Download CV' })).toBeInTheDocument()
  })

  it('renders the copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText('© 2026 Kerry Clements')).toBeInTheDocument()
  })
})
