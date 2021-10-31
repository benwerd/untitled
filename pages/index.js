import Head from 'next/head'
import Link from 'next/link'
import {getAllChapters, getAllChapterSlugs} from '../lib/chapters'
import ChapterList from '../components/ChapterList'
import { title, description } from '../lib/constants'
import {buildRSS} from "../lib/feed";

export default function Home({ chapters }) {
  return (
    <>
        <Head>
            <title>
                {title}
            </title>
            <meta name='description' content={description} />
        </Head>
        <h1>
            Untitled
        </h1>
        <section className='explanation'>
            <p>
                <em>Untitled</em> is a serial story about the future by
                {' '}
                <a href='https://werd.io'>Ben Werdmuller</a>.
                Season one begins on November 1, 2021.
            </p>
            <p className='links'>
                <Link as='/faq' href='/faq'>
                    <a>FAQ</a>
                </Link>
                {' '}|{' '}
                <Link href='https://artisanal-artisan-3527.ck.page/ac21d80aa1'>
                    <a>Subscribe by Email</a>
                </Link>
                {' '}|{' '}
                <Link href='/rss.xml'>
                    <a>RSS</a>
                </Link>
                {' '}|{' '}
                <a href='https://github.com/benwerd/untitled'>GitHub</a>
            </p>
        </section>
        <section>
            <h2>Chapters</h2>
            <ChapterList chapters={chapters}/>
        </section>
    </>
  )
}

export async function getStaticProps() {
    buildRSS(getAllChapters())
    return {
        props: {
            chapters: getAllChapterSlugs(),
        }
    }
}
