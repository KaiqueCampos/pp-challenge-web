import { Font600Size12 } from "../../../../styles/emotion/Font600";
import { THead } from "./styles";

export function RolesAndPermissionsHeader() {
    return (
        <THead>
            <tr>
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
                        Ler
                    </Font600Size12>
                </th>

                <th>
                    <Font600Size12
                        color="#587169"
                    >
                        Editar
                    </Font600Size12>
                </th>

                <th>
                    <Font600Size12
                        color="#587169"
                    >
                        Excluir
                    </Font600Size12>
                </th>
            </tr>
        </THead>
    )
}