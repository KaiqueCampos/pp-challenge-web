import styled from '@emotion/styled'

type CollaboratorsListTrProps = {
    isInactive: string,
}

export const CollaboratorsListTr = styled.tr<CollaboratorsListTrProps>({
    "th": {
        color: '#587169',
        font: '400 0.8rem Poppins, sans-serif',
        textAlign: 'left',

        padding: '1.2rem 1rem',
        borderBottom: '1px solid #EAEFED',
    },

    ".collaboratorsNameAndProfileImage": {
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',

        ".collaboratorsProfileImage": {
            width: '2.1rem',
            height: '2.1rem',
            borderRadius: '50%',
        }
    }
},
    props => (
        props.isInactive === 'inactive' && {

            "th:nth-child(1), th:nth-child(2), th:nth-child(3), th:nth-child(4)" : {
                opacity: "0.5",
            },
        }
    )
)