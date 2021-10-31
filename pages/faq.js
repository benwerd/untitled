import Head from 'next/head'
import Link from 'next/link'
import { title, description } from '../lib/constants'

export default function Faq() {
    return (
        <>
            <Head>
                <title>
                    Frequently Asked Questions | {title}
                </title>
                <meta name='description' content={description} />
            </Head>
            <section className='faq'>
                <h1>
                    FAQ
                </h1>
                <h2>
                    What is this?
                </h2>
                <p>
                    <em>Untitled</em> is an experiment at writing a serial novel. You can subscribe to it via
                    {' '}
                    <a href='https://artisanal-artisan-3527.ck.page/ac21d80aa1'>email</a>,
                    {' '}
                    <Link href='/rss.xml'>
                        <a>RSS</a>
                    </Link>,
                    {' '}
                    or even by following
                    {' '}
                    <a href='https://github.com/benwerd/untitled'>the GitHub repository</a>.
                </p>
                <h2>
                    Is it really called Untitled?
                </h2>
                <p>
                    For now. I expect it will gain a title soon enough, once it&rsquo;s had some time to breathe and get to know itself.
                </p>
                <h2>
                    Is this related to
                    {' '}
                    <Link href='https://nanowrimo.org'>
                        <a>NaNoWriMo</a>
                    </Link>
                    ?
                </h2>
                <p>
                    It&rsquo;s in the spirit of NaNoWriMo, but is likely to extend beyond it. I don&rsquo;t have a finish date in mind. Let&rsquo;s see where the story takes us.
                </p>
                <h2>
                    Is this related to any startup?
                </h2>
                <p>
                    No, it&rsquo;s not a business or technology project of any kind. I&rsquo;m working on this for its own sake.
                    {' '}
                    Remember when people built things on the web for fun?
                </p>
                <h2>
                    Can I make suggestions?
                </h2>
                <p>
                    Respectfully, I ask that you don&rsquo;t. I won&rsquo;t read any story-related suggestions you send me. I&rsquo;d love your feedback though!
                    You can email me at <a href='mailto:ben@benwerd.com'>ben@benwerd.com</a>.
                </p>
                <h2>
                    Do you also write about technology?
                </h2>
                <p>
                    Yes,
                    {' '}
                    <Link href='https://werd.io'>
                        <a>over here</a>
                    </Link>
                    .
                </p>
            </section>
        </>
    )
}