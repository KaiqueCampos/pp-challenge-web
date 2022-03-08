import { Font500Size14 } from "../../styles/emotion/Font500";
import { Font600Size12 } from "../../styles/emotion/Font600";
import { Collaborator } from "../../types/collaboratorsTypes";
import { CollaboratorsActiveOrInactiveStatus } from "../collaboratorsActiveOrInactiveStatus";
import { CollaboratorsListTr } from "./styles";

type CollaboratorsListItemProps = {
    collaborator: Collaborator
}

export function CollaboratorsListItems({collaborator} : CollaboratorsListItemProps) {
    return (
        <CollaboratorsListTr key={collaborator.agent_id}>
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
                <img src="settingsIcon.svg" />
            </th>
        </CollaboratorsListTr>
    )
}