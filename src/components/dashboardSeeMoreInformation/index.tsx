import Link from "next/link";
import { Font500Size16 } from "../../styles/emotion/Font500";
import { Container } from "./styles";

type SeeMoreInformationsProps = {
    agent_id: number
    activatedByRolesList?: boolean
}

export function DashboardSeeMoreInformations({ agent_id, activatedByRolesList }: SeeMoreInformationsProps) {

    return (
        <Container
            id="seeCollaborator"
        >
            {
                !activatedByRolesList && (
                    <>
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
                                Excluir
                            </Font500Size16>
                        </button>
                    </>
                )
            }

            {
                activatedByRolesList && (
                    <>
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
                                    Ver cargo
                                </Font500Size16>
                            </button>
                        </Link>

                        <button
                            disabled
                        >
                            <img src="./editIcon.svg" />

                            <Font500Size16
                                color="#587169"
                            >
                                Editar
                            </Font500Size16>
                        </button>

                        <button
                            disabled
                        >
                            <img src="./duplicateIcon.svg" />

                            <Font500Size16
                                color="#587169"
                            >
                                Duplicar
                            </Font500Size16>
                        </button>

                        <button
                            disabled
                        >
                            <img src="./deleteIcon2.svg" />

                            <Font500Size16
                                color="#587169"
                            >
                                Excluir
                            </Font500Size16>
                        </button>
                    </>
                )
            }

        </Container>
    )
}