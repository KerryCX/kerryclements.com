import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { AskKerryLauncher } from './AskKerryLauncher'

const getLauncher = (): HTMLElement => screen.getByRole('button', { name: 'Ask about Kerry' })

describe('AskKerryLauncher', () => {
  it('starts closed', () => {
    render(<AskKerryLauncher />)
    expect(getLauncher()).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens the panel and moves focus to the question box', async () => {
    const user = userEvent.setup()
    render(<AskKerryLauncher />)

    await user.click(getLauncher())

    expect(getLauncher()).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('dialog', { name: 'Ask about Kerry' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Your question' })).toHaveFocus()
  })

  it('points the launcher at the panel it controls', () => {
    render(<AskKerryLauncher />)
    const panelId = getLauncher().getAttribute('aria-controls')
    expect(panelId).toBeTruthy()
    expect(document.getElementById(panelId ?? '')).not.toBeNull()
  })

  it('closes with the close button and returns focus to the launcher', async () => {
    const user = userEvent.setup()
    render(<AskKerryLauncher />)

    await user.click(getLauncher())
    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(getLauncher()).toHaveFocus()
  })

  it('closes on Escape and returns focus to the launcher', async () => {
    const user = userEvent.setup()
    render(<AskKerryLauncher />)

    await user.click(getLauncher())
    await user.keyboard('{Escape}')

    expect(getLauncher()).toHaveAttribute('aria-expanded', 'false')
    expect(getLauncher()).toHaveFocus()
  })
})
