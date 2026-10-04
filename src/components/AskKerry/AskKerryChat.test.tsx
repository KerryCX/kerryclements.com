import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { AskKerryChat, TYPING_DELAY_MS } from './AskKerryChat'
import { askKerryEntries, askKerryGreeting, askKerryStarters } from '../../content/askKerry'

const entry = (id: string) => {
  const found = askKerryEntries.find((item) => item.id === id)
  if (!found) throw new Error(`No entry with id ${id}`)
  return found
}

const setup = () => {
  const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
  render(<AskKerryChat />)
  return user
}

const finishTyping = (): void => {
  act(() => {
    vi.advanceTimersByTime(TYPING_DELAY_MS)
  })
}

const conversation = (): HTMLElement => screen.getByRole('list', { name: 'Conversation' })

describe('AskKerryChat', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('starts with a greeting and the starter questions', () => {
    setup()
    expect(within(conversation()).getByText(askKerryGreeting.text)).toBeInTheDocument()
    const suggestions = within(screen.getByRole('list', { name: 'Suggested questions' }))
    expect(suggestions.getAllByRole('button')).toHaveLength(askKerryStarters.length)
  })

  it('announces the conversation politely to screen readers', () => {
    setup()
    expect(conversation()).toHaveAttribute('aria-live', 'polite')
  })

  it('shows the question, a typing pause, then the answer and follow-ups', async () => {
    const user = setup()
    const experience = entry('experience')

    await user.click(screen.getByRole('button', { name: experience.question }))

    expect(within(conversation()).getByText(experience.question)).toBeInTheDocument()
    expect(screen.getByTestId('typing-indicator')).toBeInTheDocument()
    expect(within(conversation()).queryByText(experience.answer.text)).not.toBeInTheDocument()

    finishTyping()

    expect(within(conversation()).getByText(experience.answer.text)).toBeInTheDocument()
    expect(screen.queryByTestId('typing-indicator')).not.toBeInTheDocument()
    experience.followUps.forEach((id) => {
      expect(screen.getByRole('button', { name: entry(id).question })).toBeInTheDocument()
    })
  })

  it('hides the typing indicator from screen readers', async () => {
    const user = setup()
    await user.click(screen.getByRole('button', { name: entry('who').question }))
    expect(screen.getByTestId('typing-indicator').closest('li')).toHaveAttribute(
      'aria-hidden',
      'true'
    )
  })

  it('answers a typed question', async () => {
    const user = setup()
    await user.type(screen.getByRole('textbox', { name: 'Your question' }), 'Do you work remotely?')
    await user.click(screen.getByRole('button', { name: 'Ask' }))
    finishTyping()

    expect(within(conversation()).getByText(entry('roles').answer.text)).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Your question' })).toHaveValue('')
  })

  it('submits with the Enter key', async () => {
    const user = setup()
    await user.type(screen.getByRole('textbox', { name: 'Your question' }), 'tech stack{Enter}')
    finishTyping()
    expect(within(conversation()).getByText(entry('stack').answer.text)).toBeInTheDocument()
  })

  it('offers the email link and starter questions when there is no answer', async () => {
    const user = setup()
    await user.type(
      screen.getByRole('textbox', { name: 'Your question' }),
      'Do you like pineapple on pizza?{Enter}'
    )
    finishTyping()

    expect(
      within(conversation()).getByRole('link', { name: 'hello@kerryclements.com' })
    ).toHaveAttribute('href', 'mailto:hello@kerryclements.com')
    askKerryStarters.forEach((id) => {
      expect(screen.getByRole('button', { name: entry(id).question })).toBeInTheDocument()
    })
  })

  it('does not suggest a question that has already been answered', async () => {
    const user = setup()
    const who = entry('who')
    await user.click(screen.getByRole('button', { name: who.question }))
    finishTyping()

    // "Who are you?" is a starter, and the fallback shows the starters again
    await user.type(
      screen.getByRole('textbox', { name: 'Your question' }),
      'pineapple on pizza{Enter}'
    )
    finishTyping()

    const suggestions = within(screen.getByRole('list', { name: 'Suggested questions' }))
    expect(suggestions.queryByRole('button', { name: who.question })).not.toBeInTheDocument()
  })

  it('ignores an empty question', async () => {
    const user = setup()
    await user.type(screen.getByRole('textbox', { name: 'Your question' }), '   {Enter}')
    expect(within(conversation()).getAllByRole('listitem')).toHaveLength(1)
  })

  it('moves focus to the question box after choosing a suggestion', async () => {
    const user = setup()
    await user.click(screen.getByRole('button', { name: entry('stack').question }))
    expect(screen.getByRole('textbox', { name: 'Your question' })).toHaveFocus()
  })
})
