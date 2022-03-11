import { createContext, ReactNode, useEffect, useState } from "react";
import { Role, RolesDataProps } from "../types/rolesTypes";

type AppContextData = {
    isAMobileDevice: boolean,
    sliceValue: number,
    handleSliceValue: () => void;
}

export const AppContext = createContext({} as AppContextData)

type AppContextProviderProps = {
    children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {

    const [isAMobileDevice, setIsAMobileDevice] = useState(false)

    // when clicking on the "load more" button in the mobile version, the slice will load 3 more elements from the array to show on screen.
    const [sliceValue, setSliceValue] = useState(5)

    useEffect(() => {
        const userAgent = navigator.userAgent;

        if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
            setIsAMobileDevice(true);
        }

        // checks if the device has mobile dimensions
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 450) {
                setIsAMobileDevice(true);
            }

            if (window.innerWidth > 450) {
                setIsAMobileDevice(false);
            }
        });
    })

    function handleSliceValue() {
        setSliceValue(sliceValue + 3)
    }

    return (
        <AppContext.Provider
            value={{
                isAMobileDevice,
                sliceValue,
                handleSliceValue,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}