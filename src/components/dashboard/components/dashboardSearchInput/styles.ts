import styled from '@emotion/styled'

export const Fieldset = styled.fieldset`
    width: 100%;
    border: 2px solid #CAD6D1;

    border-radius: 0.5rem;
    padding: 0.2rem 1.4rem 0.9rem 1.4rem;

    display: flex;
    align-items: center;
    gap: 0.6rem;

    legend {
        padding: 0 0.4rem,
    }

    input {
        width: 100%;
        height: 1.8rem;
        border: none;

        font-size: 1.05rem;
        color: #587169;
        font-family: Poppins, sans-serif;
        font-weight: 500;

        &:focus, &:focus{
        outline: none;
    }
`