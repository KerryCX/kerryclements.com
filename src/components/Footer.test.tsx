import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'
import { cvPath, emailAddress, linkedInLink, gitHubLink } from '../pages/portfolio/constants'

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

  it('renders a download CV link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Download CV' })
    expect(link).toHaveAttribute('href', cvPath)
    expect(link).toHaveAttribute('download')
  })

  it('renders the copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText('© 2026 Kerry Clements')).toBeInTheDocument()
  })
})
