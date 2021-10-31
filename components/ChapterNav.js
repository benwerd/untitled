import Link from 'next/link'
import { subscribeUrl } from '../lib/constants'

export default function ChapterNav({ chapterSlug, previousChapter, nextChapter }) {
    return (
        <nav className='nav-bottom'>
            {nextChapter &&
                <Link href={'/' + nextChapter}>
                    <a>Next</a>
                </Link>
            }
            {previousChapter &&
                <Link href={'/' + previousChapter}>
                    <a>Previous</a>
                </Link>
            }
            {chapterSlug != '00' &&
                <Link href='/00'>
                    <a>Start from beginning</a>
                </Link>
            }
            <Link href={subscribeUrl}>
                <a>
                    Subscribe by email
                </a>
            </Link>
        </nav>
    )
}
