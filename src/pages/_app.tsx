import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react'

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextAuthSessionProvider session={pageProps.session}>
            <Header />
            <Component {...pageProps} />
        </NextAuthSessionProvider>
    );
}

export default MyApp;
