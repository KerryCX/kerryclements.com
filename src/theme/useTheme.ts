import { useCallback, useEffect, useState } from 'react'
import {
  LIGHT_SCHEME_QUERY,
  applyTheme,
  getStoredPreference,
  getSystemTheme,
  storePreference,
  type Theme,
  type ThemePreference,
} from './theme'

type UseThemeResult = {
  preference: ThemePreference
  theme: Theme
  setPreference: (preference: ThemePreference) => void
}

// preference is what the visitor chose (system, light or dark).
// theme is what is actually showing, after resolving "system" to light or dark.
export const useTheme = (): UseThemeResult => {
  const [preference, setPreferenceState] = useState<ThemePreference>(getStoredPreference)
  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme)

  const theme: Theme = preference === 'system' ? systemTheme : preference

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  // Keep systemTheme current, so "system" follows the device if it changes while the page is open
  useEffect(() => {
    const mediaQuery = window.matchMedia(LIGHT_SCHEME_QUERY)
    const handleSystemChange = (event: MediaQueryListEvent): void => {
      setSystemTheme(event.matches ? 'light' : 'dark')
    }
    mediaQuery.addEventListener('change', handleSystemChange)
    return () => mediaQuery.removeEventListener('change', handleSystemChange)
  }, [])

  const setPreference = useCallback((nextPreference: ThemePreference): void => {
    storePreference(nextPreference)
    setPreferenceState(nextPreference)
  }, [])

  return { preference, theme, setPreference }
}
