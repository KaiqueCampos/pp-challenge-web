import { Container } from "./style";

export function CollaboratorsList() {
    return (
        <Container cellSpacing={0}>
            <thead>
                <tr>
                    <th>Nome completo</th>
                    <th>Departamento</th>
                    <th>Cargo</th>
                    <th>Unidade</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>Rose</th>
                    <th>Administrativo</th>
                    <th>Diretora</th>
                    <th>Quartel General</th>
                    <th>Ativo</th>
                    <th>
                        <img src="settingsIcon.svg"/>
                    </th>
                </tr>
            </tbody>
        </Container>
    )
}

