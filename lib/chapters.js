import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import marked from "marked";

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

export function getFullPathOfChapter(slug) {
    return join(chaptersDirectory, `${slug}.md`)
}

export function getNextChapter(chapterSlug) {
    const nextChapterSlug = (parseInt(chapterSlug) + 1).toString().padStart(2, '0')
    const nextChapterFilename = getFullPathOfChapter(nextChapterSlug)
    if (fs.existsSync(nextChapterFilename)) return nextChapterSlug
    return false
}

export function getPreviousChapter(chapterSlug) {
    if (chapterSlug == '00') return false
    const previousChapterSlug = (parseInt(chapterSlug) - 1).toString().padStart(2, '0')
    const previousChapterFilename = getFullPathOfChapter(previousChapterSlug)
    if (fs.existsSync(previousChapterFilename)) return previousChapterSlug
    return false
}

export function getChapterBySlug(slug) {
    const realSlug = getChapterSlugFromFilename(slug)
    const fullPath = getFullPathOfChapter(realSlug)

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { content } = matter(fileContents)
    const { birthtime } = fs.statSync(fullPath)
    const html = marked(content).toString()

    return {
        slug: realSlug,
        publishDate: birthtime.toString(),
        content,
        html,
    }
}
