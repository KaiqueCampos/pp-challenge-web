import { useRoles } from '../../hooks/useRoles'
import { Font600Size12 } from '../../styles/emotion/Font600'
import { ControlButton } from '../controlPanelButton/styles'
import { Container } from './styles'

export function RolesListControlPanel() {

    const {rolesData} = useRoles()

    return (
        <Container>

            <div>
                <ControlButton disabled>
                    <img src="leftArrow.svg" />
                </ControlButton>

                <Font600Size12
                    color="#A3B8B0"
                >
                    1 de {rolesData?.length}
                </Font600Size12>

                <ControlButton
                    disabled
                >
                    <img src="rightArrow.svg" />
                </ControlButton>
            </div>

        </Container>
    )
}