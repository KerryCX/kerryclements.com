import { useId, type ReactElement } from 'react'
import { AskKerryChat } from './AskKerryChat'
import styles from './AskKerry.module.css'

export const AskKerrySection = (): ReactElement => {
  const headingId = useId()
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <span className="section-label">Ask about Kerry</span>
      <h2 id={headingId} className={styles.sectionTitle}>
        Got a question?
      </h2>
      <p className={styles.sectionIntro}>
        Pick a question or type your own. Every answer is written by me.
      </p>
      <AskKerryChat />
    </section>
  )
}
