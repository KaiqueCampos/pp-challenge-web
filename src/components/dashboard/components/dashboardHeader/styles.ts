import styled from '@emotion/styled'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.1rem;
`

export const Button = styled.button`
    padding: 0.6rem;
    border-radius: 50%;
    transition: filter 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        filter: brightness(0.9);
    }
`