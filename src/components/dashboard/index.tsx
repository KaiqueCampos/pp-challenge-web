import { Container } from "./emotion/ContainerStyled";
import { LeftDiv } from "./emotion/LeftDivStyled";
import { Main } from "./emotion/MainStyled";
import { TitleSize32 } from "../../styles/emotion/Titles";
import { DashboardContainer } from "./emotion/DashboardContainerStyled";
import { ToggleCollaboratorsPositionsButton } from "../toggleCollaboratorsPositionButton";


export function Dashboard() {
  return (
    <Container>
      <LeftDiv />

      <Main>
        <TitleSize32>Organização</TitleSize32>

        <DashboardContainer>
          <ToggleCollaboratorsPositionsButton />
        </DashboardContainer>
       
       
      </Main>

    </Container>
  )
}