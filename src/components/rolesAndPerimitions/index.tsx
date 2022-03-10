import { Font500Size16 } from "../../styles/emotion/Font500";
import { Font600Size12 } from "../../styles/emotion/Font600";
import { TitleSize16 } from "../../styles/emotion/Titles";
import { RolePermissions } from "../../types/rolesTypes";
import { Allowed, Container, NotAllowed, RolesAndPermitionsList, RolesInformations } from "./styles";

type RolesAndPermitionsDashboardProps = {
    role: RolePermissions,
}


export function RolesAndPermitionsDashboard({ role }: RolesAndPermitionsDashboardProps) {

    console.log(role)

    return (
        <Container>

            <TitleSize16>
                Dados do Cargo
            </TitleSize16>

            <RolesInformations>
                <fieldset>
                    <legend>Departamento</legend>

                    <Font500Size16
                        color="#587169"
                    >
                        {role.department}
                    </Font500Size16>
                </fieldset>

                <fieldset>
                    <legend>Cargo</legend>

                    <Font500Size16
                        color="#587169"
                    >
                        {role.name}
                    </Font500Size16>
                </fieldset>
            </RolesInformations>

            <TitleSize16>
                Listagem de permissões
            </TitleSize16>

            <RolesAndPermitionsList>
                <table cellSpacing={0}>

                    <thead>
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
                    </thead>

                    <tbody>

                        {role.grouprules.map(rolePermissions => {
                            return (
                                <tr
                                    key={rolePermissions.role}
                                >
                                    <th>{rolePermissions.role}</th>
                                    <th>
                                        {rolePermissions.permissions.includes('read') ? (
                                            <Allowed>
                                                <img src="/checkIcon.svg" />
                                            </Allowed>
                                        ) : (
                                            <NotAllowed />
                                        )}
                                    </th>

                                    <th>
                                        {rolePermissions.permissions.includes('write') ? (
                                            <Allowed>
                                                <img src="/checkIcon.svg" />
                                            </Allowed>
                                        ) : (
                                            <NotAllowed />
                                        )}
                                    </th>

                                    <th>
                                        {rolePermissions.permissions.includes('delete') ? (
                                            <Allowed>
                                                <img src="/checkIcon.svg" />
                                            </Allowed>
                                        ) : (
                                            <NotAllowed />
                                        )}
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </RolesAndPermitionsList>
        </Container>
    )
}