import { useCollaborators } from "../../hooks/useCollaborators";
import { useRoles } from "../../hooks/useRoles";
import { CollaboratorsListHeader } from "../collaboratorsListHeader";
import { CollaboratorsListItems } from "../collaboratorsListItems";
import { RolesListItems } from "../rolesListItems";
import { Container } from "./style";

export function CollaboratorsList() {

    // get the data from collaborators context
    const {
        collaboratorsIsActive,
        indexOfChunkedArrayToShow,
        chunkedCollaboratorsList,
    } = useCollaborators()

    const { rolesData } = useRoles()

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
                                            key={roles.name}
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



