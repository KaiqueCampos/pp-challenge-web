import { useState } from "react"
import { Font600Size12 } from "../../../styles/emotion/Font600"
import { Role } from "../../../types/rolesTypes"
import { ActionButton } from "../actionButton"
import { RolesListItemsInformation } from "../rolesListItemsInformation"
import { SeeMoreButton } from "../seeMoreButton"
import { ListItem, RolesInformation } from "../styles"

type IsActiveProps = "active" | "inactive"

type RolesListItemsMobileProps = {
    role: Role
}

export function RolesListItemsMobile({ role }: RolesListItemsMobileProps) {
    
    const [isActive, setIsActive] = useState<IsActiveProps>("inactive")

    return (
        <ListItem
            key={`${role.name}-${role.departament}`}
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
                    {role.name}
                </Font600Size12>
            </RolesInformation>

            <RolesListItemsInformation
                agents_quantity={role.agents_quantity}
                departament={role.departament}
                name={role.name}
            />

            <ActionButton
                isActivatedByCollaborators={false}
            />

            <SeeMoreButton/>
        </ListItem>
    )
}