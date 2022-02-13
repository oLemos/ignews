import Head from 'next/head';

import styles from '../styles/home.module.scss';

import { SubscribeButton } from '../components/SubscribeButton';

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | ig.news</title>
            </Head>

            <main className={styles.contentContainer}>
                <section className={styles.hero} >
                    <span>👋 Hey, welcome</span>
                    <h1>News about <br /> the <span>React</span> world.</h1>

                    <p>
                        Get acess to all the publications <br />
                        <span>for $9.90 monthly</span>
                    </p>

                    <SubscribeButton />
                </section>

                <img src="/images/avatar.svg" alt="girl coding" />
            </main>
        </>
    );
}
