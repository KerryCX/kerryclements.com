import elements from './listOfElements.json' with { type: 'json' }

export interface Element {
  number: number;
  symbol: string;
  name: string;
  symbolOrigin: string;
}

export const getRandomElement = (): Element | null => {
  if(elements.length === 0) return null
  const randomIndex = Math.floor(Math.random() * elements.length)
  return elements[randomIndex] ?? null
}
