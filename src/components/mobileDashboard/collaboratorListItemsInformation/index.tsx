import { Font400Size12 } from "../../../styles/emotion/Font400";
import { Font500Size14 } from "../../../styles/emotion/Font500";
import { Font600Size12 } from "../../../styles/emotion/Font600";
import { CollaboratorsActiveOrInactiveStatus } from "../../collaborator/collaboratorsActiveOrInactiveStatus";
import { ListItemsInformations } from "../styles";

type ListItemsInformationProps = {
    department: string,
    role: string,
    branch: string,
    status: string,
}

export function ListItemsInformation({branch, department, role, status} : ListItemsInformationProps) {
    return (
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
                    {department}
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
                    {role}
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
                    {branch}
                </Font400Size12>
            </div>

            <div>
                <Font600Size12
                    color="#587169"
                >
                    Status
                </Font600Size12>

                <CollaboratorsActiveOrInactiveStatus
                    isActive={status}
                >
                    <Font500Size14
                        color="#34423D"
                    >
                        {status === 'active' ? 'Ativo' : 'Inativo'}
                    </Font500Size14>
                </CollaboratorsActiveOrInactiveStatus>

            </div>

        </ListItemsInformations>
    )
}