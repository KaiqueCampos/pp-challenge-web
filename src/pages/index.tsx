import type { NextPage } from 'next'
import { Dashboard } from '../components/dashboard'
import { Header } from '../components/header'
import { InstitutionDashboardContainer } from '../components/institutionDashboardContainer/style'
import { LeftDiv } from '../components/leftDiv'
import { Main } from '../components/main/style'
import { TitleSize32 } from '../styles/emotion/Titles'

const Home: NextPage = () => {
  return (
    <div id="container">
      <Header />
      <Main>
        <LeftDiv />

        <InstitutionDashboardContainer>
          <TitleSize32>
              Organização
          </TitleSize32>

          <Dashboard />
        </InstitutionDashboardContainer>
        
      </Main>
    </div>
  )
}

export default Home
