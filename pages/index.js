import Head from 'next/head'
import Link from 'next/link'
import { getAllChapters, getAllChapterSlugs, writeWordCountFile } from '../lib/chapters'
import ChapterList from '../components/ChapterList'
import { title, titleShort, description, subscribeUrl, authorUrl, authorName, githubUrl } from '../lib/constants'
import { buildRSS } from '../lib/feed'
import Footer from '../components/Footer'
import HeaderBlock from '../components/HeaderBlock'

export default function Home({ chapters }) {
  return (
    <>
        <HeaderBlock />
        <h1>
            {titleShort}
        </h1>
        <section className='explanation'>
            <p>
                <em>{titleShort}</em> is a serial story about the future by
                {' '}
                <a href={authorUrl}>{authorName}</a>.
                Season one begins on November 1, 2021.
            </p>
            <div className='links'>
                <Link as='/faq' href='/faq'>
                    <a>FAQ</a>
                </Link>
                {' '}|{' '}
                <Link href={subscribeUrl}>
                    <a>Subscribe by Email</a>
                </Link>
                {' '}|{' '}
                <Link href='/rss.xml'>
                    <a>RSS</a>
                </Link>
                {' '}|{' '}
                <Link href={githubUrl}>
                    <a>GitHub</a>
                </Link>
            </div>
        </section>
        <section>
            <h2>Chapters</h2>
            <ChapterList chapters={chapters}/>
        </section>
        <Footer />
    </>
  )
}

export async function getStaticProps() {
    buildRSS(getAllChapters())
    writeWordCountFile()
    return {
        props: {
            chapters: getAllChapterSlugs(),
        }
    }
}
