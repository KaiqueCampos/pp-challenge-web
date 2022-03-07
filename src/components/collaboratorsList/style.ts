import styled from '@emotion/styled'

export const Container = styled.table`

    width: 100%;

        thead{
            th, td{
            border-top: 1px solid #CAD6D1;
            border-bottom: 1px solid #CAD6D1;

            &:first-child {
                border-left:  1px solid #CAD6D1;
                border-top-left-radius: 0.5rem;
            }

            &:last-child {
                border-right: 1px solid #CAD6D1;
                border-top-right-radius: 0.5rem;
            }
        }

        }

        th, td{
            padding: 0.75rem 1rem;
        }

        th{
            color: #587169;
            font: 400 0.8rem Poppins, sans-serif;
            text-align: left;
        }
`
