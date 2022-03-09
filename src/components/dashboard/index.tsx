import { ToggleCollaboratorsPositionsButton } from "../toggleCollaboratorsPositionButton";
import { SearchCollaboratorsOrPosition } from "../searchCollaboratorsOrPosition";
import { DashboardContainer } from "./style";
import { TitleSize16 } from "../../styles/emotion/Titles";
import { CollaboratorsList } from "../collaboratorsList";
import { CollaboratorsListControlPanel } from "../collaboratorsListControlPanel";
import { DashboardHeader } from "../dashboardHeader";

export function Dashboard() {
  return (

    <DashboardContainer>
      <ToggleCollaboratorsPositionsButton />

      <SearchCollaboratorsOrPosition
        placeholder="Pesquisar por nome ou cpf"
      />

      <DashboardHeader
        title="Lista de colaboradores"
      />
      
      <TitleSize16>Lista de Colaboladores</TitleSize16>

      <CollaboratorsList />
      <CollaboratorsListControlPanel />

    </DashboardContainer>
  )
}