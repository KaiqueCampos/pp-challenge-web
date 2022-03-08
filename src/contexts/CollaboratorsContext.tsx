import { createContext, ReactNode, useState } from "react";
import { Collaborator, CollaboratorsDataProps } from "../types/collaboratorsTypes";

type CollaboratorsContextData = {
    collaboratorsData : Collaborator[] | undefined,
    handleCollaboratorsData : (props : CollaboratorsDataProps) => void
}

export const CollaboratorsContext = createContext({} as CollaboratorsContextData)

type CollaboratorsContextProviderProps = {
    children: ReactNode
}

export function CollaboratorsContextProvider({ children }: CollaboratorsContextProviderProps) {

    const [collaboratorsData, setCollaboratorsData] = useState<Collaborator[]>()

    function handleCollaboratorsData({collaborators} : CollaboratorsDataProps){
        setCollaboratorsData(collaborators)
    }

    return (
        <CollaboratorsContext.Provider
            value={{
                collaboratorsData,
                handleCollaboratorsData,
            }}
        >
            {children}
        </CollaboratorsContext.Provider>
    )
}