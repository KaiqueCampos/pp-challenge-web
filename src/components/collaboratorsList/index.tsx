import { useEffect } from "react";
import { useCollaborators } from "../../hooks/useCollaborators";
import { Font500Size14 } from "../../styles/emotion/Font500";
import { Font600Size12 } from "../../styles/emotion/Font600";
import { Collaborator } from "../../types/collaboratorsTypes";
import { CollaboratorsActiveOrInactiveStatus } from "../collaboratorsActiveOrInactiveStatus";
import { CollaboratorsListHeader } from "../collaboratorsListHeader";
import { Container } from "./style";

export function CollaboratorsList() {

    // get the data from collaborators context
    const {
        collaboratorsData,
        chunkedCollaboratorsList,
        handleCollaboratorsListInChunks
    } = useCollaborators()

    useEffect(() => {
        if (collaboratorsData !== undefined) {
            handleCollaboratorsListInChunks(collaboratorsData, 10);
            console.log(chunkedCollaboratorsList);
        }
    }, [])


    return (
        <Container cellSpacing={0}>
            <thead>
                <CollaboratorsListHeader />
            </thead>

            <tbody>
                {collaboratorsData !== undefined ? (
                    collaboratorsData.map(collaborator => {
                        return (
                            <tr key={collaborator.agent_id}>
                                <th>
                                    <div className="collaboratorsNameAndProfileImage">
                                        <img
                                            className="collaboratorsProfileImage"
                                            src={collaborator.image}
                                        />

                                        <Font600Size12
                                            color="#587169"
                                        >
                                            {collaborator.name}
                                        </Font600Size12>
                                    </div>
                                </th>
                                <th>{collaborator.department}</th>
                                <th>{collaborator.role}</th>
                                <th>{collaborator.branch}</th>
                                <th>
                                    <CollaboratorsActiveOrInactiveStatus
                                        isActive={collaborator.status}
                                    >
                                        <Font500Size14
                                            color="#34423D"
                                        >
                                            {collaborator.status === 'active' ? 'Ativo' : 'Inativo'}
                                        </Font500Size14>
                                    </CollaboratorsActiveOrInactiveStatus>
                                </th>
                                <th>
                                    <img src="settingsIcon.svg" />
                                </th>
                            </tr>
                        )
                    })
                ) : (<></>)}
            </tbody>
        </Container>
    )
}



