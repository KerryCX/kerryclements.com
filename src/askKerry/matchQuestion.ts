import type { AskKerryEntry } from '../content/askKerry'

// Matches a typed question to the closest written answer. No AI: it compares words.
// 1. Split both sides into lowercase words and drop filler words ("what", "your"...).
// 2. Score each entry: +1 for an exact word match, +0.75 for a near match (typo or word stem).
// 3. Return the highest-scoring entry, or null if nothing reaches the minimum score.

// Filler words that say nothing about which answer someone wants
const STOP_WORDS = new Set(
  (
    'a an and any are about at can did do does for have how i in is it know like me of on open ' +
    'or please stuff tell that the this to was what whats with work you your youre'
  ).split(' ')
)

const EXACT_MATCH_SCORE = 1
const NEAR_MATCH_SCORE = 0.75
const MINIMUM_SCORE = NEAR_MATCH_SCORE

// Light stemming so "tests" matches "test" and "apis" matches "api" (but "access" stays whole)
const stem = (word: string): string =>
  word.length > 3 && word.endsWith('s') && !word.endsWith('ss') ? word.slice(0, -1) : word

export const toWords = (text: string): string[] =>
  text
    .toLowerCase()
    .replace(/['\u2019]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 0 && !STOP_WORDS.has(word))
    .map(stem)

// Number of single-letter edits to turn one word into another (Levenshtein distance)
const editDistance = (first: string, second: string): number => {
  const previousRow = Array.from({ length: second.length + 1 }, (_, index) => index)
  for (let i = 1; i <= first.length; i++) {
    let diagonal = previousRow[0]
    previousRow[0] = i
    for (let j = 1; j <= second.length; j++) {
      const above = previousRow[j]
      const cost = first[i - 1] === second[j - 1] ? 0 : 1
      previousRow[j] = Math.min(previousRow[j] + 1, previousRow[j - 1] + 1, diagonal + cost)
      diagonal = above
    }
  }
  return previousRow[second.length]
}

// A near match is a one-letter typo in a longer word, or one word starting the other
// (so "access" finds "accessibility")
const isNearMatch = (typed: string, known: string): boolean => {
  if (typed.length >= 5 && known.length >= 5 && editDistance(typed, known) <= 1) return true
  if (typed.length >= 4 && known.length >= 4) {
    return known.startsWith(typed) || typed.startsWith(known)
  }
  return false
}

const scoreEntry = (typedWords: string[], entry: AskKerryEntry): number => {
  const knownWords = new Set(toWords([entry.question, ...entry.keywords].join(' ')))
  return typedWords.reduce((score, typed) => {
    if (knownWords.has(typed)) return score + EXACT_MATCH_SCORE
    const hasNearMatch = [...knownWords].some((known) => isNearMatch(typed, known))
    return hasNearMatch ? score + NEAR_MATCH_SCORE : score
  }, 0)
}

export const matchQuestion = (
  typedQuestion: string,
  entries: AskKerryEntry[]
): AskKerryEntry | null => {
  const typedWords = toWords(typedQuestion)
  if (typedWords.length === 0) return null

  let bestEntry: AskKerryEntry | null = null
  let bestScore = 0
  for (const entry of entries) {
    const score = scoreEntry(typedWords, entry)
    // Strictly greater, so on a tie the earlier entry in the content file wins
    if (score > bestScore) {
      bestEntry = entry
      bestScore = score
    }
  }
  return bestScore >= MINIMUM_SCORE ? bestEntry : null
}
