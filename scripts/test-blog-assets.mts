import assert from 'node:assert/strict'
import { existsSync, readFileSync, statSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { resolve } from 'node:path'

const appPath = resolve('src/App.tsx')
const source = readFileSync(appPath, 'utf8')
const start = source.indexOf('const blogArticles: BlogArticle[] = [')
const end = source.indexOf('function SafeBlogImage', start)

assert.ok(start >= 0 && end > start, 'The blog article source block must be present.')

const articleSource = source.slice(start, end)
const slugs = [...articleSource.matchAll(/\bslug:\s*'([^']+)'/g)].map(match => match[1])
const images = [...articleSource.matchAll(/\bimage:\s*'([^']+)'/g)].map(match => match[1])

assert.equal(slugs.length, 33, 'The public blog must expose exactly 33 articles.')
assert.equal(new Set(slugs).size, 33, 'Every article slug must be unique.')
assert.equal(images.length, 33, 'Every article must have one image.')
assert.equal(new Set(images).size, 33, 'Every article image path must be unique.')

const expectedImages = Array.from({ length: 33 }, (_, index) => {
  const number = index + 1
  return `/images/blog-${number}.${number <= 9 ? 'jpg' : 'webp'}`
})
assert.deepEqual(images, expectedImages, 'Images must be numbered blog-1 through blog-33 in article order.')
assert.equal(existsSync(resolve('public/images/blog')), false, 'No separate blog image folder should exist.')

const hashes = new Set<string>()
for (const image of images) {
  assert.match(image, /^\/images\/blog-(?:[1-9]|[12][0-9]|3[0-3])\.(?:jpg|webp)$/, `Unexpected image path: ${image}`)
  const localPath = resolve('public', image.slice(1))
  assert.ok(existsSync(localPath), `Missing image: ${image}`)
  assert.ok(statSync(localPath).size > 0, `Empty image: ${image}`)
  hashes.add(createHash('sha256').update(readFileSync(localPath)).digest('hex'))
}

assert.equal(hashes.size, 33, 'Every article must use an original, non-duplicated image asset.')
assert.match(source, /<SafeBlogImage src=\{article\.image\}/, 'Cards must render the article image source.')
assert.match(source, /<SafeArticleImage src=\{selectedArticle\.image\}/, 'Detail pages must render the same article image source.')

console.log('Blog assets: blog-1 through blog-33 verified for list and detail views.')
