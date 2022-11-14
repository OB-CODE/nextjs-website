import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Open_Sans } from '@next/font/google'

const inter = Open_Sans();

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <Head>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=DM+Serif+Display" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=DM+Sans" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main></div>
  )
}
