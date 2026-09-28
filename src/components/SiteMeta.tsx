import type { ReactElement } from 'react'
import { useLocation, useMatches } from 'react-router-dom'

const siteUrl = 'https://kerryclements.com'

type RouteHandle = { noCanonical?: boolean }

// React 19 hoists <link> and <meta> into <head>, so each page gets its own
// canonical and og:url instead of every page pointing at the homepage.
export const SiteMeta = (): ReactElement | null => {
  const { pathname } = useLocation()
  const matches = useMatches()

  const isExcluded = matches.some((match) => (match.handle as RouteHandle | undefined)?.noCanonical)
  if (isExcluded) return null

  const pathWithoutTrailingSlash = pathname.replace(/\/+$/, '')
  const pageUrl = `${siteUrl}${pathWithoutTrailingSlash}`

  return (
    <>
      <link rel="canonical" href={pageUrl} />
      <meta property="og:url" content={pageUrl} />
    </>
  )
}
