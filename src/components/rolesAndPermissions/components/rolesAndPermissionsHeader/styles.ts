import styled from '@emotion/styled'

export const THead = styled.thead`
    th, td{
        border-top: 1px solid #CAD6D1;
        border-bottom: 1px solid #CAD6D1;

        padding: 1.2rem 1rem;

        text-align: left;

        &:first-child {
            border-left:  1px solid #CAD6D1;
            border-top-left-radius: 0.5rem;

            text-align: left;
        }

        &:last-child {
            border-right: 1px solid #CAD6D1;
            border-top-right-radius: 0.5rem;
        }
    }
    
`