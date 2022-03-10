import { TitleSize16 } from "../../styles/emotion/Titles";
import { RolePermissions } from "../../types/rolesTypes";
import { RolesAndPermissionsInformation } from "./components/rolesAndPermissionsInformations";
import { RolesAndPermissionsList } from "./components/rolesAndPermissionsList";
import { Container } from "./styles";

type RolesAndPermissionsDashboardProps = {
    role: RolePermissions,
}

export function RolesAndPermissionsDashboard({ role }: RolesAndPermissionsDashboardProps) {

    return (
        <Container>

            <TitleSize16>
                Dados do Cargo
            </TitleSize16>

           <RolesAndPermissionsInformation
                department={role.department}
                name={role.name}
           />

            <TitleSize16>
                Listagem de permissões
            </TitleSize16>

            <RolesAndPermissionsList
                grouprules={role.grouprules}
            />

        </Container>
    )
}