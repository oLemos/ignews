import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>10 de Maio de 2022</time>
                        <strong>TypeScript: por trás do superset de JavaScript</strong>
                        <p>Faz algum tempo já que estamos encantados com o TypeScript e já inserimos a tecnologia em nossa programação diária. Entre iniciantes ainda existe muitas dúvidas sobre o que significa, na prática, TypeScript e quais são suas diferenças com o JavaScript.</p>
                    </a>
                    <a href="#">
                        <time>10 de Maio de 2022</time>
                        <strong>TypeScript: por trás do superset de JavaScript</strong>
                        <p>Faz algum tempo já que estamos encantados com o TypeScript e já inserimos a tecnologia em nossa programação diária. Entre iniciantes ainda existe muitas dúvidas sobre o que significa, na prática, TypeScript e quais são suas diferenças com o JavaScript.</p>
                    </a>
                    <a href="#">
                        <time>10 de Maio de 2022</time>
                        <strong>TypeScript: por trás do superset de JavaScript</strong>
                        <p>Faz algum tempo já que estamos encantados com o TypeScript e já inserimos a tecnologia em nossa programação diária. Entre iniciantes ainda existe muitas dúvidas sobre o que significa, na prática, TypeScript e quais são suas diferenças com o JavaScript.</p>
                    </a>
                </div>
            </main>
        </>
    )
}
