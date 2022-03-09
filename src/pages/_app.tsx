import type { AppProps } from 'next/app'
import { CollaboratorsContextProvider } from '../contexts/CollaboratorsContext'
import { RolesContextProvider } from '../contexts/RolesContext'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (

    <CollaboratorsContextProvider>
      <RolesContextProvider>
        <Component {...pageProps} />
      </RolesContextProvider>
    </CollaboratorsContextProvider>
  )
}
