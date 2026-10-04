import type { ReactElement } from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { downloadCV } from '../utils'
import { cv, type CvRole } from '../content/cv'
import { emailAddress, gitHubLink, linkedInLink } from './portfolio/constants'
import styles from './CvPage.module.css'

type RoleEntryProps = {
  role: CvRole
}

const RoleEntry = ({ role }: RoleEntryProps): ReactElement => {
  const heading = role.organisation ? `${role.title}, ${role.organisation}` : role.title
  return (
    <section className={styles.entry} aria-label={heading}>
      <h3 className={styles.entryTitle}>{heading}</h3>
      <p className={styles.entryMeta}>{role.dates}</p>
      <ul>
        {role.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </section>
  )
}

const CvPage = (): ReactElement => {
  return (
    <div className="site">
      <Nav />
      <main>
        <article className="case-study">
          <h1 className="case-study__title">{cv.name}</h1>
          <p className="case-study__subtitle">CV</p>

          <ul className={styles.contactList} aria-label="Contact details">
            <li>{cv.location}</li>
            <li>
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </li>
            <li>
              <a href={linkedInLink} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={gitHubLink} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>

          <p className={styles.actions}>
            <button type="button" className="btn btn--primary" onClick={downloadCV}>
              Download CV (PDF)
            </button>
          </p>

          <h2>Profile</h2>
          <p>{cv.profile}</p>

          <h2>Skills</h2>
          <dl className={styles.skills}>
            {cv.skills.map((group) => (
              <div key={group.heading}>
                <dt>{group.heading}</dt>
                <dd>{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>

          <h2>Experience</h2>
          {cv.experience.map((role) => (
            <RoleEntry key={role.title} role={role} />
          ))}

          <h2>Earlier career</h2>
          {cv.earlierCareer.map((role) => (
            <RoleEntry key={role.title} role={role} />
          ))}

          <h2>Projects</h2>
          {cv.projects.map((project) => (
            <section key={project.name} className={styles.entry} aria-label={project.name}>
              <h3 className={styles.entryTitle}>{project.name}</h3>
              <p className={styles.entryMeta}>
                <a href={project.link.href} target="_blank" rel="noreferrer">
                  {project.link.label}
                </a>
              </p>
              <p>{project.description}</p>
            </section>
          ))}

          <h2>Certifications</h2>
          <ul>
            {cv.certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>

          <h2>Education</h2>
          {cv.education.map((education) => (
            <section
              key={education.institution}
              className={styles.entry}
              aria-label={education.institution}
            >
              <h3 className={styles.entryTitle}>{education.institution}</h3>
              {education.dates && <p className={styles.entryMeta}>{education.dates}</p>}
              <ul>
                {education.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default CvPage
