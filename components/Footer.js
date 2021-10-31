import Link from 'next/link'
import { ccString, authorName, authorUrl } from '../lib/constants'

export default function Footer() {
    return (
        <footer>
            <div dangerouslySetInnerHTML={{__html: ccString}} />
            &copy;
            {' '}
            <Link href={authorUrl}>
                <a>
                    {authorName}
                </a>
            </Link>
        </footer>
    )
}
