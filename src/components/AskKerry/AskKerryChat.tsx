import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent,
  type ReactElement,
} from 'react'
import { matchQuestion } from '../../askKerry/matchQuestion'
import { pickSuggestions } from '../../askKerry/pickSuggestions'
import { isTouchTap } from '../../askKerry/touchKeyboard'
import styles from './AskKerry.module.css'
import {
  linksOf,
  paragraphsOf,
  type AskKerryAnswer,
  type AskKerryEntry,
  type AskKerryLink,
} from '../../chatbot/types'

// A short pause before each answer, so it reads like a conversation
export const TYPING_DELAY_MS = 500

// Space left above the question when scrolling an answer into view
const QUESTION_SCROLL_MARGIN = 12

type ChatMessage = {
  id: number
  author: 'kerry' | 'visitor'
  paragraphs: string[]
  links: AskKerryLink[]
  // For typed questions: the written question being answered, so a short or vague
  // question like "current" still makes sense next to the answer
  answering?: string
}

const kerryMessage = (answer: AskKerryAnswer): Omit<ChatMessage, 'id'> => ({
  author: 'kerry',
  paragraphs: paragraphsOf(answer),
  links: linksOf(answer),
})

export type AskKerryChatProps = {
  entries: AskKerryEntry[]
  greeting: AskKerryAnswer
  fallback: AskKerryAnswer
  // Ids of the questions suggested first, and again when nothing else fits
  starters: string[]
}

export const AskKerryChat = ({
  entries,
  greeting,
  fallback,
  starters,
}: AskKerryChatProps): ReactElement => {
  const entriesById = useMemo(() => new Map(entries.map((entry) => [entry.id, entry])), [entries])
  const allIds = useMemo(() => entries.map((entry) => entry.id), [entries])
  const findEntries = (ids: string[]): AskKerryEntry[] =>
    ids.flatMap((id) => entriesById.get(id) ?? [])

  const [messages, setMessages] = useState<ChatMessage[]>([{ id: 0, ...kerryMessage(greeting) }])
  const [suggestionIds, setSuggestionIds] = useState<string[]>(starters)
  const [isTyping, setIsTyping] = useState(false)
  const [draft, setDraft] = useState('')

  const nextMessageId = useRef(1)
  // Questions already answered in this conversation, so they aren't suggested again
  const answeredIds = useRef(new Set<string>())
  const typingTimer = useRef<number | undefined>(undefined)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const logRef = useRef<HTMLOListElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = useId()

  useEffect(() => () => window.clearTimeout(typingTimer.current), [])

  // While waiting, show the newest message. When an answer arrives, scroll so the question
  // that was asked sits at the top, and the answer can be read from its start downwards.
  useEffect(() => {
    const scrollArea = scrollAreaRef.current
    const log = logRef.current
    if (!scrollArea || !log) return
    const lastMessage = messages[messages.length - 1]
    if (isTyping || lastMessage.author === 'visitor' || messages.length < 2) {
      scrollArea.scrollTop = scrollArea.scrollHeight
      return
    }
    const items = log.querySelectorAll<HTMLLIElement>(':scope > li')
    const question = items[items.length - 2]
    if (question) scrollArea.scrollTop = question.offsetTop - QUESTION_SCROLL_MARGIN
  }, [messages, isTyping])

  const addMessage = (message: Omit<ChatMessage, 'id'>): void => {
    const id = nextMessageId.current++
    setMessages((current) => [...current, { id, ...message }])
  }

  const ask = (question: string, knownEntry?: AskKerryEntry): void => {
    if (isTyping) return

    addMessage({ author: 'visitor', paragraphs: [question], links: [] })
    setIsTyping(true)
    setSuggestionIds([])

    const entry = knownEntry ?? matchQuestion(question, entries)
    if (entry) answeredIds.current.add(entry.id)
    const preferredIds = entry ? entry.followUps : starters
    // Suggestions already show the question, so only typed questions need the reminder
    const answering = entry && !knownEntry ? entry.question : undefined

    typingTimer.current = window.setTimeout(() => {
      addMessage({ ...kerryMessage(entry ? entry.answer : fallback), answering })
      setSuggestionIds(pickSuggestions(preferredIds, answeredIds.current, starters, allIds))
      setIsTyping(false)
    }, TYPING_DELAY_MS)
  }

  // Moves focus to the conversation without scrolling, which also closes an on-screen keyboard
  const focusConversation = (): void => logRef.current?.focus({ preventScroll: true })

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const question = draft.trim()
    if (!question || isTyping) return
    ask(question)
    setDraft('')
    // On a touch device, close the keyboard so the answer has room
    if (window.matchMedia('(pointer: coarse)').matches) focusConversation()
  }

  const handleSuggestion = (entry: AskKerryEntry, event: MouseEvent<HTMLButtonElement>): void => {
    ask(entry.question, entry)
    // The suggestion buttons are replaced, so keep focus somewhere useful: the question box,
    // unless that would pop up a touch keyboard
    if (isTouchTap(event)) focusConversation()
    else inputRef.current?.focus()
  }

  return (
    <div className={styles.chat}>
      {/* Messages and suggestions scroll together, so a long answer gets the full height */}
      <div className={styles.scrollArea} ref={scrollAreaRef}>
        <ol
          className={styles.log}
          ref={logRef}
          tabIndex={-1}
          aria-live="polite"
          aria-label="Conversation"
        >
          {messages.map((message) => (
            <li
              key={message.id}
              className={`${styles.message} ${
                message.author === 'kerry' ? styles.messageKerry : styles.messageVisitor
              }`}
            >
              <span className={styles.author}>{message.author === 'kerry' ? 'Kerry' : 'You'}</span>
              {message.answering && (
                <span className={styles.answering}>Answering: {message.answering}</span>
              )}
              {message.paragraphs.map((paragraph, index) => {
                // A single link reads as the end of the last sentence
                const inlineLink =
                  message.links.length === 1 && index === message.paragraphs.length - 1
                    ? message.links[0]
                    : undefined
                return (
                  <p key={index} className={styles.paragraph}>
                    {paragraph}
                    {inlineLink && (
                      <>
                        {' '}
                        <a href={inlineLink.href}>{inlineLink.label}</a>
                      </>
                    )}
                  </p>
                )
              })}
              {/* Several links are listed together under the answer */}
              {message.links.length > 1 && (
                <ul className={styles.links}>
                  {message.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {isTyping && (
            <li className={`${styles.message} ${styles.messageKerry}`} aria-hidden="true">
              <span className={styles.typing} data-testid="typing-indicator">
                <span />
                <span />
                <span />
              </span>
            </li>
          )}
        </ol>

        {suggestionIds.length > 0 && (
          <ul className={styles.suggestions} aria-label="Suggested questions">
            {findEntries(suggestionIds).map((entry) => (
              <li key={entry.id}>
                <button
                  type="button"
                  className={styles.suggestion}
                  onClick={(event) => handleSuggestion(entry, event)}
                >
                  {entry.question}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor={inputId}>
          Your question
        </label>
        <input
          ref={inputRef}
          id={inputId}
          className={styles.input}
          type="text"
          maxLength={200}
          autoComplete="off"
          placeholder="Ask a question…"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
        <button type="submit" className={styles.askButton}>
          Ask
        </button>
      </form>
      <p className={styles.note}>
        Not AI. Answers are matched to questions I've written, so it may not know everything.
      </p>
    </div>
  )
}
