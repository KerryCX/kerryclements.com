import { describe, expect, it } from 'vitest'
import { matchQuestion, toWords } from './matchQuestion'
import { askKerryEntries, type AskKerryEntry } from '../content/askKerry'

const matchId = (question: string): string | null =>
  matchQuestion(question, askKerryEntries)?.id ?? null

describe('toWords', () => {
  it('lowercases, strips punctuation and drops filler words', () => {
    expect(toWords("What's YOUR tech stack?")).toEqual(['tech', 'stack'])
  })

  it('stems simple plurals', () => {
    expect(toWords('tests apis roles')).toEqual(['test', 'api', 'role'])
  })
})

describe('matchQuestion', () => {
  it('matches every written question to its own answer', () => {
    askKerryEntries.forEach((entry) => {
      expect(matchId(entry.question)).toBe(entry.id)
    })
  })

  it('matches questions worded differently using keywords', () => {
    expect(matchId('Are you open to remote work?')).toBe('roles')
    expect(matchId('what about wcag')).toBe('accessibility')
    expect(matchId('ever used scrum?')).toBe('agile')
  })

  it('copes with a one-letter typo in a longer word', () => {
    expect(matchId('how much expereince')).toBe('experience')
  })

  it('matches the start of a longer word', () => {
    expect(matchId('access')).toBe('accessibility')
  })

  it('returns null when nothing matches', () => {
    expect(matchId('do you like pineapple on pizza?')).toBeNull()
  })

  it('returns null for empty or filler-only input', () => {
    expect(matchId('')).toBeNull()
    expect(matchId('what is the')).toBeNull()
  })
})

describe('matchQuestion weighting', () => {
  const fixture = (id: string, question: string, keywords: string[]): AskKerryEntry => ({
    id,
    question,
    keywords,
    answer: { text: id },
    followUps: [],
  })
  const entries = [
    fixture('stakeholders', 'Do you work with stakeholders?', []),
    fixture('agile', 'Have you worked in teams?', []),
    fixture('workProject', 'Which work project are you proudest of?', ['work', 'wizard']),
    fixture('roles', 'What roles are you looking for?', ['remote']),
  ]
  const matchFixture = (question: string): string | null =>
    matchQuestion(question, entries)?.id ?? null

  it('prefers an entry that lists the word as a keyword', () => {
    expect(matchFixture('work')).toBe('workProject')
  })

  it('lets a rarer word outweigh a common one', () => {
    expect(matchFixture('remote work')).toBe('roles')
  })

  it('ignores near matches for a word that is known exactly somewhere', () => {
    // "work" is known, so "worked" in the agile question shouldn't count as a near match
    expect(matchFixture('work')).not.toBe('agile')
  })
})
