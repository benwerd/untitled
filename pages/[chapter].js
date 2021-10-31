import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllChapters, getChapterBySlug, getNextChapter, getPreviousChapter } from '../lib/chapters'
import Chapter from '../components/Chapter'
import Head from 'next/head'
import { title, description } from '../lib/constants'
import TopNav from '../components/TopNav'
import ChapterNav from '../components/ChapterNav'
import Footer from '../components/Footer'
import HeaderBlock from '../components/HeaderBlock'

export default function ChapterPage({ chapterData, nextChapter, previousChapter }) {
    const router = useRouter()
    if (!router.isFallback && !chapterData?.slug) return <ErrorPage statusCode={404}/>
    return (
        <>
            <HeaderBlock pageTitle={chapterData.slug} />
            <TopNav />
            <article>
                <Chapter chapter={chapterData} />
            </article>
            <ChapterNav chapterSlug={chapterData.slug} nextChapter={nextChapter} previousChapter={previousChapter} />
            <Footer />
        </>
    )
}

export async function getStaticProps({ params }) {
    const chapterData = getChapterBySlug(params.chapter)

    return {
        props: {
            chapterData: chapterData,
            nextChapter: getNextChapter(params.chapter),
            previousChapter: getPreviousChapter(params.chapter),
        }
    }
}

export async function getStaticPaths() {
    const chapters = getAllChapters()
    return {
        paths: chapters.map((chapter) => {
            return {
                params: {
                    chapter: chapter.slug.toString(),
                },
            }
        }),
        fallback: false,
    }
}
