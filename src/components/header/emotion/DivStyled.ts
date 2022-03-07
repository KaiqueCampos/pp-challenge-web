import styled from '@emotion/styled'

type DivProps = {
    width: string,
    borderRight ?: string,
    borderLeft ?: string,
}

export const Div = styled.div<DivProps>(
    {
        height: '4rem',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    props => ({ width: props.width }),
    props => ({ borderRight : props.borderRight}),
    props => ({ borderLeft : props.borderLeft})
)