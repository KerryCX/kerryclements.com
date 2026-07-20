import styles from './Personal.module.css'
import './../../styles/personal-scope.css'
import { Nav } from '../../components/Nav'

import { PersonalFooter } from '../../components/PersonalFooter'

const Personal = () => {
  return (
    <div className={`personal-scope ${styles.personal}`}>
      <Nav />
      <main className={styles.content}>
        <span className={styles.eyebrow}>personal</span>

        <h1 className={styles.title}>A page outside my case studies</h1>

        <p className={styles.intro}>
          A few things that are personal to me, presented with the same care I bring to my work.
        </p>

        {/* <figure className={styles.videoWrapper}>
          <video className={styles.video} controls poster="/images/personal-poster.jpg">
            <source src="/videos/20201028skindiariesEnhanced.mp4" type="video/mp4" /> */}
        {/* TODO: add a <track kind="captions"> once captions exist */}
        {/* </video>
        </figure> */}

        <div className={styles.entries}>
          <a href="/personal/wellness-journey" className={styles.entryCard}>
            <span className={styles.entryLabel}>hot mess to healthy</span>
            <h2 className={styles.entryTitle}>Sleep</h2>
            <p className={styles.entryDescription}>
              Starting with sleep before anything else, and the research behind why.
            </p>
            <span className={styles.entryLink}>Read more →</span>
          </a>

          <a href="/personal/clear-skin-co2-laser" className={styles.entryCard}>
            <span className={styles.entryLabel}>clear skin</span>
            <h2 className={styles.entryTitle}>Why I Had the CO2 Laser</h2>
            <p className={styles.entryDescription}>
              Twelve days into recovery, and why the timing finally made sense.
            </p>
            <span className={styles.entryLink}>Read more →</span>
          </a>
          <a href="/personal/claude-personal-stylist" className={styles.entryCard}>
            <span className={styles.entryLabel}>hot mess to healthy</span>
            <h2 className={styles.entryTitle}>
              I Asked Claude to Be My Personal Stylist for a Day
            </h2>
            <p className={styles.entryDescription}>
              I couldn't afford the £1,000 AI makeover app, so I asked Claude instead.
            </p>
            <span className={styles.entryLink}>Read more →</span>
          </a>
        </div>
        <PersonalFooter backHref="/" backLabel="Back to homepage" />
      </main>
    </div>
  )
}

export default Personal
