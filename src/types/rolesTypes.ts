export type Role = {
    name: string,
    departament: string,
    agents_quantity: number
}

export type RolesDataProps = {
    roles: Role[],
}

export type Grouprule = {
    role: string,
    permissions: string[]
}

export type RolePermissions = {
    name: string,
    department: string,
    grouprules : Grouprule[]
} 