import Link from 'next/link'
import { title } from '../lib/constants'

export default function TopNav() {
    return (
        <nav>
            <Link href='/'>
                <a>
                    {title}
                </a>
            </Link>
        </nav>
    )
}