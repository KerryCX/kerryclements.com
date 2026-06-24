import styles from './Personal.module.css'

const Personal = () => {
  return (
    <div className={styles.personal}>
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

        <a href="/" className={styles.backLink}>
          ← Back to portfolio
        </a>
      </main>
    </div>
  )
}

export default Personal
