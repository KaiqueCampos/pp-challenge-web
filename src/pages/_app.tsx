import type { AppProps } from 'next/app'
import { AppContextProvider } from '../contexts/appContext'
import { CollaboratorsContextProvider } from '../contexts/CollaboratorsContext'
import { RolesContextProvider } from '../contexts/RolesContext'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (

    <AppContextProvider>
      <CollaboratorsContextProvider>
        <RolesContextProvider>
          <Component {...pageProps} />
        </RolesContextProvider>
      </CollaboratorsContextProvider>
    </AppContextProvider>
  )
}
