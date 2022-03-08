import { createContext, ReactNode, useState } from "react";
import { Collaborator, CollaboratorsDataProps } from "../types/collaboratorsTypes";

type CollaboratorsContextData = {
    chunkedCollaboratorsList: Collaborator[][] | undefined,
    collaboratorsData : Collaborator[] | undefined,
    handleCollaboratorsData : (props : CollaboratorsDataProps) => void;
    handleCollaboratorsListInChunks: (collaborators : Collaborator[], chunkSize : number) => void;
}

export const CollaboratorsContext = createContext({} as CollaboratorsContextData)

type CollaboratorsContextProviderProps = {
    children: ReactNode
}

export function CollaboratorsContextProvider({ children }: CollaboratorsContextProviderProps) {

    const [collaboratorsData, setCollaboratorsData] = useState<Collaborator[]>()
    const [chunkedCollaboratorsList, setChunkedCollaboratorsList] = useState<Collaborator[][]>()

    function handleCollaboratorsData({collaborators} : CollaboratorsDataProps){
        setCollaboratorsData(collaborators)
    }

    function handleCollaboratorsListInChunks(collaborators : Collaborator[], chunkSize : number) {
        
        const chunkedList =  [];

        // splits the list of collaborators into parts according to the number of chunks in the function argument
        for (let i = 0; i < collaborators.length; i += chunkSize) {
            const chunk = collaborators.slice(i, i + chunkSize);
            chunkedList.push(chunk);
        }
        
        setChunkedCollaboratorsList(chunkedList);
    }

    return (
        <CollaboratorsContext.Provider
            value={{
                chunkedCollaboratorsList,
                collaboratorsData,
                handleCollaboratorsData,
                handleCollaboratorsListInChunks
            }}
        >
            {children}
        </CollaboratorsContext.Provider>
    )
}