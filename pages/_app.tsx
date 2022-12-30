import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps } : AppProps) : JSX.Element {
  return (
        <>
          <Head>
            <title>Top app</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"/>
          </Head>
          <Component {...pageProps} />
        </>
  );
}
