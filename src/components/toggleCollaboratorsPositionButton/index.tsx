import { Font600Size14 } from "../../styles/emotion/Font600";
import { Button } from "./emotion/ButtonStyled";
import { Container } from "./emotion/ContainerStyled";

export function ToggleCollaboratorsPositionsButton() {
    return (
        <Container>

            <Button
                isActive={true}
            >
                <Font600Size14>Colaboradores</Font600Size14>
            </Button>

            <Button
                isActive={false}
            >
                <Font600Size14>Cargos</Font600Size14>
            </Button>

        </Container>
    )
}