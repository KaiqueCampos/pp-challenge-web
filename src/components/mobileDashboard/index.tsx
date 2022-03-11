import Link from 'next/link'
import { useState } from 'react'
import { useCollaborators } from '../../hooks/useCollaborators'
import { useRoles } from '../../hooks/useRoles'
import { Font400Size12 } from '../../styles/emotion/Font400'
import { Font500Size14 } from '../../styles/emotion/Font500'
import { Font600Size12, Font600Size16 } from '../../styles/emotion/Font600'
import { CollaboratorsActiveOrInactiveStatus } from '../collaborator/collaboratorsActiveOrInactiveStatus'
import { ActionsButton, Container, ListItem, ListItemsInformations, RolesInformation } from './styles'

type IsActiveProps = "active" | "inactive"

export function MobileDashboard() {

    const [isActive, setIsActive] = useState<IsActiveProps>("inactive")

    // get the data from collaborators context
    const {
        collaboratorsIsActive,
        indexOfChunkedArrayToShow,
        chunkedCollaboratorsList,
    } = useCollaborators()

    const {
        rolesData,
    } = useRoles()

    return (
        <Container>

            {chunkedCollaboratorsList !== undefined && collaboratorsIsActive === true ? (
                chunkedCollaboratorsList[indexOfChunkedArrayToShow]?.map(collaborator => {
                    return (
                        <ListItem
                            key={collaborator.agent_id}
                            className={isActive}
                        >
                            <Font600Size12
                                color="#587169"
                            >
                                Nome Completo
                            </Font600Size12>

                            <div className="userInformation">

                                <img src={collaborator.image} />

                                <Font600Size12
                                    color="#587169"
                                >
                                    {collaborator.name}
                                </Font600Size12>
                            </div>

                            <ListItemsInformations
                                id='ListItemsInformations'
                            >

                                <div>
                                    <Font600Size12
                                        color="#587169"
                                    >
                                        Departamento
                                    </Font600Size12>

                                    <Font400Size12
                                        color="#587169"
                                    >
                                        {collaborator.department}
                                    </Font400Size12>
                                </div>

                                <div>
                                    <Font600Size12
                                        color="#587169"
                                    >
                                        Cargo
                                    </Font600Size12>

                                    <Font400Size12
                                        color="#587169"
                                    >
                                        {collaborator.role}
                                    </Font400Size12>
                                </div>

                                <div>
                                    <Font600Size12
                                        color="#587169"
                                    >
                                        Unidade
                                    </Font600Size12>

                                    <Font400Size12
                                        color="#587169"
                                    >
                                        {collaborator.branch}
                                    </Font400Size12>
                                </div>

                                <div>
                                    <Font600Size12
                                        color="#587169"
                                    >
                                        Status
                                    </Font600Size12>

                                    <CollaboratorsActiveOrInactiveStatus
                                        isActive={collaborator.status}
                                    >
                                        <Font500Size14
                                            color="#34423D"
                                        >
                                            {collaborator.status === 'active' ? 'Ativo' : 'Inativo'}
                                        </Font500Size14>
                                    </CollaboratorsActiveOrInactiveStatus>

                                </div>

                            </ListItemsInformations>

                            <Link
                                passHref
                                href="collaborator/1"
                            >
                                <ActionsButton
                                    id="actionsButton"
                                >

                                    <img src="actionsIcon.svg" />
                                    <Font600Size16
                                        color="#34423D"
                                    >
                                        Ações
                                    </Font600Size16>
                                </ActionsButton>
                            </Link>

                            <button
                                onClick={(e) => {
                                    const element = e.currentTarget.parentElement
                                    element !== null ? (element?.id === "active" ? (element.id = "inactive") : (element.id = "active")) : ""
                                }}
                            >
                                <img src="./seeMore.svg" />
                            </button>
                        </ListItem>
                    )
                })
            ) : (<></>)}


            {
                collaboratorsIsActive === false && rolesData !== undefined ? (

                    rolesData.map(roles => {
                        return (
                            <ListItem
                                key={`${roles.name}-${roles.departament}`}
                                className={isActive}
                            >
                                <RolesInformation
                                    id="rolesInformation"
                                >
                                    <Font600Size12
                                        color="#587169"
                                    >
                                        Cargo
                                    </Font600Size12>

                                    <Font600Size12
                                        color="#587169"
                                    >
                                        {roles.name}
                                    </Font600Size12>
                                </RolesInformation>

                                <ListItemsInformations
                                    id='ListItemsInformations'
                                >
                                    <div>
                                        <Font600Size12
                                            color="#587169"
                                        >
                                            Cargo
                                        </Font600Size12>

                                        <Font400Size12
                                            color="#587169"
                                        >
                                            {roles.name}
                                        </Font400Size12>
                                    </div>

                                    <div>
                                        <Font600Size12
                                            color="#587169"
                                        >
                                            Departamento
                                        </Font600Size12>

                                        <Font400Size12
                                            color="#587169"
                                        >
                                            {roles.departament}
                                        </Font400Size12>
                                    </div>

                                    <div>
                                        <Font600Size12
                                            color="#587169"
                                        >
                                            Colaboradores
                                        </Font600Size12>

                                        <Font400Size12
                                            color="#587169"
                                        >
                                            {roles.agents_quantity}
                                        </Font400Size12>
                                    </div>


                                </ListItemsInformations>

                                <ActionsButton
                                    id="actionsButton"
                                >

                                    <img src="actionsIcon.svg" />
                                    <Font600Size16
                                        color="#34423D"
                                    >
                                        Ações
                                    </Font600Size16>
                                </ActionsButton>

                                <button
                                    onClick={(e) => {
                                        const element = e.currentTarget.parentElement
                                        element !== null ? (element?.id === "active" ? (element.id = "inactive") : (element.id = "active")) : ""
                                    }}
                                >
                                    <img src="./seeMore.svg" />
                                </button>
                            </ListItem>
                        )
                    })
                ) : (<></>)
            }
        </Container>
    )
}