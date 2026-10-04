// Theme logic shared by useTheme and the tests.
// The inline script in index.html repeats resolveInitialTheme so the right theme is set
// before first paint (no flash of the wrong colours). Keep the two in step.

export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'
export const LIGHT_SCHEME_QUERY = '(prefers-color-scheme: light)'

const isTheme = (value: unknown): value is Theme => value === 'light' || value === 'dark'

// localStorage can throw (private browsing, blocked storage), so every access is guarded.
export const getStoredTheme = (): Theme | null => {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    return isTheme(stored) ? stored : null
  } catch {
    return null
  }
}

export const storeTheme = (theme: Theme): void => {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Storage unavailable: the choice still applies for this visit
  }
}

export const getSystemTheme = (): Theme =>
  window.matchMedia(LIGHT_SCHEME_QUERY).matches ? 'light' : 'dark'

export const resolveInitialTheme = (): Theme => getStoredTheme() ?? getSystemTheme()

export const applyTheme = (theme: Theme): void => {
  document.documentElement.dataset.theme = theme
}
