import styled from '@emotion/styled'

export const Container = styled.div`

    height: 35rem;
    overflow-y: auto;
    
    padding-right: 0.5rem;

    @media (max-width: 1450px) {
        height: 20rem;
    }

    @media (max-width: 450px) {
        height: auto !important;
        overflow-y: hidden !important;
        overflow: hidden;
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

        tbody{
            th{
                color: #587169;
                font: 400 0.8rem Poppins, sans-serif;
                text-align: left;

                padding: 1.6rem 1rem;
                border-bottom: 1px solid #EAEFED; 

                &:first-child {
                    width: 60%;
                }
            }
        }
    }
`

export const Allowed = styled.div`
    width: 1.3rem;
    height: 1.3rem;

    background: #1DD195;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius : 0.4rem;

    img{
        width: 0.8rem;
    }
`

export const NotAllowed = styled.div`
    width: 1.3rem;
    height: 1.3rem;
    border: 2px solid #CAD6D1;
    border-radius : 0.4rem;
`