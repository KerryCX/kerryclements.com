import { describe, it, expect } from 'vitest'
import { getRandomElement, type Element } from './utils'

const mockElements: Element[] = [
  { number: 1, symbol: 'H', name: 'Hydrogen', symbolOrigin: 'Greek' },
  { number: 2, symbol: 'He', name: 'Helium', symbolOrigin: 'Greek' },
  { number: 3, symbol: 'Li', name: 'Lithium', symbolOrigin: 'Latin' },
]

describe('utils', () => {
  it('returns a random element', async () => {
    const element = await getRandomElement(async () => mockElements)
    expect(element).not.toBeNull()
    if (element) {
      expect(element.symbol).toBeDefined()
      expect(element.name).toBeDefined()
      expect(element.number).toBeDefined()
      expect(element.symbolOrigin).toBeDefined()
    }
  })
  it('getRandomElement returns a random element', async () => {
    const element = await getRandomElement(async () => mockElements)
    expect(element).not.toBeNull()
    if (element) {
      expect(element.number).toBeGreaterThan(0)
      expect(element.symbol).toBeDefined()
      expect(element.name).toBeDefined()
      expect(element.symbolOrigin).toBeDefined()
    }
  })
  it('getRandomElement returns different elements on multiple calls', async () => {
    const symbols = new Set<string>()
    for (let i = 0; i < 20; i++) {
      const element = await getRandomElement(async () => mockElements)
      if (element) symbols.add(element.symbol)
    }
    expect(symbols.size).toBeGreaterThan(1)
  })
  it('getRandomElement numbers are valid', async () => {
    const element = await getRandomElement(async () => mockElements)
    if (element) {
      expect(element.number).toBeGreaterThan(0)
      expect(element.number).toBeLessThanOrEqual(3)
    }
  })
})
