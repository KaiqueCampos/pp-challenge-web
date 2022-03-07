import { CommonFontSize14 } from "../../styles/emotion/CommonFont";
import { CollaboratorsPositionsButton } from "./emotion/ButtonStyled";
import { Container } from "./emotion/ContainerStyled";

export function ToggleCollaboratorsPositionsButton() {
    return (
        <Container>
            <CollaboratorsPositionsButton
                isActive={true}
            >
                <CommonFontSize14
                    isBold={true}
                >
                    Colaboradores
                </CommonFontSize14>
                
            </CollaboratorsPositionsButton>

            <CollaboratorsPositionsButton
                isActive={false}
            >
                 <CommonFontSize14
                    isBold={true}
                >
                    Cargos
                </CommonFontSize14>

            </CollaboratorsPositionsButton>
        </Container>
    )
}