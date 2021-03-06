import styled from '@emotion/styled'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.1rem;

    @media (max-width: 450px){
        padding-left: 0.5rem;
        gap: 0;

        h1{
            font-size: 20px;
        }
    }
`

export const Button = styled.button`
    padding: 0.6rem;
    border-radius: 0.5rem;
    transition: filter 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        filter: brightness(0.9);
    }
`