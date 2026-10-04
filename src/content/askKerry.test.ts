import { describe, expect, it } from 'vitest'
import { askKerryEntries, askKerryFallback, askKerryGreeting, askKerryStarters } from './askKerry'

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
      askKerryGreeting.text,
      askKerryFallback.text,
      ...askKerryEntries.flatMap((entry) => [entry.question, entry.answer.text]),
    ]
    allCopy.forEach((text) => expect(text).not.toContain('—'))
  })
})
