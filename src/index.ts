import elements from './listOfElements.json' with { type: 'json' }
import { getRandomElement } from './utils.js'

document.addEventListener('DOMContentLoaded', () => {
  let randomIndex: number
  const elementSymbol = document.getElementById('element-symbol')
  const getSymbolButton = document.getElementById('button')
  const answer = document.getElementById('answer')
  const symbolOrigin = document.getElementById('symbol-origin')
  const reasonForNaming = document.getElementById('reason-for-naming')
  const answerButton = document.getElementById('answer-button')

  if (
    !elementSymbol ||
    !getSymbolButton ||
    !answer ||
    !reasonForNaming ||
    !symbolOrigin ||
    !answerButton
  ) {
    console.error('something not found!')
    return
  }

  getSymbolButton.addEventListener('click', () => {
    randomIndex = Math.floor(Math.random() * elements.length)
    const randomElement = getRandomElement()
    if (randomElement) {
      elementSymbol.textContent = randomElement.symbol
      elementSymbol.classList.add('visible')
      answerButton.classList.add('visible')
      answer.classList.remove('visible')
      reasonForNaming.classList.remove('visible')
    }
    symbolOrigin.textContent = ''
    getSymbolButton.textContent = 'Click for Next'
  })
  answerButton.addEventListener('click', () => {
    const randomElement = elements[randomIndex]
    if (randomElement) {
      answer.textContent = randomElement?.name
      answer.classList.add('visible')
    }
    reasonForNaming.classList.add('visible')
  })
  reasonForNaming.addEventListener('click', () => {
    const randomElement = elements[randomIndex]
    if (randomElement) {
      symbolOrigin.textContent = randomElement?.symbolOrigin
      symbolOrigin.classList.add('visible')
    }
  })
})
