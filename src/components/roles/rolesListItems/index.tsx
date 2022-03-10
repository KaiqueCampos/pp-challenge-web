import { useState } from "react";
import { Role } from "../../../types/rolesTypes";
import { DashboardSeeMoreInformations } from "../../dashboard/components/dashboardSeeMoreInformation";
import { RolesListTr } from "./style";

type RolesListItemProps = {
    role: Role
}

export function RolesListItems({ role }: RolesListItemProps) {
    const [seeCollaboratorIsActive, setSeeCollaboratorIsActive] = useState(false)

    function toggleSeeMoreInFormations() {

        // hides the other "SeeCollaborators" elements from the screen
        const element = document.querySelectorAll<HTMLElement>('#seeCollaborator')
        for (var i = 0; element.length > i; i++) {
            element[i].style.display = 'none'
        }

        setSeeCollaboratorIsActive(!seeCollaboratorIsActive)
    }

    return (
        <>
            <RolesListTr
                key={role.name}
                id="rolesList"
            >
                <th>{role.name}</th>
                <th>{role.departament}</th>
                <th>{role.agents_quantity}</th>

                <th>
                    <button
                        onClick={() => toggleSeeMoreInFormations()}
                    >
                        <img src="settingsIcon.svg" />
                    </button>
                </th>

            </RolesListTr>

            {seeCollaboratorIsActive && (
                <DashboardSeeMoreInformations
                    activatedByRolesList={true}
                />
            )}
        </>
    )
}