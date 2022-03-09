export type Collaborator = {
    agent_id: number,
    name: string,
    image: string,
    department: string,
    branch: string,
    role: string,
    status: string,
}

export type CollaboratorsDataProps = {
    collaborators: Collaborator[],
}

export type CollaboratorDetailsProps = {
    id: number,
    name: string,
    email: string,
    phone: {
        ddd: string,
        ddi: string,
        number: number
    },
    document: {
        type: string,
        number: string
    },
    birth_date: string,
    image: string,
    department: string,
    branch: string,
    role: string,
    status: string
}
