import styles from './PersonalFooter.module.css'

const INSTAGRAM_URL = 'https://www.instagram.com/kerryclementsx'

type PersonalFooterProps = {
  backHref: string
  backLabel: string
}

export const PersonalFooter = ({ backHref, backLabel }: PersonalFooterProps) => {
  return (
    <div className={styles.footer}>
      <a href={backHref} className={styles.backLink}>
        ← {backLabel}
      </a>

      <a href={INSTAGRAM_URL} className={styles.instagramLink} target="_blank" rel="noreferrer">
        Instagram
      </a>
    </div>
  )
}
