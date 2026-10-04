import { afterEach, describe, expect, it } from 'vitest'
import { isTouchTap } from './touchKeyboard'

const originalMatchMedia = window.matchMedia

const setCoarsePointer = (coarse: boolean): void => {
  window.matchMedia = ((query: string) => ({
    matches: coarse,
    media: query,
  })) as typeof window.matchMedia
}

describe('isTouchTap', () => {
  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  it('is true for a tap on a touch device', () => {
    setCoarsePointer(true)
    expect(isTouchTap({ detail: 1 })).toBe(true)
  })

  it('is false for Enter or Space on a touch device', () => {
    setCoarsePointer(true)
    expect(isTouchTap({ detail: 0 })).toBe(false)
  })

  it('is false for a mouse click', () => {
    setCoarsePointer(false)
    expect(isTouchTap({ detail: 1 })).toBe(false)
  })
})
