import type { AppProps } from 'next/app'
import { CollaboratorsContextProvider } from '../contexts/CollaboratorsContext'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (

    <CollaboratorsContextProvider>
      <Component {...pageProps} />
    </CollaboratorsContextProvider>
  )
}
