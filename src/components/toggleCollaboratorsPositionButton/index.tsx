import { Font400Size14 } from "../../styles/emotion/Font400";
import { Button } from "./emotion/ButtonStyled";
import { Container } from "./emotion/ContainerStyled";

export function ToggleCollaboratorsPositionsButton() {
    return (
        <Container>

            <Button
                isActive={true}
            >
                <Font400Size14
                    isBold={true}
                >
                    Colaboradores
                </Font400Size14>
                
            </Button>

            <Button
                isActive={false}
            >
                 <Font400Size14
                    isBold={true}
                >
                    Cargos
                </Font400Size14>

            </Button>
        </Container>
    )
}