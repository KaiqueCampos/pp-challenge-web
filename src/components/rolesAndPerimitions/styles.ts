import styled from '@emotion/styled'

export const Container = styled.div`
    width: 100%;
    height: 63.5rem;
    background-color: #fff;

    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
    padding: 2.6rem 1.6rem;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`

export const RolesInformations = styled.div`
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

export const RolesAndPermitionsList = styled.div`

    height: 35rem;
    overflow-y: auto;
    
    padding-right: 0.5rem;

    @media (max-width: 1450px) {
        height: 20rem;
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

        thead{
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
        }

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
