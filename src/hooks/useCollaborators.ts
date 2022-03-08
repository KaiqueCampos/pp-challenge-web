import { useContext } from "react"
import { CollaboratorsContext } from "../contexts/CollaboratorsContext"

export function useCollaborators() {
    const value = useContext(CollaboratorsContext)
    return value
}