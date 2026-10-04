import { useEffect, useId, useRef, useState, type MouseEvent, type ReactElement } from 'react'
import { useTheme } from '../theme/useTheme'
import type { ThemePreference } from '../theme/theme'

type ThemeOption = {
  value: ThemePreference
  label: string
  Icon: () => ReactElement
}

// Wide screens: the three options show inline as an icon pill (the trigger is hidden by CSS).
// Small screens: a single "Theme" button opens the same options as a dropdown with text labels.
// The options are a radio group either way, so arrow keys move between them and screen readers
// announce "Theme, group" then e.g. "Light, radio button, 2 of 3".
export const ThemeSwitcher = (): ReactElement => {
  const { preference, setPreference } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const groupName = useId()
  const optionsId = useId()

  // While open: Escape closes and returns focus to the trigger; a tap or click outside closes
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }
    const handlePointerDown = (event: PointerEvent): void => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isOpen])

  // Close after a tap or click on an option. Keyboard selection (arrow keys, Space) also
  // fires click, but with detail 0, so the dropdown stays open while someone arrows through.
  const handleOptionClick = (event: MouseEvent<HTMLLabelElement>): void => {
    if (event.detail > 0) setIsOpen(false)
  }

  return (
    <div className="theme-switcher" ref={containerRef}>
      <button
        ref={triggerRef}
        type="button"
        className="theme-switcher__trigger"
        aria-label="Theme"
        aria-expanded={isOpen}
        aria-controls={optionsId}
        onClick={() => setIsOpen((wasOpen) => !wasOpen)}
      >
        <ContrastIcon />
      </button>

      <fieldset
        id={optionsId}
        className={`theme-switcher__options${isOpen ? ' theme-switcher__options--open' : ''}`}
      >
        <legend className="visually-hidden">Theme</legend>
        {themeOptions.map(({ value, label, Icon }) => (
          <label
            key={value}
            className="theme-switcher__option"
            title={label}
            onClick={handleOptionClick}
          >
            <input
              type="radio"
              name={groupName}
              value={value}
              checked={preference === value}
              onChange={() => setPreference(value)}
              className="theme-switcher__input"
            />
            <Icon />
            <span className="theme-switcher__label">{label}</span>
          </label>
        ))}
      </fieldset>
    </div>
  )
}

const iconProps = {
  'aria-hidden': true,
  focusable: false,
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

// Half-filled circle: a common "appearance" icon, used for the small-screen trigger
const ContrastIcon = (): ReactElement => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
  </svg>
)

const SystemIcon = (): ReactElement => (
  <svg {...iconProps}>
    <rect x="2" y="4" width="20" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
)

const SunIcon = (): ReactElement => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
)

const MoonIcon = (): ReactElement => (
  <svg {...iconProps}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const themeOptions: ThemeOption[] = [
  { value: 'system', label: 'System', Icon: SystemIcon },
  { value: 'light', label: 'Light', Icon: SunIcon },
  { value: 'dark', label: 'Dark', Icon: MoonIcon },
]
