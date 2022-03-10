import { useCollaborators } from "../../hooks/useCollaborators";
import { TitleSize16 } from "../../styles/emotion/Titles";
import { CollaboratorsListControlPanel } from "../collaborator/collaboratorsListControlPanel";
import { RolesListControlPanel } from "../roles/rolesListControlPanel";
import { DashboardList } from "./components/dashboardList";
import { DashboardSearchInput } from "./components/dashboardSearchInput";
import { DashboardToggleCollaboratorsPositionsButton } from "./components/dashboardToggleCollaboratorsPositionButton";
import { DashboardContainer } from "./style";

export function Dashboard() {

  const { collaboratorsIsActive } = useCollaborators()

  return (

    <DashboardContainer>
      <DashboardToggleCollaboratorsPositionsButton />

      <DashboardSearchInput
        placeholder={
          collaboratorsIsActive
            ? "Pesquisar por nome ou cpf"
            : "Pesquise por cargos"
        }
      />
      
      <TitleSize16>
        {collaboratorsIsActive ? "Lista de Colaboradores" : "Listagem de cargos"}
      </TitleSize16>

      <DashboardList />

      {
        // checks which panel to show according to the selected list, collaborators or roles
        collaboratorsIsActive ? (
          <CollaboratorsListControlPanel />
        ) : (
          <RolesListControlPanel />
        )
      }

    </DashboardContainer>
  )
}