import Head from 'next/head'
import Link from 'next/link'
import { title, titleShort, description, subscribeUrl, authorUrl, authorEmail, githubUrl } from '../lib/constants'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import HeaderBlock from '../components/HeaderBlock'

export default function Faq() {
    return (
        <>
            <HeaderBlock pageTitle='Frequently Asked Questions' />
            <TopNav />
            <section className='faq'>
                <h1>
                    FAQ
                </h1>
                <h2>
                    What is this?
                </h2>
                <p>
                    <em>{titleShort}</em> is an experiment at writing a serial novel. You can subscribe to it via
                    {' '}
                    <a href={subscribeUrl}>email</a>,
                    {' '}
                    <Link href='/rss.xml'>
                        <a>RSS</a>
                    </Link>,
                    {' '}
                    or even by following
                    {' '}
                    <Link href={githubUrl}>
                        <a>the GitHub repository</a>
                    </Link>
                    .
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
                    Which genre is this story?
                </h2>
                <p>
                    I genuinely don&rsquo;t know. Let&rsquo;s find out together. You can expect wry sarcasm, serious points, and a pulp genre fiction sensibility.
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
                    So there&rsquo;s no business model?
                </h2>
                <p>
                    Absolutely not. In fact, it&rsquo;s released under a Creative Commons license, so you could take the text and sell it yourself (as long as you include author attribution and release under the same license). If you feel like you should spend some money somewhere,
                    {' '}
                    <Link href='https://werd.io/content/all/?q=fairness+friday'>
                        <a>check out my Fairness Friday posts</a>
                    </Link>
                    {' '}
                    or donate to the
                    {' '}
                    <Link href='https://aclu.org'>
                        <a>ACLU</a>
                    </Link>
                    .
                </p>
                <h2>
                    Can I make suggestions?
                </h2>
                <p>
                    Respectfully, I ask that you don&rsquo;t. I won&rsquo;t read any story-related suggestions you send me. I&rsquo;d love your feedback though!
                    You can email me at <a href={'mailto:' + authorEmail}>{authorEmail}</a>.
                </p>
                <h2>
                    Do you also do serious technology work?
                </h2>
                <p>
                    Yes. You can learn about that
                    {' '}
                    <Link href={authorUrl}>
                        <a>over here</a>
                    </Link>
                    .
                </p>
                <h2>
                    Okay, but how can you expect anyone to take you seriously?
                </h2>
                <p>
                    I don&rsquo;t!
                </p>
            </section>
            <Footer />
        </>
    )
}
