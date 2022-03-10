import { Font400Size12 } from "../../../../styles/emotion/Font400"
import { Font600Size18 } from "../../../../styles/emotion/Font600"
import { Header } from "./styles"

type CollaboratorsDetailsHeaderProps = {
    email: string,
    image: string,
    name: string
}

export function CollaboratorsDetailsHeader(collaborator: CollaboratorsDetailsHeaderProps) {
    return (
        <Header>
            <img src={collaborator.image} />

            <div>
                <Font600Size18
                    color="#34423D"
                >
                    {collaborator.name}
                </Font600Size18>

                <Font400Size12
                    color="#587169"
                >
                    {collaborator.email}
                </Font400Size12>
            </div>
        </Header>
    )
}   