import { useCollaborators } from '../../../../hooks/useCollaborators'
import { Font600Size14 } from '../../../../styles/emotion/Font600'
import { Button, Container } from './styles'

export function DashboardToggleCollaboratorsPositionsButton() {

    const {
        collaboratorsIsActive,
        toggleCollaboratorsIsActive
    } = useCollaborators()

    return (
        <Container>

            <Button
                isActive={collaboratorsIsActive && true}
                onClick={() => toggleCollaboratorsIsActive(true)}
            >
                <Font600Size14>Colaboradores</Font600Size14>
            </Button>

            <Button
                isActive={collaboratorsIsActive === false && true}
                onClick={() => toggleCollaboratorsIsActive(false)}
            >
                <Font600Size14>Cargos</Font600Size14>
            </Button>

        </Container>
    )
}