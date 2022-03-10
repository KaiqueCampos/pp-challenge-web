import styled from '@emotion/styled'

export const Container = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;

    fieldset {
        height: 4.2rem;
        position:relative ;

        background:#fff;

        padding: 1rem 1.8rem;

        display: flex;
        align-items: center;
        gap: 1.5rem;

        position: relative;

        border-radius: 0.5rem;
        border: 2px solid #CAD6D1;

        legend{
            
            padding: 0 0.4rem;

            font-family: Poppins, sans-serif;
            font-weight: 500;
            color: #A3B8B0;

        }

        p{
            margin-left: 0.4rem;
            position: absolute;
            top: 25%;
        }
    }
`