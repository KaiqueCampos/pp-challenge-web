import { useState } from 'react'
import { useCollaborators } from '../../../../hooks/useCollaborators'
import { Font500Size16 } from '../../../../styles/emotion/Font500'
import { Font600Size14, Font600Size18 } from '../../../../styles/emotion/Font600'
import { Button, Container, MobileToggleListMenu, MobileToggleListMenuButton } from './styles'

export function DashboardToggleCollaboratorsPositionsButton() {

    const [mobileToggleCollaboratorsRolesList, setMobileToggleCollaboratorsRolesList] = useState(false)

    const {
        collaboratorsIsActive,
        toggleCollaboratorsIsActive
    } = useCollaborators()

    return (
        <Container>

            <Button
                isActive={collaboratorsIsActive && true}
                onClick={() => {
                    setMobileToggleCollaboratorsRolesList(true)
                    toggleCollaboratorsIsActive(true)
                }}
            >
                <Font600Size14>Colaboradores</Font600Size14>
                <img src="settingsIcon.svg" />

            </Button>

            <Button
                isActive={collaboratorsIsActive === false && true}
                onClick={() => {
                    setMobileToggleCollaboratorsRolesList(true)
                    toggleCollaboratorsIsActive(false)
                }}
            >
                <Font600Size14>Cargos</Font600Size14>
                <img src="settingsIcon.svg" />

            </Button>

            {
                mobileToggleCollaboratorsRolesList && (
                    <MobileToggleListMenu>
                        <div>
                            <Font600Size18
                                color="#34423D"
                            >
                                Categorias
                            </Font600Size18>

                            <button
                                onClick={() => setMobileToggleCollaboratorsRolesList(false)}
                            >
                                <img src="closeIcon.svg"/>
                            </button>
                        </div>

                        <MobileToggleListMenuButton
                            onClick={() => toggleCollaboratorsIsActive(true)}
                        >
                            <Font500Size16
                                color="#587169"
                            >
                                Colaboradores
                            </Font500Size16>
                        </MobileToggleListMenuButton>

                        <MobileToggleListMenuButton
                            onClick={() => toggleCollaboratorsIsActive(false)}
                        >
                            <Font500Size16
                                color="#587169"
                            >
                                Cargos
                            </Font500Size16>
                        </MobileToggleListMenuButton>
                    </MobileToggleListMenu>
                )
            }


        </Container>
    )
}