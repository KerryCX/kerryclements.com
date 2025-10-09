import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import '../../styles/styles.css'
import { getRandomElement, type Element } from '../../components/utils'

export const PeriodicTableQuiz = () => {
  const [randomElement, setRandomElement] = useState<Element | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showSymbolOrigin, setShowSymbolOrigin] = useState(false)

  const symbolRef = useRef<HTMLParagraphElement>(null)
  const revealButtonRef = useRef<HTMLButtonElement>(null)
  const answerRef = useRef<HTMLParagraphElement>(null)
  const namingButtonRef = useRef<HTMLButtonElement>(null)
  const originRef = useRef<HTMLParagraphElement>(null)

  const handleGetSymbol = async () => {
    const element = await getRandomElement()
    setRandomElement(element)
    setShowAnswer(false)
    setShowSymbolOrigin(false)
  }

  return (
    <div className="ptq-body">
      <div className="main-container">
        <h1>Periodic Table Quiz</h1>
        <h2>Test your periodic table knowledge</h2>
        <h3>Click on the button to get a symbol</h3>

        <section>
          <button onClick={handleGetSymbol}>
            {randomElement ? 'Click for next' : 'Get a random element symbol'}
          </button>

          <CSSTransition
            in={!!randomElement}
            timeout={300}
            classNames="fade-move"
            unmountOnExit
            nodeRef={symbolRef}
          >
            <p ref={symbolRef} className="symbol-styling">
              {randomElement?.symbol}
            </p>
          </CSSTransition>

          <CSSTransition
            in={!!randomElement}
            timeout={300}
            classNames="fade-move"
            unmountOnExit
            nodeRef={revealButtonRef}
          >
            <button ref={revealButtonRef} onClick={() => setShowAnswer(true)}>
              Reveal element
            </button>
          </CSSTransition>

          <CSSTransition
            in={showAnswer}
            timeout={300}
            classNames="fade-move"
            unmountOnExit
            nodeRef={answerRef}
          >
            <p ref={answerRef} className="name-and-reason-styling">
              {randomElement?.name}
            </p>
          </CSSTransition>

          <CSSTransition
            in={showAnswer}
            timeout={300}
            classNames="fade-move"
            unmountOnExit
            nodeRef={namingButtonRef}
          >
            <button ref={namingButtonRef} onClick={() => setShowSymbolOrigin(true)}>
              Why does it have this naming?
            </button>
          </CSSTransition>

          <CSSTransition
            in={showSymbolOrigin}
            timeout={400}
            classNames="fade-move"
            unmountOnExit
            nodeRef={originRef}
          >
            <p ref={originRef} className="name-and-reason-styling">
              {randomElement?.symbolOrigin}
            </p>
          </CSSTransition>
        </section>
      </div>
    </div>
  )
}
