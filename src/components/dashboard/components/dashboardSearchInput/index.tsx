import { useCollaborators } from "../../../../hooks/useCollaborators";
import { useRoles } from "../../../../hooks/useRoles";
import { Font500Size14 } from "../../../../styles/emotion/Font500";
import { Fieldset } from "./styles";

type DashboardSearchInputProps = {
    placeholder: string
}

export function DashboardSearchInput({ placeholder }: DashboardSearchInputProps) {

    const {
        backupRolesData,
        searchRoles,
        setRolesBackupDataInRolesData
    } = useRoles()

    const {
        collaboratorsIsActive,
        collaboratorsData,
        searchCollaborators,
        handleCollaboratorsListInChunks,
    } = useCollaborators()

    return (
        <Fieldset>
            <legend>
                <Font500Size14
                    color="#A3B8B0"
                    style={{
                        padding: '0 0.4rem'
                    }}
                >
                    Pesquise por
                </Font500Size14>
            </legend>

            <img src="searchIcon.svg" />

            <input
                id='searchCollaborator'
                type="text"
                placeholder={placeholder}
                onChange={(e) => {

                    if (collaboratorsIsActive) {
                        searchCollaborators(e.target.value)

                        if (e.target.value === '' && collaboratorsData !== undefined) {
                            handleCollaboratorsListInChunks(collaboratorsData, 10)
                        }

                    } else {
                        searchRoles(e.target.value)

                        if (e.target.value === '' && backupRolesData !== undefined) {
                            setRolesBackupDataInRolesData(backupRolesData)
                        }
                    }
                }}
            />
        </Fieldset>
    )
}