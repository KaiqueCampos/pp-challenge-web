import { useCollaborators } from "../../hooks/useCollaborators";
import { Container } from "./style";

export function CollaboratorsList() {

    // get the data from collaborators context
    const { collaboratorsData } = useCollaborators()

    return (
        <Container cellSpacing={0}>
            <thead>
                <tr>
                    <th>Nome completo</th>
                    <th>Departamento</th>
                    <th>Cargo</th>
                    <th>Unidade</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {collaboratorsData !== undefined ? (
                    collaboratorsData.map(collaborator => {
                        return (
                            <tr key={collaborator.agent_id}>
                                <th>{collaborator.name}</th>
                                <th>{collaborator.department}</th>
                                <th>{collaborator.role}</th>
                                <th>{collaborator.branch}</th>
                                <th>{collaborator.inactivestatus}</th>
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



