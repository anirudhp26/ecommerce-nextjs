import '../styles/globals.css'
import type { AppProps } from 'next/app'
import './navbar.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
