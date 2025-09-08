import elements from './listOfElements.json' with { type: 'json' };

document.addEventListener('DOMContentLoaded', () => {
  let randomIndex: number;
  const elementSymbol = document.getElementById('element-symbol');
  const getSymbolButton = document.getElementById('button');
  const answer = document.getElementById('answer');
  const symbolOrigin = document.getElementById('symbol-origin');
  const reasonForNaming = document.getElementById('reason-for-naming');
  const answerButton = document.getElementById('answer-button');

  if (
    !elementSymbol ||
    !getSymbolButton ||
    !answer ||
    !reasonForNaming ||
    !symbolOrigin ||
    !answerButton
  ) {
    console.error('something not found!');
    return;
  }

  getSymbolButton.addEventListener('click', () => {
    randomIndex = Math.floor(Math.random() * elements.length);
    const randomElement = elements[randomIndex]; // Access the element using the index
    if (randomElement) {
      elementSymbol.textContent = randomElement.symbol;
    }
    answerButton.classList.remove('hidden');
    answer.textContent = '';
    reasonForNaming.textContent = '';
    symbolOrigin.textContent = '';
    getSymbolButton.textContent = 'Click for Next';
  });
  answerButton.addEventListener('click', () => {
    const randomElement = elements[randomIndex];
    if (randomElement) {
      answer.textContent = randomElement?.name;
      // symbolOrigin.textContent = randomElement?.symbolOrigin
    }

    reasonForNaming.classList.remove('hidden');
    reasonForNaming.textContent = 'Why?';
  });
  reasonForNaming.addEventListener('click', () => {
    const randomElement = elements[randomIndex];
    if (randomElement) {
      symbolOrigin.textContent = randomElement?.symbolOrigin;
    }
  });
});
