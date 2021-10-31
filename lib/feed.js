import { Feed } from 'feed'
import fs from 'fs';
import { title, description, baseUrl, authorName, authorEmail, authorUrl } from './constants'

export const buildRSS = (chapters) => {
    const feed = new Feed({
        title,
        description,
        id: baseUrl,
        link: baseUrl,
        language: 'en',
        feedLinks: {
            rss2: `${baseUrl}/rss.xml`,
        },
        author: {
            name: authorName,
            email: authorEmail,
            link: authorUrl,
        }
    })

    chapters.forEach((chapter) => {
        const id = `${baseUrl}/${chapter.slug}`
        feed.addItem({
            title: chapter.slug,
            id,
            link: id,
            description: chapter.html,
            content: chapter.html,
            date: new Date(chapter.publishDate),
        })
    })

    fs.writeFileSync('public/rss.xml', feed.rss2());
}
