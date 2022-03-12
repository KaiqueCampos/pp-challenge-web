import { useState } from "react"
import { Font400Size12 } from "../../../styles/emotion/Font400"
import { Font500Size14 } from "../../../styles/emotion/Font500"
import { Font600Size12 } from "../../../styles/emotion/Font600"
import { Collaborator } from "../../../types/collaboratorsTypes"
import { ActionButton } from "../actionButton"
import { ListItem, ListItemsInformations } from "../styles"
import { CollaboratorsActiveOrInactiveStatus } from "../../collaborator/collaboratorsActiveOrInactiveStatus"
import { SeeMoreButton } from "../seeMoreButton"
import { ListItemsInformation } from "../collaboratorListItemsInformation"
import { UserInformation } from "./styles"

type IsActiveProps = "active" | "inactive"

type CollaboratorsListItemsMobileProps = {
    collaborator : Collaborator
}

export function CollaboratorsListItemsMobile({collaborator} : CollaboratorsListItemsMobileProps) {

    const [isActive, setIsActive] = useState<IsActiveProps>("inactive")

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

            <UserInformation 
                className="userInformation"
                isInactive={collaborator.status}
            >

                <img src={collaborator.image} />

                <Font600Size12
                    color="#587169"
                >
                    {collaborator.name}
                </Font600Size12>
            </UserInformation>

            <ListItemsInformation
                branch={collaborator.branch}
                role={collaborator.role}
                status={collaborator.status}
                department={collaborator.department}
            />

           <ActionButton
                isActivatedByCollaborators={true}
           />

           <SeeMoreButton/>
        </ListItem>
    )
}