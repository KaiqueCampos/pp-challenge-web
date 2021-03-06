import { useState } from "react";
import { Font500Size14 } from "../../../styles/emotion/Font500";
import { Font600Size12 } from "../../../styles/emotion/Font600";
import { Collaborator } from "../../../types/collaboratorsTypes";
import { DashboardSeeMoreInformations } from "../../dashboard/components/dashboardSeeMoreInformation";
import { CollaboratorsActiveOrInactiveStatus } from "../collaboratorsActiveOrInactiveStatus";
import { CollaboratorsListTr } from "./styles";

type CollaboratorsListItemProps = {
    collaborator: Collaborator
}

export function CollaboratorsListItems({ collaborator }: CollaboratorsListItemProps) {

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
            <CollaboratorsListTr
                key={collaborator.agent_id}
                id="collaboratorsList"
                isInactive={collaborator.status}
            >
                <th>
                    <div className="collaboratorsNameAndProfileImage">
                        <img
                            className="collaboratorsProfileImage"
                            src={collaborator.image}
                        />

                        <Font600Size12
                            color="#587169"
                        >
                            {collaborator.name}
                        </Font600Size12>
                    </div>
                </th>
                <th>{collaborator.department}</th>
                <th>{collaborator.role}</th>
                <th>{collaborator.branch}</th>
                <th>
                    <CollaboratorsActiveOrInactiveStatus
                        isActive={collaborator.status}
                    >
                        <Font500Size14
                            color="#34423D"
                        >
                            {collaborator.status === 'active' ? 'Ativo' : 'Inativo'}
                        </Font500Size14>
                    </CollaboratorsActiveOrInactiveStatus>
                </th>
                <th>
                    <button
                        onClick={() => toggleSeeMoreInFormations()}
                    >
                        <img src="settingsIcon.svg" />
                    </button>
                </th>

            </CollaboratorsListTr>

            {seeCollaboratorIsActive && (
                <DashboardSeeMoreInformations
                    agent_id={collaborator.agent_id}
                />
            )}
        </>
    )
}