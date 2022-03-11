import styled from '@emotion/styled'

export const InstitutionDashboardContainer = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    padding: 3.6rem 23.6rem;

    @media (max-width: 1550px) {
        padding: 3.6rem 14rem;
    }

    @media (max-width: 450px) {
        padding: 3.6rem 0.5rem;

        // title
        h1{
            margin-left: 1rem;
        }
    }
`

