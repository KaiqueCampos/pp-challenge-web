import { useEffect, useState } from "react";
import { useApp } from "../../hooks/useApp";
import { useCollaborators } from "../../hooks/useCollaborators";
import { TitleSize16 } from "../../styles/emotion/Titles";
import { CollaboratorsListControlPanel } from "../collaborator/collaboratorsListControlPanel";
import { HrDivisor } from "../hrDivisor/styles";
import { MobileDashboard } from "../mobileDashboard";
import { RolesListControlPanel } from "../roles/rolesListControlPanel";
import { DashboardList } from "./components/dashboardList";
import { MobileLoadMoreButton } from "./components/dashboardMobileLoadMore";
import { DashboardSearchInput } from "./components/dashboardSearchInput";
import { DashboardToggleCollaboratorsPositionsButton } from "./components/dashboardToggleCollaboratorsPositionButton";
import { DashboardContainer } from "./style";

export function Dashboard() {

  const { collaboratorsIsActive } = useCollaborators()
  const { isAMobileDevice } = useApp()

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

      <HrDivisor />

      <TitleSize16>
        {collaboratorsIsActive ? "Lista de Colaboradores" : "Listagem de cargos"}
      </TitleSize16>

      {/* dashboard list */}
      {
        isAMobileDevice ? (

          <MobileDashboard />

        ) : (

          <DashboardList />
        )
      }

      {/* dashboard control panel */}
      {isAMobileDevice === false 
        ? (
          <>
            {
              // checks which panel to show according to the selected list, collaborators or roles
              collaboratorsIsActive ? (
                <CollaboratorsListControlPanel />
              ) : (
                <RolesListControlPanel />
              )
            }
          </>

        ) : (
          
          <MobileLoadMoreButton />
        )
      }

    </DashboardContainer>
  )
}