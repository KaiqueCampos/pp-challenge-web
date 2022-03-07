import { Font500Size14 } from "../../styles/emotion/Font500";
import { Fieldset } from "./styles";

type SearchCollaboratorsOrPositionProps = {
    placeholder: string
}

export function SearchCollaboratorsOrPosition({placeholder} : SearchCollaboratorsOrPositionProps) {
    return (
        <Fieldset>
            <legend>
                <Font500Size14
                    color="#A3B8B0"
                >
                    Pesquise por
                </Font500Size14>
            </legend>

            <img src="searchIcon.svg" />

            <input
                type="text"
                placeholder={placeholder}
            />
        </Fieldset>
    )
}