import styled from '@emotion/styled'

export const Container = styled.div`

    height: 30rem;
    overflow-y: auto;
    
    padding-right: 0.5rem;

    @media (max-width: 1450px) {
        height: 17rem;
    }
    
    &::-webkit-scrollbar {
        width: 0.5rem;
        height: 1.2rem;
    }

    &::-webkit-scrollbar-track {
        height: 1rem;
        border-radius: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        border: 5px solid transparent;
        background-clip: padding-box;
        background: #CAD6D1;
        border-radius: 1rem;
    }

    table {
        width: 100%;

        position: relative;
    }
`
