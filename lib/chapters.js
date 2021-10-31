import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const chaptersDirectory = join(process.cwd(), '_chapters')

export function getChapterFilenames() {
    return fs.readdirSync(chaptersDirectory)
        .sort((post1, post2) => (post1 < post2 ? -1 : 1))
}

export function getAllChapterSlugs() {
    const filenames = getChapterFilenames()
    return filenames
        .map((filename) => getChapterSlugFromFilename(filename))
}

export function getAllChapters() {
    const filenames = getChapterFilenames()
    return filenames
        .map((slug) => getChapterBySlug(slug))
}

export function getChapterSlugFromFilename(filename) {
    return filename.replace(/\.md$/, '')
}

export function getChapterBySlug(slug) {
    const realSlug = getChapterSlugFromFilename(slug)
    const fullPath = join(chaptersDirectory, `${realSlug}.md`)

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { content } = matter(fileContents)

    return {
        slug: realSlug,
        content,
    }
}
