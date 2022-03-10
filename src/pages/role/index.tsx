import { GetServerSideProps, NextPage } from "next";
import { DashboardHeader } from "../../components/dashboardHeader";
import { Header } from "../../components/header";
import { InstitutionDashboardContainer } from "../../components/institutionDashboardContainer/style";
import { LeftDiv } from "../../components/leftDiv";
import { Main } from "../../components/main/style";
import { RolesAndPermitionsDashboard } from "../../components/rolesAndPerimitions";
import { api } from "../../services/api";
import { RolePermissions } from "../../types/rolesTypes";


type RolesRolesAndPermitions = {
    role : RolePermissions;
}

const Role: NextPage<RolesRolesAndPermitions> = ({role}) => {
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

                    <RolesAndPermitionsDashboard
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

    console.log(response)

    return {
        props: {
            role: role
        }
    }
}