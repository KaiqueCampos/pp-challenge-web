import { Font400Size12 } from "../../../../styles/emotion/Font400";
import { Font600Size14 } from "../../../../styles/emotion/Font600";
import { Container, PersonalInformation } from "./styles";

import moment from 'moment'

type CollaboratorDetailsPersonalInformationProps = {
    birth_date: string,
    phone: {
        ddd: string,
        ddi: string,
        number: number
    },
    document: {
        type: string,
        number: string
    },
}

export function CollaboratorDetailsPersonalInformation(props: CollaboratorDetailsPersonalInformationProps) {

    const birthdayDate = moment(props.birth_date,).format("DD/MM/YYYY");

    return (
        <Container>

            {/* Document */}
            <PersonalInformation>
                <div className="icon">
                    <img src="/cpfIcon.svg" />
                </div>

                <div className="information">
                    <Font400Size12
                        color="#587169"
                    >
                        {props.document.type}
                    </Font400Size12>

                    <Font600Size14
                        color="#34423D"
                    >
                        {props.document.number}
                    </Font600Size14>
                </div>

            </PersonalInformation>

            {/* Phone number */}
            <PersonalInformation>
                <div className="icon">
                    <img src="/phoneIcon.svg" />
                </div>

                <div className="information">
                    <Font400Size12
                        color="#587169"
                    >
                        Telefone
                    </Font400Size12>

                    <Font600Size14
                        color="#34423D"
                    >
                        {`+${props.phone.ddi} (${props.phone.ddd}) ${props.phone.number}`}
                    </Font600Size14>
                </div>

            </PersonalInformation>

            {/* Birthday */}
            <PersonalInformation>
                <div className="icon">
                    <img src="/calendarIcon.svg" />
                </div>

                <div className="information">
                    <Font400Size12
                        color="#587169"
                    >
                        Nascimento
                    </Font400Size12>

                    <Font600Size14
                        color="#34423D"
                    >
                        {birthdayDate}
                    </Font600Size14>
                </div>

            </PersonalInformation>
        </Container>
    )
}