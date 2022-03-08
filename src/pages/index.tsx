import type { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import { Dashboard } from '../components/dashboard'
import { Header } from '../components/header'
import { InstitutionDashboardContainer } from '../components/institutionDashboardContainer/style'
import { LeftDiv } from '../components/leftDiv'
import { Main } from '../components/main/style'
import { useCollaborators } from '../hooks/useCollaborators'
import { api } from '../services/api'
import { TitleSize32 } from '../styles/emotion/Titles'
import { CollaboratorsDataProps } from '../types/collaboratorsTypes'


const Home: NextPage<CollaboratorsDataProps> = ({ collaborators }) => {

  // set the data in context
  const {handleCollaboratorsData } = useCollaborators()

  useEffect(() => {
    handleCollaboratorsData({ collaborators })
  }, [])


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

export default Home;

export const getStaticProps: GetStaticProps = async () => {

  const response = await api.get(`agents`)
  const { items } = response.data

  return {
    props: {
      collaborators: items
    },
    revalidate: 60 * 60 * 1 // 1 hour

  }
}


