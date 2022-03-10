import { useCollaborators } from "../../../../hooks/useCollaborators";
import { useRoles } from "../../../../hooks/useRoles";
import { CollaboratorsListHeader } from "../../../collaborator/collaboratorsListHeader";
import { CollaboratorsListItems } from "../../../collaborator/collaboratorsListItems";
import { RolesListItems } from "../../../roles/rolesListItems";
import { Container } from "./style";

export function DashboardList() {

    // get the data from collaborators context
    const {
        collaboratorsIsActive,
        indexOfChunkedArrayToShow,
        chunkedCollaboratorsList,
    } = useCollaborators()

    const { 
        rolesData,
     } = useRoles()

    return (
        <Container>
            <table cellSpacing={0}>

                <CollaboratorsListHeader />

                {
                    collaboratorsIsActive && (
                        <tbody>
                            {chunkedCollaboratorsList !== undefined ? (
                                chunkedCollaboratorsList[indexOfChunkedArrayToShow]?.map(collaborator => {
                                    return (
                                        <CollaboratorsListItems
                                            key={collaborator.agent_id}
                                            collaborator={collaborator}
                                        />
                                    )
                                })
                            ) : (<></>)}
                        </tbody>
                    )
                }

                {
                    collaboratorsIsActive === false && (

                        <tbody>
                            {rolesData !== undefined ? (
                                rolesData.map(roles => {
                                    return (
                                        <RolesListItems
                                            key={rolesData.indexOf(roles)}
                                            role={roles}
                                        />
                                    )
                                })
                            ) : (<></>)}
                        </tbody>

                    )
                }
                
            </table>
        </Container >
    )
}



