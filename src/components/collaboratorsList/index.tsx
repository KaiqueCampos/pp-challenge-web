import { useCollaborators } from "../../hooks/useCollaborators";
import { CollaboratorsListHeader } from "../collaboratorsListHeader";
import { CollaboratorsListItems } from "../collaboratorsListItems";
import { Container } from "./style";

export function CollaboratorsList() {

    // get the data from collaborators context
    const {
        chunkedCollaboratorsList,
    } = useCollaborators()

    return (
        <Container cellSpacing={0}>

            <CollaboratorsListHeader/>

            <tbody>
                {chunkedCollaboratorsList !== undefined ? (
                    chunkedCollaboratorsList[0].map(collaborator => {
                        return (
                            <CollaboratorsListItems
                                key={collaborator.agent_id}
                                collaborator={collaborator}
                            />
                        )
                    })
                ) : (<></>)}
            </tbody>

        </Container>
    )
}



