import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { ThemeSwitcher } from './ThemeSwitcher'
import { THEME_STORAGE_KEY } from '../theme/theme'

type ChangeListener = (event: MediaQueryListEvent) => void

// A controllable matchMedia: set the system preference and fire change events.
const mockSystemTheme = (initiallyLight: boolean) => {
  const listeners = new Set<ChangeListener>()
  const originalMatchMedia = window.matchMedia
  let prefersLight = initiallyLight

  window.matchMedia = (query: string): MediaQueryList =>
    ({
      get matches() {
        return prefersLight
      },
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: (_type: string, listener: ChangeListener) => listeners.add(listener),
      removeEventListener: (_type: string, listener: ChangeListener) => listeners.delete(listener),
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList

  return {
    changeTo: (light: boolean): void => {
      prefersLight = light
      listeners.forEach((listener) => listener({ matches: light } as MediaQueryListEvent))
    },
    restore: (): void => {
      window.matchMedia = originalMatchMedia
    },
  }
}

const getOption = (name: 'System' | 'Light' | 'Dark'): HTMLElement =>
  screen.getByRole('radio', { name })
const currentTheme = (): string | undefined => document.documentElement.dataset.theme
const storedTheme = (): string | null => window.localStorage.getItem(THEME_STORAGE_KEY)

describe('ThemeSwitcher', () => {
  let system: ReturnType<typeof mockSystemTheme>

  beforeEach(() => {
    window.localStorage.clear()
    delete document.documentElement.dataset.theme
  })

  afterEach(() => {
    system?.restore()
  })

  it('renders a labelled group of three options', () => {
    system = mockSystemTheme(false)
    render(<ThemeSwitcher />)
    expect(screen.getByRole('group', { name: 'Theme' })).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(3)
  })

  it('selects System by default and follows a dark system setting', () => {
    system = mockSystemTheme(false)
    render(<ThemeSwitcher />)
    expect(getOption('System')).toBeChecked()
    expect(currentTheme()).toBe('dark')
  })

  it('selects System by default and follows a light system setting', () => {
    system = mockSystemTheme(true)
    render(<ThemeSwitcher />)
    expect(getOption('System')).toBeChecked()
    expect(currentTheme()).toBe('light')
  })

  it('restores a saved choice over the system setting', () => {
    system = mockSystemTheme(false)
    window.localStorage.setItem(THEME_STORAGE_KEY, 'light')
    render(<ThemeSwitcher />)
    expect(getOption('Light')).toBeChecked()
    expect(currentTheme()).toBe('light')
  })

  it('applies and saves Light or Dark when chosen', async () => {
    system = mockSystemTheme(false)
    const user = userEvent.setup()
    render(<ThemeSwitcher />)

    await user.click(getOption('Light'))
    expect(getOption('Light')).toBeChecked()
    expect(currentTheme()).toBe('light')
    expect(storedTheme()).toBe('light')

    await user.click(getOption('Dark'))
    expect(currentTheme()).toBe('dark')
    expect(storedTheme()).toBe('dark')
  })

  it('clears the saved choice when System is chosen again', async () => {
    system = mockSystemTheme(true)
    window.localStorage.setItem(THEME_STORAGE_KEY, 'dark')
    const user = userEvent.setup()
    render(<ThemeSwitcher />)

    await user.click(getOption('System'))

    expect(storedTheme()).toBeNull()
    expect(currentTheme()).toBe('light')
  })

  it('can be operated with arrow keys, like any radio group', async () => {
    system = mockSystemTheme(false)
    const user = userEvent.setup()
    render(<ThemeSwitcher />)

    await user.tab()
    expect(getOption('System')).toHaveFocus()
    await user.keyboard('{ArrowRight}')

    expect(getOption('Light')).toBeChecked()
    expect(currentTheme()).toBe('light')
  })

  it('follows live system changes only while System is selected', async () => {
    system = mockSystemTheme(false)
    const user = userEvent.setup()
    render(<ThemeSwitcher />)

    act(() => system.changeTo(true))
    expect(currentTheme()).toBe('light')

    await user.click(getOption('Dark'))
    act(() => system.changeTo(true))
    expect(currentTheme()).toBe('dark')
  })
})
