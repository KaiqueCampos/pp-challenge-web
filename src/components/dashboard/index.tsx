import { useCollaborators } from "../../hooks/useCollaborators";
import { TitleSize16 } from "../../styles/emotion/Titles";
import { CollaboratorsListControlPanel } from "../collaboratorsListControlPanel";
import { DashboardList } from "../dashboardList";
import { RolesListControlPanel } from "../rolesListControlPanel";
import { SearchInputDashboard } from "../SearchInputDashboard";
import { ToggleCollaboratorsPositionsButton } from "../toggleCollaboratorsPositionButton";
import { DashboardContainer } from "./style";

export function Dashboard() {

  const { collaboratorsIsActive } = useCollaborators()

  return (

    <DashboardContainer>
      <ToggleCollaboratorsPositionsButton />

      <SearchInputDashboard
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