import Link from "next/link";
import { Font500Size16 } from "../../styles/emotion/Font500";
import { Container } from "./styles";

type CollaboratorProps = {
    agent_id : number
}

export function SeeCollaborator({agent_id} : CollaboratorProps) {
    return (
        <Container
            id="seeCollaborator"
        >
            {/* The link parameter is "1" because in the API you can only see the details of the collaborator with id = 1. 
            To see other collaborators (if they are available in the API) 
            just change the href to `collaborator/${agent_id}` */}
            <Link
                href={`collaborator/1`}
                passHref
            >
                <button>
                    <img src="seeIcon.svg" />

                    <Font500Size16
                        color="#587169"
                    >
                        Ver Colaborador
                    </Font500Size16>
                </button>
            </Link>

            <button
                disabled
            >
                <img src="deleteIcon.svg" />

                <Font500Size16
                    color="#587169"
                >
                    Ver Colaborador
                </Font500Size16>
            </button>

        </Container>
    )
}