import { useContext } from "react"
import { AppContext } from "../contexts/appContext"

export function useApp() {
    const value = useContext(AppContext)
    return value
}