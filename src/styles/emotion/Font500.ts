import styled from '@emotion/styled'

type Font500Props = {
    isBold?: boolean,
    color?: string
}

export const Font500Size12 = styled.p<Font500Props>(
    {
        fontSize: '0.8rem',
        margin: 'initial',
        lineHeight: '0.8rem',
    },
    props => (props.color ? {color: props.color} : { color: '#587169' }),
    props => (props.isBold ? {fontWeight: '600'} : {FontWeight: '500'})
)

export const Font500Size14 = styled.p<Font500Props>(
    {
        fontSize: '0.8rem',
        margin: 'initial',
        lineHeight: '0.93rem',
    },
    props => ({ color: props.color }),
    props => (props.isBold ? {fontWeight: '600'} : {FontWeight: '500'})
)

export const Font500Size16 = styled.p<Font500Props>(
    {
        fontSize: '1.05rem',
        margin: 'initial',
        lineHeight: '0.93rem',
    },
    props => ({ color: props.color }),
    props => (props.isBold ? {fontWeight: '600'} : {FontWeight: '500'})
)