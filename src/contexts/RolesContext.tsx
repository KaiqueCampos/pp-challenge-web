import { createContext, ReactNode, useEffect, useState } from "react";
import { Role, RolesDataProps } from "../types/rolesTypes";

type RolesContextData = {
    backupRolesData: Role[] | undefined,
    rolesData: Role[] | undefined;
    handleRolesData: (props: RolesDataProps) => void;
    searchRoles: (searchInput: string) => void;
    setRolesBackupDataInRolesData : (roles : Role[]) => void;
}

export const RolesContext = createContext({} as RolesContextData)

type RolesContextProviderProps = {
    children: ReactNode
}

export function RolesContextProvider({ children }: RolesContextProviderProps) {

    const [rolesData, setRolesData] = useState<Role[]>()
    const [backupRolesData, setBackupDataRoles] = useState<Role[]>()

    function handleRolesData({ roles }: RolesDataProps) {
        setRolesData(roles)
        setBackupDataRoles(roles)
    }

    function setRolesBackupDataInRolesData(roles : Role[]) {
        setRolesData(roles)
    }

    function searchRoles(searchInput: string) {
        
        const response = rolesData?.filter(roles => roles.name.includes(searchInput));
        setRolesData(response)
    }

    return (
        <RolesContext.Provider
            value={{
                backupRolesData,
                rolesData,
                handleRolesData,
                searchRoles,
                setRolesBackupDataInRolesData
            }}
        >
            {children}
        </RolesContext.Provider>
    )
}