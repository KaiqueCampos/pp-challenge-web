import styled from '@emotion/styled'

export const Container = styled.div`
    width: 100%;
    height: 4rem;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #fff;
    border-bottom: 1px solid #EAEFED;

    @media (max-width: 450px) {
        justify-content: center;
    }
`

