import type { ReactElement } from 'react'
import { useLocation, useMatches } from 'react-router-dom'
import { siteMeta, type PageMeta } from '../routes/pageMeta'

const siteUrl = 'https://kerryclements.com'

const isPageMeta = (handle: unknown): handle is PageMeta =>
  typeof handle === 'object' && handle !== null && 'title' in handle

// React 19 hoists <title>, <link> and <meta> into <head>, so each route's
// handle gives the page its own title, description, canonical and og tags.
export const SiteMeta = (): ReactElement => {
  const { pathname } = useLocation()
  const matches = useMatches()

  const deepestMeta = [...matches].reverse().find((match) => isPageMeta(match.handle))?.handle
  const meta: PageMeta = isPageMeta(deepestMeta) ? deepestMeta : siteMeta

  const pathWithoutTrailingSlash = pathname.replace(/\/+$/, '')
  const pageUrl = `${siteUrl}${pathWithoutTrailingSlash}`

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {!meta.noCanonical && (
        <>
          <link rel="canonical" href={pageUrl} />
          <meta property="og:url" content={pageUrl} />
        </>
      )}
    </>
  )
}
