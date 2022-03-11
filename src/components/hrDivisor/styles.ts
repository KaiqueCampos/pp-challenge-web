import styled from '@emotion/styled'

export const HrDivisor = styled.hr`
    width: auto;
    height: 2px;

    background: #EAEFED;
    border: none;
    display: none;

    margin: 0 -1.6rem;

    @media (max-width: 450px) {
        display: block;
    }
`