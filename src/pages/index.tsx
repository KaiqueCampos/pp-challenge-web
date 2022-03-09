import type { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import { Dashboard } from '../components/dashboard'
import { Header } from '../components/header'
import { InstitutionDashboardContainer } from '../components/institutionDashboardContainer/style'
import { LeftDiv } from '../components/leftDiv'
import { Main } from '../components/main/style'
import { useCollaborators } from '../hooks/useCollaborators'
import { useRoles } from '../hooks/useRoles'
import { api } from '../services/api'
import { TitleSize32 } from '../styles/emotion/Titles'
import { Collaborator, CollaboratorsDataProps } from '../types/collaboratorsTypes'
import { Role } from '../types/rolesTypes'

type DataProps = {
  collaborators: Collaborator[],
  roles: Role[]
}

const Home: NextPage<DataProps> = ({ collaborators, roles }) => {

  // set the data in context
  const { handleCollaboratorsData } = useCollaborators()
  const { handleRolesData } = useRoles()

  useEffect(() => {
    handleCollaboratorsData({ collaborators })
    handleRolesData({roles})
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

  const responseCollaborators = await api.get(`agents`)
  const { items } = responseCollaborators.data

  const responseRoles = await api.get(`roles`)
  const { roles } = responseRoles.data

  return {
    props: {
      collaborators: items,
      roles: roles
    },
    revalidate: 60 * 60 * 1 // 1 hour

  }
}


