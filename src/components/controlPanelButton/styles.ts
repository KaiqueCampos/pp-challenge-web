import styled from '@emotion/styled'

export const ControlButton = styled.button`

    border-radius: 0.53rem 0 0 0.53rem;
    border: 1.4px solid #709085;
    padding: 0.7rem 1.3rem;
    background: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;
    
    &:last-child {
        border-radius: 0 0.53rem 0.53rem 0;
    }

    &:disabled {
        opacity: 0.5;
    }

    &:enabled:hover{
        filter: brightness(0.7);
    }
        
`