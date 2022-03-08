import { useCollaborators } from "../../hooks/useCollaborators";
import { CollaboratorsListHeader } from "../collaboratorsListHeader";
import { CollaboratorsListItems } from "../collaboratorsListItems";
import { Container } from "./style";

export function CollaboratorsList() {

    // get the data from collaborators context
    const {
        indexOfChunkedArrayToShow,
        chunkedCollaboratorsList,
    } = useCollaborators()

    return (
        <Container>
            <table cellSpacing={0}>

                <CollaboratorsListHeader />

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

            </table>
        </Container>
    )
}



