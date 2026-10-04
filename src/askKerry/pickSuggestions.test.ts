import { describe, expect, it } from 'vitest'
import { MIN_SUGGESTIONS, pickSuggestions } from './pickSuggestions'

const starters = ['who', 'experience', 'stack', 'roles']
const all = ['who', 'experience', 'stack', 'roles', 'gap', 'testing', 'site']

describe('pickSuggestions', () => {
  it('keeps the preferred questions when none have been answered', () => {
    expect(pickSuggestions(['gap', 'testing'], new Set(), starters, all)).toEqual([
      'gap',
      'testing',
    ])
  })

  it('drops questions that have already been answered', () => {
    expect(pickSuggestions(starters, new Set(['who', 'stack']), starters, all)).toEqual([
      'experience',
      'roles',
      'gap',
      'testing',
    ])
  })

  it(`tops up to at least ${MIN_SUGGESTIONS} from the starters, then the rest`, () => {
    expect(
      pickSuggestions(['gap', 'testing'], new Set(['gap', 'testing', 'who']), starters, all)
    ).toEqual(['experience', 'stack'])
  })

  it('never suggests the same question twice', () => {
    const picked = pickSuggestions(['who', 'who', 'experience'], new Set(), starters, all)
    expect(new Set(picked).size).toBe(picked.length)
  })

  it('returns nothing once every question has been answered', () => {
    expect(pickSuggestions(starters, new Set(all), starters, all)).toEqual([])
  })
})
