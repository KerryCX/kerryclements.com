import { useRef } from 'react'

type NavLink = {
  label: string
  href: string
}

const DEFAULT_LINKS: NavLink[] = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Apps', href: '/apps' },
  { label: 'Contact', href: '#contact' },
]

type NavProps = {
  links?: NavLink[]
}
export const Nav = ({ links = DEFAULT_LINKS }: NavProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  return (
    <>
      <nav className="nav" aria-label="Main">
        <div className="nav__brand">
          <button
            type="button"
            className="nav__photo-button"
            onClick={() => dialogRef.current?.showModal()}
            aria-label="View larger photo of Kerry Clements"
          >
            <img src="/kerry-clements-2025.jpeg" alt="" className="nav__photo" />
          </button>
          <a href="/" className="nav__name">
            Kerry Clements
          </a>
        </div>
        <ul className="nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <dialog
        ref={dialogRef}
        className="photo-overlay"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close()
        }}
      >
        <button
          type="button"
          className="photo-overlay__close"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close photo"
        >
          ✕
        </button>
        <img src="/kerry-clements-2025.jpeg" alt="Kerry Clements" className="photo-overlay__img" />
      </dialog>
    </>
  )
}
