import Link from "next/link";
import { Font600Size16 } from "../../../styles/emotion/Font600";
import { ActionsButton } from "./styles";

type ActionButtonProps = {
    isActivatedByCollaborators : boolean,
}

export function ActionButton({isActivatedByCollaborators} : ActionButtonProps) {
    return (
        <Link
            passHref
            href={isActivatedByCollaborators ? "collaborator/1" : "role"}
        >
            <ActionsButton
                id="actionsButton"
            >

                <img src="actionsIcon.svg" />
                <Font600Size16
                    color="#34423D"
                >
                    Ações
                </Font600Size16>
            </ActionsButton>
        </Link>
    )
}