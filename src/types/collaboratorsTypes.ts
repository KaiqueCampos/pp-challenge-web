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
