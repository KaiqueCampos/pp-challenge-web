import styled from '@emotion/styled'

export const CommonFontSize12 = styled.p(
    {
        fontSize: '0.8rem',
        margin: 'initial',
        lineHeight: '0.8rem',
    },
    props => ({color: props.color}),
)