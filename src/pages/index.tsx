import Head from 'next/head';
import { GetStaticProps } from 'next';

import styles from '../styles/home.module.scss';

import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

interface HomeProps {
    product: {
        priceId: string;
        amount: number;
    }
}

export default function Home({ product }: HomeProps) {
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
                        <span>for {product.amount} monthly</span>
                    </p>

                    <SubscribeButton priceId={product.priceId} />
                </section>

                <img src="/images/avatar.svg" alt="girl coding" />
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    // O método "retrieve" busca apenas um, e recebe o id do preço.
    const price = await stripe.prices.retrieve('price_1KSVmVGJ0Ugaf2OBb5KAO4W7')

    // Esta opção "expand" retorna todas as informações do produto.
    /* const price = await stripe.prices.retrieve('price_1KSVmVGJ0Ugaf2OBb5KAO4W7', {
        expand: ['product']
    }) */

    const product = {
        priceId: price.id,
        amount: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price.unit_amount / 100),
    }

    return {
        props: {
            product
        },
        revalidate: 60 * 60 * 24, // 24 hours
    }
}
