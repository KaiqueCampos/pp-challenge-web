import styled from '@emotion/styled'

export const Container = styled.div`
    width: 22.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.2rem;

    padding: 1.8rem 2.1rem;

    position: absolute;
    right: 5rem;

    background: #fff;
    box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);

    z-index: 1000;

    button{
        background: none ;
        width: 100%;
        
        display: flex;
        align-items: center;
        gap: 1rem;

        transition: filter 0.5s;

        &:last-child {
            img{
                margin-left: 0.2rem;
            }
        }

        &:enabled:hover{
            filter: brightness(0.7);
        }

        &:disabled{
            opacity: 50%
        }
    }
`