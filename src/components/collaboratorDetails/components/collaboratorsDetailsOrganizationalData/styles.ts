import styled from '@emotion/styled'

export const Container = styled.div`

    width: 100%;
    height: auto;

    border-radius: 0.5rem;
    border: 2px solid #EAEFED;

    padding: 1.6rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`

export const OrganizationalData = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1.5rem;

    fieldset{
        position:relative ;

        height: 4.2rem;
        background:#F5FAF8;

        margin: 0rem;
        padding: 0rem;

        display: flex;
        align-items: center;
        gap: 1.5rem;

        position: relative;

        border-radius: 0.5rem;
        border: 2px solid #CAD6D1;

        legend{
            
            margin-left: 1.3rem;
            padding: 0 0.4rem;

            font-family: Poppins, sans-serif;
            font-weight: 500;
            color: #A3B8B0;

        }

        select{
            position:absolute;
            top: -0.9rem;
            height: 3.4rem;

            width: 100%;

            background: none;
            border: none;
            padding: 0.5rem 3rem 0.5rem 0.8rem;

            font-size: 1.05rem;
            line-height: 0.93rem;
            font-family: Poppins, sans-serif;
            font-weight: 500;
            color: #587169;

            -webkit-appearance: none;
            appearance: none;

            z-index: 2;
            cursor: pointer;
        } 

        img{
            z-index: 1;
            position: absolute;
            right: 1rem;
        }

    }

    @media (max-width: 450px) {
        display: grid;
        grid-template-columns: none;
        grid-template-rows: repeat(4, 1fr);
    }
`