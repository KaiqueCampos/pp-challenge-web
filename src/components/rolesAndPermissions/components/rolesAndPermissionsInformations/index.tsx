import { Font500Size16 } from "../../../../styles/emotion/Font500";
import { Container } from "./styles";

type RolesAndPermissionsInformation = {
    department: string;
    name: string
}

export function RolesAndPermissionsInformation({ department, name }: RolesAndPermissionsInformation) {
    return (
        <Container>
            <fieldset>
                <legend>Departamento</legend>

                <Font500Size16
                    color="#587169"
                >
                    {department}
                </Font500Size16>
            </fieldset>

            <fieldset>
                <legend>Cargo</legend>

                <Font500Size16
                    color="#587169"
                >
                    {name}
                </Font500Size16>
            </fieldset>
        </Container>
    )
}