import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { AskKerryChat, TYPING_DELAY_MS } from './AskKerryChat'
import { askKerryEntries, askKerryGreeting, askKerryStarters } from '../../content/askKerry'
import { linksOf, paragraphsOf, type AskKerryAnswer } from '../../chatbot/types'

const firstParagraph = (answer: AskKerryAnswer): string => paragraphsOf(answer)[0]

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
    expect(within(conversation()).getByText(firstParagraph(askKerryGreeting))).toBeInTheDocument()
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
    expect(
      within(conversation()).queryByText(firstParagraph(experience.answer))
    ).not.toBeInTheDocument()

    finishTyping()

    expect(within(conversation()).getByText(firstParagraph(experience.answer))).toBeInTheDocument()
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

    expect(
      within(conversation()).getByText(firstParagraph(entry('roles').answer))
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Your question' })).toHaveValue('')
  })

  it('shows which question is being answered when the question was typed', async () => {
    const user = setup()
    await user.type(screen.getByRole('textbox', { name: 'Your question' }), 'remote{Enter}')
    finishTyping()
    expect(
      within(conversation()).getByText(`Answering: ${entry('roles').question}`)
    ).toBeInTheDocument()
  })

  it('does not repeat the question when a suggestion was picked', async () => {
    const user = setup()
    await user.click(screen.getByRole('button', { name: entry('who').question }))
    finishTyping()
    expect(within(conversation()).queryByText(/^Answering:/)).not.toBeInTheDocument()
  })

  // Runs once at least one answer in the content is written as several paragraphs
  const multiParagraph = askKerryEntries.find((item) => paragraphsOf(item.answer).length > 1)
  it.runIf(multiParagraph)('shows a multi-paragraph answer as separate paragraphs', async () => {
    if (!multiParagraph) return
    const user = setup()
    await user.type(
      screen.getByRole('textbox', { name: 'Your question' }),
      `${multiParagraph.question}{Enter}`
    )
    finishTyping()
    paragraphsOf(multiParagraph.answer).forEach((paragraph) => {
      expect(within(conversation()).getByText(paragraph, { exact: false }).tagName).toBe('P')
    })
  })

  // Runs once at least one answer in the content has several links
  const multiLink = askKerryEntries.find((item) => linksOf(item.answer).length > 1)
  it.runIf(multiLink)('lists every link for an answer with several links', async () => {
    if (!multiLink) return
    const user = setup()
    await user.type(
      screen.getByRole('textbox', { name: 'Your question' }),
      `${multiLink.question}{Enter}`
    )
    finishTyping()
    linksOf(multiLink.answer).forEach((link) => {
      expect(within(conversation()).getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.href
      )
    })
  })

  it('submits with the Enter key', async () => {
    const user = setup()
    await user.type(screen.getByRole('textbox', { name: 'Your question' }), 'tech stack{Enter}')
    finishTyping()
    expect(
      within(conversation()).getByText(firstParagraph(entry('stack').answer))
    ).toBeInTheDocument()
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

  describe('on a touch device', () => {
    const touchMatchMedia = ((query: string) => ({
      matches: query === '(pointer: coarse)',
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {},
    })) as unknown as typeof window.matchMedia
    let originalMatchMedia: typeof window.matchMedia

    beforeEach(() => {
      originalMatchMedia = window.matchMedia
      window.matchMedia = touchMatchMedia
    })

    afterEach(() => {
      window.matchMedia = originalMatchMedia
    })

    it('does not move focus to the question box after tapping a suggestion', async () => {
      const user = setup()
      await user.click(screen.getByRole('button', { name: entry('stack').question }))
      expect(screen.getByRole('textbox', { name: 'Your question' })).not.toHaveFocus()
      expect(conversation()).toHaveFocus()
    })

    it('moves focus off the question box after asking, to close the keyboard', async () => {
      const user = setup()
      await user.type(screen.getByRole('textbox', { name: 'Your question' }), 'tech stack{Enter}')
      expect(screen.getByRole('textbox', { name: 'Your question' })).not.toHaveFocus()
    })
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
