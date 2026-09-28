import type { RouteObject } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { router } from './router'
import sitemap from '../../public/sitemap.xml?raw'

const siteUrl = 'https://kerryclements.com'

// Routes that shouldn't be in the sitemap: the 404 catch-all and redirects to other sites
const excludedPaths = ['*', '/store']

const collectPaths = (routes: RouteObject[]): string[] =>
  routes.flatMap((route) => [
    ...(route.path ? [route.path] : []),
    ...(route.children ? collectPaths(route.children) : []),
  ])

describe('sitemap.xml', () => {
  it('lists every public route, and nothing else', () => {
    const sitemapPaths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
      (match) => match[1].replace(siteUrl, '') || '/'
    )
    const routePaths = collectPaths(router.routes).filter((path) => !excludedPaths.includes(path))

    expect([...sitemapPaths].sort()).toEqual([...routePaths].sort())
  })
})
