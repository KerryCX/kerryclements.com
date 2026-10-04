import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { ThemeToggle } from './ThemeToggle'
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

const getToggle = (): HTMLElement => screen.getByRole('button', { name: 'Dark mode' })
const currentTheme = (): string | undefined => document.documentElement.dataset.theme

describe('ThemeToggle', () => {
  let system: ReturnType<typeof mockSystemTheme>

  beforeEach(() => {
    window.localStorage.clear()
    delete document.documentElement.dataset.theme
  })

  afterEach(() => {
    system?.restore()
  })

  it('follows a dark system setting when no choice has been saved', () => {
    system = mockSystemTheme(false)
    render(<ThemeToggle />)
    expect(getToggle()).toHaveAttribute('aria-pressed', 'true')
    expect(currentTheme()).toBe('dark')
  })

  it('follows a light system setting when no choice has been saved', () => {
    system = mockSystemTheme(true)
    render(<ThemeToggle />)
    expect(getToggle()).toHaveAttribute('aria-pressed', 'false')
    expect(currentTheme()).toBe('light')
  })

  it('uses a saved choice over the system setting', () => {
    system = mockSystemTheme(false)
    window.localStorage.setItem(THEME_STORAGE_KEY, 'light')
    render(<ThemeToggle />)
    expect(currentTheme()).toBe('light')
  })

  it('switches theme, updates the pressed state and saves the choice', async () => {
    system = mockSystemTheme(false)
    const user = userEvent.setup()
    render(<ThemeToggle />)

    await user.click(getToggle())

    expect(getToggle()).toHaveAttribute('aria-pressed', 'false')
    expect(currentTheme()).toBe('light')
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('light')
  })

  it('can be operated with the keyboard', async () => {
    system = mockSystemTheme(false)
    const user = userEvent.setup()
    render(<ThemeToggle />)

    await user.tab()
    expect(getToggle()).toHaveFocus()
    await user.keyboard('{Enter}')

    expect(currentTheme()).toBe('light')
  })

  it('follows live system changes until the visitor makes a choice', async () => {
    system = mockSystemTheme(false)
    const user = userEvent.setup()
    render(<ThemeToggle />)

    act(() => system.changeTo(true))
    expect(currentTheme()).toBe('light')

    await user.click(getToggle())
    expect(currentTheme()).toBe('dark')

    act(() => system.changeTo(true))
    expect(currentTheme()).toBe('dark')
  })
})
