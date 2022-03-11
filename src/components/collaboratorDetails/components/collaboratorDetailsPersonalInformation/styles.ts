import styled from '@emotion/styled'

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;

    @media (max-width: 450px) {
        display: block;
        display: grid;
        grid-template-columns: none;
        grid-template-rows: (3,1fr);
        gap: 0.5rem;        
    }
`

export const PersonalInformation = styled.div`
    height: 4.6rem;

    background: #F5FAF8;
    border: 2px solid #CAD6D1;
    border-radius: 0.5rem;

    display:flex;
    align-items:center;
    gap: 0.8rem;

    padding: 1.05rem;

    .icon{
        width: 2.5rem;
        height: 2.5rem;


        display: flex;
        align-items: center;
        justify-content: center;

        background: #CAD6D1;
        border-radius: 50%;
        
        img{
            width: 1rem;
        }
    }

    .information{]
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            line-height: 0.9rem;
        }
    }
`   