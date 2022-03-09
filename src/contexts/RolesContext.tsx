import { createContext, ReactNode, useEffect, useState } from "react";
import { Role, RolesDataProps } from "../types/rolesTypes";

type RolesContextData = {
    rolesData : Role[] | undefined;
    handleRolesData : (props : RolesDataProps) => void;
}

export const RolesContext = createContext({} as RolesContextData)

type RolesContextProviderProps = {
    children: ReactNode
}

export function RolesContextProvider({ children }: RolesContextProviderProps) {

    const [rolesData, setRolesData] = useState<Role[]>()

    function handleRolesData({roles} : RolesDataProps){
        setRolesData(roles)
    }

    return (
        <RolesContext.Provider
            value={{
                rolesData,
                handleRolesData
            }}
        >
            {children}
        </RolesContext.Provider>
    )
}