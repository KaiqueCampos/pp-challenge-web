import { useCollaborators } from "../../../hooks/useCollaborators";
import { Font600Size12 } from "../../../styles/emotion/Font600";
import { CollaboratorsListTHead } from "./styles";

export function CollaboratorsListHeader() {

    const { collaboratorsIsActive } = useCollaborators()

    return (
        <CollaboratorsListTHead>
            {
                collaboratorsIsActive ? (
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
                ) : (
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
                                Departamento
                            </Font600Size12>
                        </th>

                        <th>
                            <Font600Size12
                                color="#587169"
                            >
                                Colaboradores
                            </Font600Size12>
                        </th>
                        <th></th>
                    </tr>
                )
            }
        </CollaboratorsListTHead>
    )
}
