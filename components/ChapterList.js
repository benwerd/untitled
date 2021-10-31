import Link from 'next/link'

export default function ChapterList({ chapters }) {
    return (
        <>
            {chapters.map((chapter) => (
                <p key={chapter}>
                    <Link as={`/${chapter}`} href="/[chapter]">
                        <a>{chapter}.</a>
                    </Link>
                </p>
            ))}
        </>
    )
}
