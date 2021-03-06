import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { DashboardCollaboratorsDetails } from "../../components/collaboratorDetails";
import { DashboardHeader } from "../../components/dashboard/components/dashboardHeader";
import { Header } from "../../components/header";
import { InstitutionDashboardContainer } from "../../components/institutionDashboardContainer/style";
import { LeftDiv } from "../../components/leftDiv";
import { Main } from "../../components/main/style";
import { api } from "../../services/api";
import { Collaborator, CollaboratorDetailsProps } from "../../types/collaboratorsTypes";

type CollaboratorPageProps = {
    collaborator: CollaboratorDetailsProps
}

const CollaboratorPage: NextPage<CollaboratorPageProps> = ({ collaborator }) => {

    return (
        <div id="container">
            <Header />

            <Main>
                <LeftDiv />

                <InstitutionDashboardContainer>

                    <DashboardHeader
                        title="Detalhes do colaborador"
                        hasBackButton={true}
                    />

                    <DashboardCollaboratorsDetails
                        collaborator={collaborator}
                    />

                </InstitutionDashboardContainer>

            </Main>
        </div>
    )
}

export default CollaboratorPage;


export const getStaticPaths: GetStaticPaths = async () => {

    // Get all data
    const response = await api.get(`agents`)
    const { items } = response.data

    // Get the collaborators list inside items
    const data = items as Collaborator[]

    {/*
        The parameters received in paths will have a value of "1",
        because this is the only id available in the API to fetch the details of the collaborator, 
        to fetch the other collaborators (when they are available in the API) 
        just assign the value collaborator.agent_id.toString() in slug  
    */}

    const onlyAvailableId = 1;

    // Creates a path for all collaborators using the agent_id
    const paths = data.map(collaborator => {
        return {
            params: {
                slug: onlyAvailableId.toString(),
                // slug: collaborator.agent_id.toString()
            }
        }
    })

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const slug = ctx.params?.slug as string

    const response = await api.get(`agent/${slug}`)
    const { agent } = response.data

    return {
        props: {
            collaborator: agent
        },
        revalidate: 60 * 60 * 1 // 1 hour
    }
}