import { GetServerSideProps, NextPage } from "next";
import { DashboardHeader } from "../../components/dashboard/components/dashboardHeader";
import { InstitutionDashboardContainer } from "../../components/institutionDashboardContainer/style";
import { Header } from "../../components/header";
import { LeftDiv } from "../../components/leftDiv";
import { Main } from "../../components/main/style";
import { RolesAndPermissionsDashboard } from "../../components/rolesAndPermissions";
import { api } from "../../services/api";
import { RolePermissions } from "../../types/rolesTypes";


type RolesRolesAndPermissions = {
    role : RolePermissions;
}

const Role: NextPage<RolesRolesAndPermissions> = ({role}) => {
    return(
        <div id="container">
            <Header />

            <Main>
                <LeftDiv />

                <InstitutionDashboardContainer>

                    <DashboardHeader
                        title="Cargos e permissões"
                        hasBackButton={true}
                    />

                    <RolesAndPermissionsDashboard
                        role={role}
                    />

                </InstitutionDashboardContainer>

            </Main>
        </div>
    )
}
    
export default Role;

export const getServerSideProps: GetServerSideProps = async () => {

    const response = await api.get('role/1')
    const {role} = response.data

    return {
        props: {
            role: role
        }
    }
}