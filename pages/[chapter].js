import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import marked from 'marked'
import { getAllChapters, getChapterBySlug } from '../lib/chapters'
import Chapter from '../components/Chapter'
import Head from 'next/head'
import { title, description } from '../lib/constants'

export default function ChapterPage({ chapterData }) {
    const router = useRouter()
    if (!router.isFallback && !chapterData?.slug) return <ErrorPage statusCode={404}/>
    return (
        <>
            <Head>
                <title>
                    {chapterData.slug}
                    {' '}
                    | {title}
                </title>
                <meta name='description' content={description} />
            </Head>
            <article>
                <Chapter chapter={chapterData} />
            </article>
        </>
    )
}

export async function getStaticProps({ params }) {
    const chapterData = getChapterBySlug(params.chapter)
    chapterData.html = marked(chapterData.content).toString()

    return {
        props: {
            chapterData: chapterData,
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
