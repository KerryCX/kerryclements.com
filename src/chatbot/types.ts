export type AskKerryLink = {
  label: string
  href: string
}

export type AskKerryAnswer = {
  text: string | string[]
  link?: AskKerryLink
  links?: AskKerryLink[]
}

export type AskKerryEntry = {
  id: string
  question: string
  keywords: string[]
  answer: AskKerryAnswer
  followUps: string[]
}

export const paragraphsOf = (answer: AskKerryAnswer): string[] =>
  typeof answer.text === 'string' ? [answer.text] : answer.text

export const linksOf = (answer: AskKerryAnswer): AskKerryLink[] => [
  ...(answer.link ? [answer.link] : []),
  ...(answer.links ?? []),
]
