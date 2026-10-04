// Chooses which suggested questions to show next, without repeating ones already answered.
// Starts from the preferred ids (an answer's follow-ups, or the starters), drops anything
// answered, then tops up from the starters and the rest of the list so there are always
// at least MIN_SUGGESTIONS to pick from, until every question has been answered.

export const MIN_SUGGESTIONS = 2

export const pickSuggestions = (
  preferredIds: string[],
  answeredIds: ReadonlySet<string>,
  starterIds: string[],
  allIds: string[]
): string[] => {
  const target = Math.max(preferredIds.length, MIN_SUGGESTIONS)
  const candidates = [...preferredIds, ...starterIds, ...allIds]
  const picked: string[] = []
  for (const id of candidates) {
    if (picked.length >= target) break
    if (!answeredIds.has(id) && !picked.includes(id)) picked.push(id)
  }
  return picked
}
