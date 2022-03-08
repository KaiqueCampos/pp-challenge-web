import styled from '@emotion/styled'

export const CollaboratorsListTr = styled.tr`
    th{
        color: #587169;
        font: 400 0.8rem Poppins, sans-serif;
        text-align: left;

        padding: 1.2rem 1rem;
        border-bottom: 1px solid #EAEFED; 
    }


    .collaboratorsNameAndProfileImage{
        display: flex;
        align-items: center;
        gap: 0.6rem;        

        .collaboratorsProfileImage{
            width: 2.1rem;
            height: 2.1rem;
            border-radius: 50%;
        }
    } 
`