import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import CvPage from './CvPage'
import { cv } from '../content/cv'

const renderCvPage = (): void => {
  render(
    <MemoryRouter>
      <CvPage />
    </MemoryRouter>
  )
}

describe('CvPage', () => {
  it('renders the name as the only level one heading', () => {
    renderCvPage()
    const levelOneHeadings = screen.getAllByRole('heading', { level: 1 })
    expect(levelOneHeadings).toHaveLength(1)
    expect(levelOneHeadings[0]).toHaveTextContent('Kerry Clements')
  })

  it('renders every CV section as a level two heading, in order', () => {
    renderCvPage()
    const sectionHeadings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)
    expect(sectionHeadings).toEqual([
      'Profile',
      'Skills',
      'Experience',
      'Earlier career',
      'Projects',
      'Certifications',
      'Education',
    ])
  })

  it('renders a button to download the PDF version', () => {
    renderCvPage()
    expect(screen.getByRole('button', { name: 'Download CV (PDF)' })).toBeInTheDocument()
  })

  it('renders each role with its organisation and dates', () => {
    renderCvPage()
    const scalable = screen.getByRole('region', { name: 'Software Engineer, Scalable' })
    expect(
      within(scalable).getByRole('heading', { level: 3, name: 'Software Engineer, Scalable' })
    ).toBeInTheDocument()
    expect(within(scalable).getByText('April 2022 – August 2025')).toBeInTheDocument()
  })

  it('links every project to its live site or repository in a new tab', () => {
    renderCvPage()
    cv.projects.forEach((project) => {
      const link = screen.getByRole('link', { name: project.link.label })
      expect(link).toHaveAttribute('href', project.link.href)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    })
  })

  it('does not publish a phone number', () => {
    const { container } = render(
      <MemoryRouter>
        <CvPage />
      </MemoryRouter>
    )
    expect(container.textContent).not.toMatch(/\b0\d{4}\s?\d{6}\b/)
  })
})
