import { describe, it, expect } from 'vitest'
import { getRandomElement } from './utils.js'

describe('utils', () => {
  it('getRandomElement returns a random element from the elements list', () => {
    const element = getRandomElement()
    expect(element).not.toBeNull()
    if (element) {
      expect(element).toHaveProperty('symbol')
      expect(element).toHaveProperty('name')
      expect(element).toHaveProperty('number')
      expect(element).toHaveProperty('symbolOrigin')

      expect(typeof element.symbol).toBe('string')
      expect(typeof element.name).toBe('string')
      expect(typeof element.number).toBe('number')
      expect(typeof element.symbolOrigin).toBe('string')
    }
  })
  it('getRandomElement returns different elements on multiple calls', () => {
    const elements = new Set()

    for (let i = 0; i < 20; i++) {
      const element = getRandomElement()
      if (element) {
        elements.add(element.symbol)
      }
    }
    expect(elements.size).toBeGreaterThan(1)
  })
  it('getRandomElement returns valid element numbers', () => {
    const element = getRandomElement()
    if (element) {
      expect(element.number).toBeGreaterThan(0)
      expect(element.number).toBeLessThanOrEqual(118)
    }
  })
})
