import styled from '@emotion/styled'

export const Font500Size12 = styled.p(
    {
        fontSize: '0.8rem',
        margin: 'initial',
        lineHeight: '0.8rem',
        fontWeight: '500',
    },
    props => (props.color ? {color: props.color} : { color: '#587169' }),
)

export const Font500Size14 = styled.p(
    {
        fontSize: '0.8rem',
        margin: 'initial',
        lineHeight: '0.93rem',
        fontWeight: '500',
    },
    props => ({ color: props.color }),
)

export const Font500Size16 = styled.p(
    {
        fontSize: '1.05rem',
        margin: 'initial',
        lineHeight: '0.93rem',
        fontWeight: '500',
    },
    props => ({ color: props.color }),
)