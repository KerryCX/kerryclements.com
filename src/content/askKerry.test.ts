import { describe, expect, it } from 'vitest'
import { askKerryEntries, askKerryFallback, askKerryGreeting, askKerryStarters } from './askKerry'
import { linksOf, paragraphsOf } from '../chatbot/types'

const ids = askKerryEntries.map((entry) => entry.id)

describe('askKerry content', () => {
  it('has unique ids', () => {
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('only points starters and follow-ups at questions that exist', () => {
    const referencedIds = [
      ...askKerryStarters,
      ...askKerryEntries.flatMap((entry) => entry.followUps),
    ]
    referencedIds.forEach((id) => expect(ids).toContain(id))
  })

  it('has no em dashes in any copy', () => {
    const allCopy = [
      ...paragraphsOf(askKerryGreeting),
      ...paragraphsOf(askKerryFallback),
      ...askKerryEntries.flatMap((entry) => [entry.question, ...paragraphsOf(entry.answer)]),
    ]
    allCopy.forEach((text) => expect(text).not.toContain('—'))
  })

  it('reads one string as one paragraph and a list as several', () => {
    expect(paragraphsOf({ text: 'One.' })).toEqual(['One.'])
    expect(paragraphsOf({ text: ['One.', 'Two.'] })).toEqual(['One.', 'Two.'])
  })

  it('collects a single link and a list of links together', () => {
    const portfolio = { label: 'Portfolio', href: '/portfolio' }
    const gitHub = { label: 'GitHub', href: 'https://github.com/KerryCX' }
    expect(linksOf({ text: 'One.' })).toEqual([])
    expect(linksOf({ text: 'One.', link: portfolio })).toEqual([portfolio])
    expect(linksOf({ text: 'One.', links: [portfolio, gitHub] })).toEqual([portfolio, gitHub])
  })
})
