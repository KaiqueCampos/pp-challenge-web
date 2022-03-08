import styled from '@emotion/styled'

export const ControlPanel = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
        gap: 1.5rem;

        &:last-child{
            gap: 0.8rem;
        }

        .controlChunk{

            position: relative;

            border-radius: 0.5rem;
            border: 2px solid #CAD6D1;

            select{
                background: none;
                border: none;
                padding: 0.5rem 3rem 0.5rem 0.8rem;

                font-size: 1.05rem;
                line-height: 0.93rem;
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

        button{
            border-radius: 0.53rem 0 0 0.53rem;
            border: 1.4px solid #709085;
            padding: 0.7rem 1.3rem;
            background: none;

            display: flex;
            align-items: center;
            justify-content: center;
            
            &:last-child {
                border-radius: 0 0.53rem 0.53rem 0;
            }
        }
    }

    
`