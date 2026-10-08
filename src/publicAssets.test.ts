import { readdirSync, readFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { describe, expect, it } from 'vitest'

const listFiles = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? listFiles(join(dir, entry.name)) : [join(dir, entry.name)]
  )

const publicFiles = new Set(
  listFiles('public').map((file) => '/' + relative('public', file).split(sep).join('/'))
)

const assetPattern = /["'`](\/[\w\-./]+\.(?:jpe?g|png|webp|svg|pdf))["'`]/g

describe('public assets', () => {
  const sourceFiles = listFiles('src').filter((file) => /\.(ts|tsx)$/.test(file))

  it.each(sourceFiles)('%s only references files that exist in public', (file) => {
    const content = readFileSync(file, 'utf8')
    const referenced = [...content.matchAll(assetPattern)].map((match) => match[1])
    const missing = referenced.filter((path) => !publicFiles.has(path))
    expect(missing).toEqual([])
  })
})
