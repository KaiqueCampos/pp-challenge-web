import { createContext, ReactNode, useEffect, useState } from "react";
import { Collaborator, CollaboratorsDataProps } from "../types/collaboratorsTypes";

type CollaboratorsContextData = {
    indexOfChunkedArrayToShow: number;
    chunk: number;
    chunkedCollaboratorsList: Collaborator[][] | undefined;
    collaboratorsData : Collaborator[] | undefined;
    handleCollaboratorsData : (props : CollaboratorsDataProps) => void;
    handleCollaboratorsListInChunks: (collaborators : Collaborator[], chunkSize : number) => void;
    handleChunkValue: (value : number) => void;
    handleIndexOfChunkedArrayToShow: (indexValue : number) => void;
    searchCollaborators: (searchInput : string) => void;
}

export const CollaboratorsContext = createContext({} as CollaboratorsContextData)

type CollaboratorsContextProviderProps = {
    children: ReactNode
}

export function CollaboratorsContextProvider({ children }: CollaboratorsContextProviderProps) {

    // Collaborators list
    const [collaboratorsData, setCollaboratorsData] = useState<Collaborator[]>()
    const [chunkedCollaboratorsList, setChunkedCollaboratorsList] = useState<Collaborator[][]>()
    const [indexOfChunkedArrayToShow, setindexOfChunkedArrayToShow] = useState(0)

    // chunk the collaborators list in parts
    const [chunk, setChunk] = useState(10)

     // handle collaborators list in chunks each time the page is rendered
     useEffect(() => {
        if (collaboratorsData !== undefined) {
            handleCollaboratorsListInChunks(collaboratorsData, chunk);
        }
    }, [collaboratorsData])

    // When the chunk is changed the list will be fragmented according to the number received
    useEffect(() => {
        if (collaboratorsData !== undefined) {
            handleCollaboratorsListInChunks(collaboratorsData, chunk);
        }
    }, [chunk])


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

    function handleChunkValue(value : number) {
        setChunk(value)
    }

    function handleIndexOfChunkedArrayToShow(indexValue : number) {
        setindexOfChunkedArrayToShow(indexValue)
    }

    function searchCollaborators(searchInput: string){

        const response = collaboratorsData?.filter(collaborator => collaborator.name.includes(searchInput));

        if (response !== undefined) {
            handleCollaboratorsListInChunks(response, response?.length)
        } 
    }

    return (
        <CollaboratorsContext.Provider
            value={{
                indexOfChunkedArrayToShow,
                chunk,
                chunkedCollaboratorsList,
                collaboratorsData,
                handleCollaboratorsData,
                handleCollaboratorsListInChunks,
                handleChunkValue,
                handleIndexOfChunkedArrayToShow,
                searchCollaborators,
            }}
        >
            {children}
        </CollaboratorsContext.Provider>
    )
}