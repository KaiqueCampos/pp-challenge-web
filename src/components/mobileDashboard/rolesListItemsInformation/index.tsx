import { Font400Size12 } from "../../../styles/emotion/Font400";
import { Font600Size12 } from "../../../styles/emotion/Font600";
import { ListItemsInformations } from "../styles";

type RolesListItemsInformationProps = {
    name: string;
    departament: string;
    agents_quantity: number;
}

export function RolesListItemsInformation({name, departament, agents_quantity} : RolesListItemsInformationProps) {
    return (
        <ListItemsInformations
            id='ListItemsInformations'
        >
            <div>
                <Font600Size12
                    color="#587169"
                >
                    Cargo
                </Font600Size12>

                <Font400Size12
                    color="#587169"
                >
                    {name}
                </Font400Size12>
            </div>

            <div>
                <Font600Size12
                    color="#587169"
                >
                    Departamento
                </Font600Size12>

                <Font400Size12
                    color="#587169"
                >
                    {departament}
                </Font400Size12>
            </div>

            <div>
                <Font600Size12
                    color="#587169"
                >
                    Colaboradores
                </Font600Size12>

                <Font400Size12
                    color="#587169"
                >
                    {agents_quantity}
                </Font400Size12>
            </div>


        </ListItemsInformations>
    )
}