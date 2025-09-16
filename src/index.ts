import { getRandomElement, type Element } from './utils.js'

document.addEventListener('DOMContentLoaded', () => {
  const elementSymbol = document.getElementById('element-symbol')
  const getSymbolButton = document.getElementById('button')
  const answer = document.getElementById('answer')
  const symbolOrigin = document.getElementById('symbol-origin')
  const reasonForNaming = document.getElementById('reason-for-naming')
  const answerButton = document.getElementById('answer-button')
  let randomElement: Element | null = null

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
    randomElement = getRandomElement()
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
    if (randomElement) {
      answer.textContent = randomElement?.name
      answer.classList.add('visible')
    }
    reasonForNaming.classList.add('visible')
  })
  reasonForNaming.addEventListener('click', () => {
    if (randomElement) {
      symbolOrigin.textContent = randomElement?.symbolOrigin
      symbolOrigin.classList.add('visible')
    }
  })
})
