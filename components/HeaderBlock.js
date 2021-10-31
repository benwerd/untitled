import { description, title } from '../lib/constants'
import Head from 'next/head'

export default function HeaderBlock({ pageTitle }) {
    return (
        <Head>
            <title>
                {pageTitle && pageTitle + ' | '}
                {title}
            </title>
            <meta name='description' content={description} />
            <link rel="alternate" type="application/rss+xml" title={title} href="/rss.xml"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </Head>
    )
}
