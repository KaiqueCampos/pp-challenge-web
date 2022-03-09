export type Role = {
    name: string,
    departament: string,
    agents_quantity: number
}

export type RolesDataProps = {
    roles: Role[],
}