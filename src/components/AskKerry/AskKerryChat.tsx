import { useEffect, useId, useRef, useState, type FormEvent, type ReactElement } from 'react'
import {
  askKerryEntries,
  askKerryFallback,
  askKerryGreeting,
  askKerryStarters,
  type AskKerryEntry,
  type AskKerryLink,
} from '../../content/askKerry'
import { matchQuestion } from '../../askKerry/matchQuestion'
import styles from './AskKerry.module.css'

// A short pause before each answer, so it reads like a conversation
export const TYPING_DELAY_MS = 500

type ChatMessage = {
  id: number
  author: 'kerry' | 'visitor'
  text: string
  link?: AskKerryLink
}

type AskKerryChatProps = {
  variant?: 'inline' | 'panel'
}

const entriesById = new Map(askKerryEntries.map((entry) => [entry.id, entry]))

const findEntries = (ids: string[]): AskKerryEntry[] =>
  ids.flatMap((id) => entriesById.get(id) ?? [])

export const AskKerryChat = ({ variant = 'inline' }: AskKerryChatProps): ReactElement => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, author: 'kerry', ...askKerryGreeting },
  ])
  const [suggestionIds, setSuggestionIds] = useState<string[]>(askKerryStarters)
  const [isTyping, setIsTyping] = useState(false)
  const [draft, setDraft] = useState('')

  const nextMessageId = useRef(1)
  const typingTimer = useRef<number | undefined>(undefined)
  const logRef = useRef<HTMLOListElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = useId()

  useEffect(() => () => window.clearTimeout(typingTimer.current), [])

  // Keep the latest message in view
  useEffect(() => {
    const log = logRef.current
    if (log) log.scrollTop = log.scrollHeight
  }, [messages, isTyping])

  const addMessage = (message: Omit<ChatMessage, 'id'>): void => {
    const id = nextMessageId.current++
    setMessages((current) => [...current, { id, ...message }])
  }

  const ask = (question: string, knownEntry?: AskKerryEntry): void => {
    if (isTyping) return

    addMessage({ author: 'visitor', text: question })
    setIsTyping(true)
    setSuggestionIds([])

    const entry = knownEntry ?? matchQuestion(question, askKerryEntries)
    typingTimer.current = window.setTimeout(() => {
      addMessage({ author: 'kerry', ...(entry ? entry.answer : askKerryFallback) })
      setSuggestionIds(entry ? entry.followUps : askKerryStarters)
      setIsTyping(false)
    }, TYPING_DELAY_MS)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const question = draft.trim()
    if (!question || isTyping) return
    ask(question)
    setDraft('')
  }

  const handleSuggestion = (entry: AskKerryEntry): void => {
    ask(entry.question, entry)
    // The suggestion buttons are replaced, so keep focus somewhere useful
    inputRef.current?.focus()
  }

  return (
    <div className={`${styles.chat} ${variant === 'panel' ? styles.chatPanel : ''}`}>
      <ol className={styles.log} ref={logRef} aria-live="polite" aria-label="Conversation">
        {messages.map((message) => (
          <li
            key={message.id}
            className={`${styles.message} ${
              message.author === 'kerry' ? styles.messageKerry : styles.messageVisitor
            }`}
          >
            <span className={styles.author}>{message.author === 'kerry' ? 'Kerry' : 'You'}</span>
            {message.text}
            {message.link && (
              <>
                {' '}
                <a href={message.link.href}>{message.link.label}</a>
              </>
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
                onClick={() => handleSuggestion(entry)}
              >
                {entry.question}
              </button>
            </li>
          ))}
        </ul>
      )}

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
