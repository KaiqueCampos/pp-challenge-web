import { Font600Size12 } from "../../styles/emotion/Font600";
import { CollaboratorsListTHead } from "./styles";

export function CollaboratorsListHeader() {
    return (
        <CollaboratorsListTHead>
            <tr>
                <th>
                    <Font600Size12
                        color="#587169"
                    >
                        Nome completo
                    </Font600Size12>
                </th>

                <th>
                    <Font600Size12
                        color="#587169"
                    >
                        Departamento
                    </Font600Size12>
                </th>

                <th>
                    <Font600Size12
                        color="#587169"
                    >
                        Cargo
                    </Font600Size12>
                </th>
                <th>
                    <Font600Size12
                        color="#587169"
                    >
                        Unidade
                    </Font600Size12>
                </th>
                <th>
                    <Font600Size12
                        color="#587169"
                    >
                        Status
                    </Font600Size12>
                </th>
                <th></th>
                
            </tr>
        </CollaboratorsListTHead>
    )
}
