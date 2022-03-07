import styled from '@emotion/styled'

type Font400Props = {
    isBold?: boolean,
}

export const Font400Size12 = styled.p<Font400Props>(
    {
        fontSize: '0.8rem',
        margin: 'initial',
        lineHeight: '0.8rem',
    },
    props => ({ color: props.color }),
    props => (props.isBold ? {fontWeight: '600'} : {FontWeight: '400'})
)

export const Font400Size14 = styled.p<Font400Props>(
    {
        fontSize: '0.8rem',
        margin: 'initial',
        lineHeight: '0.93rem',
    },
    props => ({ color: props.color }),
    props => (props.isBold ? {fontWeight: '600'} : {FontWeight: '400'})
)