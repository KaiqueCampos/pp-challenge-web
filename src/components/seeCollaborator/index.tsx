import { Font500Size16 } from "../../styles/emotion/Font500";
import { Container } from "./styles";

export function SeeCollaborator() {
    return (
        <Container
            id="seeCollaborator"
        >
            <button>
                <img src="seeIcon.svg" />

                <Font500Size16
                    color="#587169"
                >
                    Ver Colaborador
                </Font500Size16>
            </button>

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