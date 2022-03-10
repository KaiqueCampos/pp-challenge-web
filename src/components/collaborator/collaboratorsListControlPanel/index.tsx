import { useEffect, useState } from "react";
import { useCollaborators } from "../../../hooks/useCollaborators";
import { Font400Size16 } from "../../../styles/emotion/Font400";
import { Font600Size12 } from "../../../styles/emotion/Font600";
import { ControlButton } from "../../controlPanelButton/styles";
import { ControlPanel } from "./styles";

export function CollaboratorsListControlPanel() {

    const {
        indexOfChunkedArrayToShow,
        chunk,
        chunkedCollaboratorsList,
        collaboratorsData,
        handleChunkValue,
        handleIndexOfChunkedArrayToShow,
    } = useCollaborators()

    const [numberOfItemsShown, setNumberOfItemsShown] = useState(10);

    // Check if chunked collaborators list are undefined
    const numberOfIndexOnChunkedList = chunkedCollaboratorsList !== undefined ? chunkedCollaboratorsList?.length : 0;

    // Returns the value of the index of the chunked collaborators list array to 0 when the chunk value changes
    useEffect(() => {
        handleIndexOfChunkedArrayToShow(0)
        setNumberOfItemsShown(chunk)
    }, [chunk])

    return (
        <ControlPanel>

            <div>
                <Font400Size16
                    color="#587169"
                >
                    Mostrando &nbsp;

                    {
                        collaboratorsData !== undefined
                            ? (numberOfItemsShown >= collaboratorsData?.length ? collaboratorsData.length : numberOfItemsShown)
                            : ''
                    }

                    &nbsp;
                    de {collaboratorsData?.length} registros
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
                <ControlButton
                    onClick={() => {
                        handleIndexOfChunkedArrayToShow(indexOfChunkedArrayToShow - 1)
                        setNumberOfItemsShown(chunk * indexOfChunkedArrayToShow)
                    }}
                    disabled={indexOfChunkedArrayToShow <= 0}
                >
                    <img src="leftArrow.svg" />
                </ControlButton>

                <Font600Size12
                    color="#587169"
                >
                    {
                        indexOfChunkedArrayToShow <= 0
                            ? 1
                            : (indexOfChunkedArrayToShow >= numberOfIndexOnChunkedList
                                ? numberOfIndexOnChunkedList
                                : indexOfChunkedArrayToShow + 1
                            )

                    } de {chunkedCollaboratorsList?.length}
                </Font600Size12>

                <ControlButton
                    onClick={() => {
                        handleIndexOfChunkedArrayToShow(indexOfChunkedArrayToShow + 1)
                        setNumberOfItemsShown(
                            chunk >= 0
                                ? chunk * (indexOfChunkedArrayToShow + 2)
                                : chunk * (indexOfChunkedArrayToShow + 1)
                        )
                    }}
                    disabled={indexOfChunkedArrayToShow >= numberOfIndexOnChunkedList - 1}
                >
                    <img src="rightArrow.svg" />
                </ControlButton>
            </div>

        </ControlPanel>
    )
}