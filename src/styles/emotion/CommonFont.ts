import styled from '@emotion/styled'

type CommonFontProps = {
    isBold: boolean,
}

export const CommonFontSize12 = styled.p<CommonFontProps>(
    {
        fontSize: '0.8rem',
        margin: 'initial',
        lineHeight: '0.8rem',
    },
    props => ({ color: props.color }),
    props => (props.isBold ? {fontWeight: '600'} : {FontWeight: '400'})
)

export const CommonFontSize14 = styled.p<CommonFontProps>(
    {
        fontSize: '0.8rem',
        margin: 'initial',
        lineHeight: '0.93rem',
    },
    props => ({ color: props.color }),
    props => (props.isBold ? {fontWeight: '600'} : {FontWeight: '400'})
)