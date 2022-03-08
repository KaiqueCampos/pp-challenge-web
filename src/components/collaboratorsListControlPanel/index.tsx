import { useCollaborators } from "../../hooks/useCollaborators";
import { Font400Size16 } from "../../styles/emotion/Font400";
import { Font600Size12 } from "../../styles/emotion/Font600";
import { ControlPanel } from "./styles";

export function CollaboratorsListControlPanel() {

    const { handleChunkValue } = useCollaborators()

    return (
        <ControlPanel>

            <div>
                <Font400Size16
                    color="#587169"
                >
                    Mostrando 10 de 50 registros
                </Font400Size16>

                <div className="controlChunk">
                    <select
                        onChange={(e) => handleChunkValue(parseInt(e.target.value))}
                    >
                        <option>{10}</option>
                        <option>{15}</option>
                        <option>{20}</option>
                        <option>{30}</option>
                        <option>{40}</option>
                        <option>{50}</option>
                    </select>

                    <img src="bottomArrow.svg" />
                </div>
            </div>

            <div>
                <button>
                    <img src="leftArrow.svg" />
                </button>

                <Font600Size12
                    color="#587169"
                >
                    1 de 10
                </Font600Size12>

                <button>
                    <img src="rightArrow.svg" />
                </button>
            </div>

        </ControlPanel>
    )
}