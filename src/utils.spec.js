import { getRandomElement } from './utils'

describe('utils', () => {
  it('getRandomElement returns a random element from the elements list', () => {
    const element = getRandomElement()
    expect(element).toHaveProperty('symbol')
    expect(element).toHaveProperty('name')
  })
})
