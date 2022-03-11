import styled from '@emotion/styled'

type ButtonProps = {
    isActive: boolean,
}

export const Container = styled.div({
    width: '100%',
    borderBottom: '2px solid #EAEFED',

    "@media(max-width: 450px)": {
        border: 'none',
    }
})

export const Button = styled.button<ButtonProps>({
    backgroundColor: '#fff',
    width: '13.5rem',
    paddingBottom: '1rem',

    'img': {
        display: 'none',
    },

    "@media(max-width: 450px)": {
        width: '100%',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        background: '#fff',
        padding: '1rem 2rem 1rem 1rem',

        border: '2px solid #CAD6D1',
        borderRadius: '0.5rem',

        'img': {
            display: 'initial',
        },
    }

},
    props => (props.isActive
        ? {
            borderBottom: '2px solid #22E0A1',

            "@media(max-width: 450px)": {
                display: 'flex',
                border: 'none,'
            }
        }

        : {
            borderBottom: 'none',

            "@media(max-width: 450px)": {
                display: 'none',
            }
        }),
)

export const MobileToggleListMenu = styled.div`
    width: 85%;

    background: #fff;

    position: absolute;
    z-index: 100;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
    border-radius: 0.8rem 0.8rem 0px 0px;

    padding: 3.2rem 0 2.5rem 0 ;

    div {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
        
        padding-left: 1.6rem;
        padding-right: 1.9rem;

        margin-bottom: 1.5rem;

        button{
            background: #fff;
        }
    }
`

export const MobileToggleListMenuButton = styled.button`
    width: 97%;
    height: 3.8rem;

    display: flex;
    align-items: center;
    justify-content: left;

    padding: 0 2rem;

    background: #fff;
    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.97)
    }

`
