import { Font600Size18 } from '../../../../styles/emotion/Font600'
import { Container, OrganizationalData } from './styles'

type OrganizationalDataProps = {
    department: string,
    branch: string,
    role: string,
    status: string
}

export function CollaboratorsDetailsOrganizationalData(props : OrganizationalDataProps) {
    return (
        <Container>

            <Font600Size18
                color="#34423D"
            >
                Dados Organizacionais
            </Font600Size18>

            <OrganizationalData>
                <fieldset className="controlChunk">
                    <legend>Departamento</legend>
                    <select disabled>
                        <option>{props.department}</option>
                    </select>

                    <img src="/bottomArrow.svg" />
                </fieldset>

                <fieldset className="controlChunk">
                    <legend>Cargo</legend>
                    <select disabled>
                        <option>{props.role}</option>
                    </select>

                    <img src="/bottomArrow.svg" />
                </fieldset>

                <fieldset className="controlChunk">
                    <legend>Unidade</legend>
                    <select disabled>
                        <option>{props.branch}</option>
                    </select>

                    <img src="/bottomArrow.svg" />
                </fieldset>

                <fieldset className="controlChunk">
                    <legend>Status</legend>
                    <select disabled>
                        <option>{props.status === 'active' ? 'Ativo' : 'Inativo'}</option>
                    </select>

                    <img src="/bottomArrow.svg" />
                </fieldset>
            </OrganizationalData>

        </Container>
    )
}