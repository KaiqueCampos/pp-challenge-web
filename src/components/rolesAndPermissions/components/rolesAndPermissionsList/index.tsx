import { Grouprule, RolePermissions } from "../../../../types/rolesTypes"
import { RolesAndPermissionsHeader } from "../rolesAndPermissionsHeader"
import { Allowed, Container, NotAllowed } from "./styles"

type RolesAndPermissionsListProps = {
    grouprules: Grouprule[]
}

export function RolesAndPermissionsList({grouprules} : RolesAndPermissionsListProps) {
    return (
        <Container>

            <table cellSpacing={0}>

                <RolesAndPermissionsHeader/>

                <tbody>

                    {grouprules.map(rolePermissions => {
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

        </Container>
    )
}