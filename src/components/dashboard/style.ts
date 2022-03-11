import styled from '@emotion/styled'

export const DashboardContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: #fff;

    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
    padding: 2.6rem 1.6rem;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    hr{

        width: auto;
        height: 2px;

        background: #EAEFED;
        border: none;
        display: none;

        margin: 0 -1.6rem;

        @media (max-width: 450px) {
            display: block;
        }
    }
`