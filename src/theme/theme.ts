// Theme logic shared by useTheme and the tests.
// The inline script in index.html repeats the "saved choice, else system setting" logic so
// the right theme is set before first paint (no flash of the wrong colours). Keep them in step.

export type Theme = 'light' | 'dark'
export type ThemePreference = 'system' | Theme

export const THEME_STORAGE_KEY = 'theme'
export const LIGHT_SCHEME_QUERY = '(prefers-color-scheme: light)'

const isTheme = (value: unknown): value is Theme => value === 'light' || value === 'dark'

// Nothing saved means "follow the system". localStorage can throw (private browsing,
// blocked storage), so every access is guarded.
export const getStoredPreference = (): ThemePreference => {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    return isTheme(stored) ? stored : 'system'
  } catch {
    return 'system'
  }
}

export const storePreference = (preference: ThemePreference): void => {
  try {
    if (preference === 'system') {
      window.localStorage.removeItem(THEME_STORAGE_KEY)
    } else {
      window.localStorage.setItem(THEME_STORAGE_KEY, preference)
    }
  } catch {
    // Storage unavailable: the choice still applies for this visit
  }
}

export const getSystemTheme = (): Theme =>
  window.matchMedia(LIGHT_SCHEME_QUERY).matches ? 'light' : 'dark'

export const applyTheme = (theme: Theme): void => {
  document.documentElement.dataset.theme = theme
}
