import { useEffect, useState } from 'react'
import { useApp } from '../../hooks/useApp'
import { useCollaborators } from '../../hooks/useCollaborators'
import { useRoles } from '../../hooks/useRoles'
import { Collaborator } from '../../types/collaboratorsTypes'
import { Role } from '../../types/rolesTypes'
import { CollaboratorsListItemsMobile } from './collaboratorListItemsMobile'
import { RolesListItemsMobile } from './rolesListItemsMobile'
import { Container } from './styles'


export function MobileDashboard() {

    const [collaboratorsDataMobileToShow, setCollaboratorsDataMobileToShow] = useState<Collaborator[]>()
    const [rolesDataMobileToShow, setRolesDataMobileToShow] = useState<Role[]>()

    // get the data from collaborators context
    const {
        collaboratorsData,
        collaboratorsIsActive,
    } = useCollaborators()

    const {
        rolesData,
    } = useRoles()

    const {
        sliceValue
    } = useApp()

    useEffect(() => {

        setCollaboratorsDataMobileToShow(collaboratorsData?.slice(0, sliceValue))
        setRolesDataMobileToShow(rolesData?.slice(0, sliceValue))
        
    }, [sliceValue])

    return (
        <Container>

            {collaboratorsDataMobileToShow !== undefined && collaboratorsIsActive === true ? (
                collaboratorsDataMobileToShow.map(collaborator => {
                    return (
                       <CollaboratorsListItemsMobile
                            collaborator={collaborator}
                            key={collaborator.agent_id}
                       />
                    )
                })
            ) : (<></>)}

            {
                collaboratorsIsActive === false && rolesDataMobileToShow !== undefined ? (

                    rolesDataMobileToShow.map(roles => {
                        return (
                            <RolesListItemsMobile
                                role={roles}
                                key={`${roles.name}-${roles.departament}`}
                            />
                        )
                    })
                ) : (<></>)
            }
        </Container>
    )
}