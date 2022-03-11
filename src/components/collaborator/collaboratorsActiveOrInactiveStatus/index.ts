import styled from '@emotion/styled'

type collaboratorsActiveOrInactiveStatusProps = {
    isActive : string;
}

export const CollaboratorsActiveOrInactiveStatus = styled.div<collaboratorsActiveOrInactiveStatusProps>({
        width: '5rem !important',
        padding: '0.2rem 0 !important',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: '5.3rem',
    },

    props => (
        props.isActive === 'active' 
            ? {backgroundColor: '#B5F1DD'}
            : {backgroundColor: '#EAEFED'}
    )

)