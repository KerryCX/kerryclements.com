import { useCallback, useEffect, useState } from 'react'
import {
  LIGHT_SCHEME_QUERY,
  applyTheme,
  getStoredTheme,
  resolveInitialTheme,
  storeTheme,
  type Theme,
} from './theme'

type UseThemeResult = {
  theme: Theme
  toggleTheme: () => void
}

// Follows the visitor's system setting until they choose a theme with the toggle.
// After that, their choice is saved and wins over the system setting.
export const useTheme = (): UseThemeResult => {
  const [theme, setTheme] = useState<Theme>(resolveInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia(LIGHT_SCHEME_QUERY)
    const handleSystemChange = (event: MediaQueryListEvent): void => {
      if (getStoredTheme() === null) setTheme(event.matches ? 'light' : 'dark')
    }
    mediaQuery.addEventListener('change', handleSystemChange)
    return () => mediaQuery.removeEventListener('change', handleSystemChange)
  }, [])

  const toggleTheme = useCallback((): void => {
    setTheme((currentTheme) => {
      const nextTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark'
      storeTheme(nextTheme)
      return nextTheme
    })
  }, [])

  return { theme, toggleTheme }
}
