import { useEffect, useState } from "react"
import { useApp } from "../../../../hooks/useApp"
import { useCollaborators } from "../../../../hooks/useCollaborators"
import { useRoles } from "../../../../hooks/useRoles"
import { Font600Size16 } from "../../../../styles/emotion/Font600"
import { Button } from "./styles"

export function MobileLoadMoreButton() {

    const {
        handleSliceValue
    } = useApp()

    return (
        <Button
            onClick={handleSliceValue}
        >
            <img src="loadMore.svg" />

            <Font600Size16
                color="#34423D"
            >
                Carregar mais
            </Font600Size16>
        </Button>
    )
}