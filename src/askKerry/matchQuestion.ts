import type { AskKerryEntry } from '../content/askKerry'

// Matches a typed question to the closest written answer. No AI: it compares words.
// 1. Split both sides into lowercase words and drop filler words ("what", "your"...).
// 2. Score each entry for every typed word it contains:
//    - a word in the entry's keywords counts a little more than one only in its question
//    - a word that appears in lots of entries counts for less, so "remote" (one entry)
//      outweighs "work" (several entries)
//    - if a typed word isn't known anywhere, near matches (typos, word starts) count instead
// 3. Return the highest-scoring entry, or null if nothing matched at all.

// Filler words that say nothing about which answer someone wants
const STOP_WORDS = new Set(
  (
    'a an and any are about at can did do does for have how i in is it know like me of on open ' +
    'or please stuff tell that the this to was what whats with you your youre'
  ).split(' ')
)

const KEYWORD_WEIGHT = 1
const QUESTION_WEIGHT = 0.9
const NEAR_MATCH_WEIGHT = 0.75

// Light stemming so "tests" matches "test", "apis" matches "api" (but "access" stays whole),
// and "remotely" matches "remote"
const stem = (word: string): string => {
  if (word.length > 5 && word.endsWith('ly')) return word.slice(0, -2)
  if (word.length > 3 && word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1)
  return word
}

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

type WordSource = 'keyword' | 'question'

// Each entry's known words, and whether each came from its keywords or its question
const knownWordsFor = (entry: AskKerryEntry): Map<string, WordSource> => {
  const known = new Map<string, WordSource>()
  toWords(entry.question).forEach((word) => known.set(word, 'question'))
  toWords(entry.keywords.join(' ')).forEach((word) => known.set(word, 'keyword'))
  return known
}

const sourceWeight = (source: WordSource): number =>
  source === 'keyword' ? KEYWORD_WEIGHT : QUESTION_WEIGHT

export const matchQuestion = (
  typedQuestion: string,
  entries: AskKerryEntry[]
): AskKerryEntry | null => {
  const typedWords = toWords(typedQuestion)
  if (typedWords.length === 0) return null

  const knownWords = entries.map(knownWordsFor)

  // How many entries each word appears in
  const entryCount = new Map<string, number>()
  knownWords.forEach((known) =>
    known.forEach((_, word) => entryCount.set(word, (entryCount.get(word) ?? 0) + 1))
  )

  const scores = entries.map((_, index) => {
    const known = knownWords[index]
    return typedWords.reduce((score, typed) => {
      if (entryCount.has(typed)) {
        const source = known.get(typed)
        return source ? score + sourceWeight(source) / (entryCount.get(typed) ?? 1) : score
      }
      // Unknown word: allow a typo or the start of a longer word
      const near = [...known].find(([word]) => isNearMatch(typed, word))
      return near ? score + NEAR_MATCH_WEIGHT * sourceWeight(near[1]) : score
    }, 0)
  })

  // Strictly greater, so on a tie the earlier entry in the content file wins
  let bestIndex = -1
  let bestScore = 0
  scores.forEach((score, index) => {
    if (score > bestScore) {
      bestIndex = index
      bestScore = score
    }
  })
  return bestIndex >= 0 ? entries[bestIndex] : null
}
