import { useContext } from "react"
import { RolesContext } from "../contexts/RolesContext"

export function useRoles() {
    const value = useContext(RolesContext)
    return value
}