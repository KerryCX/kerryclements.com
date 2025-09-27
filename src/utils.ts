export async function getData() {
  const response = await fetch('/listOfElements.json') // path relative to site root
  if (!response.ok) throw new Error('Failed to load JSON')
  const data = await response.json()
  return data
}

export interface Element {
  number: number
  symbol: string
  name: string
  symbolOrigin: string
}

export const getRandomElement = async (
  fetcher: () => Promise<Element[]> = getData
): Promise<Element | null> => {
  try {
    const elements = await fetcher()
    if (!elements.length) return null
    const randomIndex = Math.floor(Math.random() * elements.length)
    return elements[randomIndex] ?? null
  } catch (err) {
    console.error('Failed to get elements', err)
    return null
  }
}
