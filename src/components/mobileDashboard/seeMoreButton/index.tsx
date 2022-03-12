import { useEffect, useState } from "react"
import { Button } from "./styles"

type toggleSeeMore = {
    element: HTMLElement;
    event: MouseEvent;
}

export function SeeMoreButton() {

    const [elementIsActive, setElementIsActive] = useState<HTMLElement | null>()


    function toggleSeeMore(e: React.MouseEvent<HTMLButtonElement>) {

        // Set Element div is actived or not
        const element = e.currentTarget.parentElement
        element !== null ? (element?.id === "active" ? (element.id = "inactive") : (element.id = "active")) : ""

        // change the img icon if div is activated or not
        const iconToChange = element?.getElementsByTagName('img')[2]

        if (iconToChange !== undefined) {
            iconToChange.src = element?.id === 'active' ? './seeMoreUp.svg' : './seeMoreDown.svg'
        }

    }

    return (
        <Button
            id="SeeMoreButton"
            onClick={(e) => toggleSeeMore(e)}
        >

            <img src="./seeMoreDown.svg"/>

        </Button>
    )
}