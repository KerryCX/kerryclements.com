import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
} from 'react'
import { isTouchTap } from '../../askKerry/touchKeyboard'
import { AskKerryChat } from './AskKerryChat'
import styles from './AskKerry.module.css'

// Floating "Ask about Kerry" button, shown on every page.
// The panel stays mounted while closed (just hidden), so the conversation is kept.
export const AskKerryLauncher = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()
  const titleId = useId()

  const openedByTouch = useRef(false)

  // When the panel opens, move focus into the question box, or on a touch device to the
  // panel itself so the on-screen keyboard doesn't cover the conversation
  useEffect(() => {
    if (!isOpen) return
    if (openedByTouch.current) panelRef.current?.focus()
    else panelRef.current?.querySelector('input')?.focus()
  }, [isOpen])

  const toggle = (event: MouseEvent<HTMLButtonElement>): void => {
    openedByTouch.current = isTouchTap(event)
    setIsOpen((wasOpen) => !wasOpen)
  }

  const close = (): void => {
    setIsOpen(false)
    launcherRef.current?.focus()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Escape') close()
  }

  return (
    <div className={styles.launcher}>
      <div
        ref={panelRef}
        id={panelId}
        className={styles.panel}
        role="dialog"
        tabIndex={-1}
        aria-labelledby={titleId}
        hidden={!isOpen}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.panelHeader}>
          <h2 id={titleId} className={styles.panelTitle}>
            Ask about Kerry
          </h2>
          <button type="button" className={styles.closeButton} aria-label="Close" onClick={close}>
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <AskKerryChat />
      </div>

      <button
        ref={launcherRef}
        type="button"
        className={styles.launcherButton}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggle}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
        </svg>
        Ask about Kerry
      </button>
    </div>
  )
}
