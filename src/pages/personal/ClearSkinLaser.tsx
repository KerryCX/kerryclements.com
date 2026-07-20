import { useEffect } from 'react'
import styles from './ClearSkinLaser.module.css'
import './../../styles/personal-scope.css'

const CANONICAL_URL = 'https://kerryclements.com/personal/clear-skin-co2-laser'

const ClearSkinLaser = () => {
  useEffect(() => {
    document.title = 'Why I Had the CO2 Laser — Kerry Clements'

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = CANONICAL_URL

    return () => {
      document.title = 'Kerry Clements'
    }
  }, [])

  return (
    <div className={`personal-scope ${styles.clearSkin}`}>
      <main className={styles.content}>
        <a href="/personal" className={styles.backLink}>
          ← Back to personal
        </a>

        <span className={styles.eyebrow}>clear skin</span>
        <h1 className={styles.title}>Why I Had the CO2 Laser</h1>
        <p className={styles.meta}>
          Twelve days into recovery from my latest CO2 laser · July 2026
        </p>

        <figure className={`${styles.figure} ${styles.figureSmall}`}>
          <img
            className={styles.figureImage}
            src="/images/co2-laser-recovery.jpg"
            alt="Recovery photo from my CO2 laser treatment"
          />
        </figure>

        <p className={styles.paragraph}>
          I have battled acne since I was a child. Touch wood, it's finally under control. What's
          left behind are the scars, the record of all those years, and for a while now I've been
          trying to improve them with the help of Quinn Clinics. It hasn't been one laser, it's been
          a series, and this CO2 treatment, 12 days ago in Bristol, is just the latest.
        </p>

        <p className={styles.paragraph}>
          I didn't start the acne scar treatments sooner for many reasons, one being money, another
          being that there wasn't much point smoothing out scars while I was still breaking out.
          Treating the surface while the cause was still active felt backwards, so I waited.
        </p>

        <p className={styles.paragraph}>
          Both of those things have shifted. The acne is under control, and I'm in a position to
          actually spend on this now. So the timing finally made sense, and recovery week has felt
          oddly grounding. The redness, the peeling, the waiting. It's forced a kind of patience I
          don't usually give myself.
        </p>

        <p className={styles.paragraph}>
          The full result won't show for six months. That's a long time to wait and see, but I'm
          confident it will be an improvement on what was there before. For now I'm just getting
          through recovery, and glad the timing finally lined up to do it at all. Right now that
          means applying SPF 50 religiously and wearing a sun hat. Protecting my skin from the sun
          isn't optional while it heals.
        </p>

        <p className={styles.paragraph}>
          I want to say a proper thank you to the people at Quinn Clinics for looking after me so
          well through all of this.
        </p>

        <p className={styles.paragraph}>
          There's a lot more to my clear skin journey and the lasers behind it. I'll go into that in
          more detail another time. You can see my recovery photos on the{' '}
          <a href="https://www.instagram.com/quinnclinics/?hl=en" target="_blank" rel="noreferrer">
            Quinn Clinics Instagram page
          </a>
          .
        </p>

        <a href="/personal" className={styles.backLink}>
          ← Back to personal
        </a>
      </main>
    </div>
  )
}

export default ClearSkinLaser
