import { Button } from "./styles"

export function SeeMoreButton() {
    return (
        <Button
            onClick={(e) => {
                const element = e.currentTarget.parentElement
                element !== null ? (element?.id === "active" ? (element.id = "inactive") : (element.id = "active")) : ""
            }}
        >
            <img src="./seeMore.svg" />
        </Button>
    )
}