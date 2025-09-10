import elements from './listOfElements.json' with { type: 'json' }

let randomIndex

export const getRandomElement = () => {
  randomIndex = Math.floor(Math.random() * elements.length)
  return elements[randomIndex]
}
