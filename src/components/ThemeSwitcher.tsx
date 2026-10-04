import { useId, type ReactElement } from 'react'
import { useTheme } from '../theme/useTheme'
import type { ThemePreference } from '../theme/theme'

type ThemeOption = {
  value: ThemePreference
  label: string
  Icon: () => ReactElement
}

// A radio group: one choice from three, with arrow-key navigation built in.
// Screen readers announce "Theme, group" then e.g. "System, radio button, selected, 1 of 3".
export const ThemeSwitcher = (): ReactElement => {
  const { preference, setPreference } = useTheme()
  const groupName = useId()

  return (
    <fieldset className="theme-switcher">
      <legend className="visually-hidden">Theme</legend>
      {themeOptions.map(({ value, label, Icon }) => (
        <label key={value} className="theme-switcher__option" title={label}>
          <input
            type="radio"
            name={groupName}
            value={value}
            checked={preference === value}
            onChange={() => setPreference(value)}
            className="visually-hidden"
          />
          <Icon />
          <span className="visually-hidden">{label}</span>
        </label>
      ))}
    </fieldset>
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
