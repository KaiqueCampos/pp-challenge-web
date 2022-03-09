import { Font600Size18 } from "../../styles/emotion/Font600";
import { CollaboratorDetailsProps } from "../../types/collaboratorsTypes";
import { CollaboratorsDetailsHeader } from "../collaboratorDetailsHeader";
import { CollaboratorDetailsPersonalInformation } from "../collaboratorDetailsPersonalInformation";
import { Container } from "./styles";

type DashboardCollaboratorsDetailsProps = {
    collaborator: CollaboratorDetailsProps,
}

export function DashboardCollaboratorsDetails({ collaborator }: DashboardCollaboratorsDetailsProps) {
    return (
        <Container>

            <CollaboratorsDetailsHeader
                email={collaborator.email}
                name={collaborator.name}
                image={collaborator.image}
            />

            <Font600Size18
                color="34423D"
            >
                Informações Pessoais
            </Font600Size18>


            <CollaboratorDetailsPersonalInformation
                birth_date={collaborator.birth_date}
                phone={collaborator.phone}
                document={collaborator.document}
            />
        </Container>
    )
}