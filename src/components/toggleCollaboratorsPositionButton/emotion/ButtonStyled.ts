import styled from '@emotion/styled'

type ButtonProps = {
    isActive: boolean,
}

export const Button = styled.button<ButtonProps>({
    backgroundColor: '#fff',
    width: '13.5rem',
    paddingBottom: '1rem',
    
}, 
    props => (props.isActive ? {borderBottom: '2px solid #22E0A1'} : {borderBottom: 'none'}),
)