import { useEffect, useState } from "react";
import { useCollaborators } from "../../hooks/useCollaborators";
import { TitleSize16 } from "../../styles/emotion/Titles";
import { CollaboratorsListControlPanel } from "../collaborator/collaboratorsListControlPanel";
import { HrDivisor } from "../hrDivisor/styles";
import { MobileDashboard } from "../mobileDashboard";
import { RolesListControlPanel } from "../roles/rolesListControlPanel";
import { DashboardList } from "./components/dashboardList";
import { DashboardSearchInput } from "./components/dashboardSearchInput";
import { DashboardToggleCollaboratorsPositionsButton } from "./components/dashboardToggleCollaboratorsPositionButton";
import { DashboardContainer } from "./style";

export function Dashboard() {

  const { collaboratorsIsActive } = useCollaborators()
  const [isAMobileDevice, setIsAMobileDevice] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
      setIsAMobileDevice(true);
    }

    // checks if the device has mobile dimensions
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 450) {
        setIsAMobileDevice(true);
      }

      if (window.innerWidth > 450) {
        setIsAMobileDevice(false);
      }
    });
  })



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