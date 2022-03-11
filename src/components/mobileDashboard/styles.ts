import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const ListItem = styled.div`

    border: 2px solid #EAEFED;
    border-radius: 0.5rem;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 0.5rem;

    position: relative;

    div[id = ListItemsInformations] {
        display: none;
    }

    &[id = active] {
        border-color: #B5F1DD;

        div[id = rolesInformation]{
            display: none;
        }

        div[class = rolesListItems]{
            background: red;
        }
        
        button[id = actionsButton]{
            display: flex;
        }

        div[class = userInformation]{
            img{
                border: 2px solid #1DD195;
            }
        }

        div[id = ListItemsInformations] {
            margin-top: 1rem;

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 0.4rem;
        }
    }

    &[id = RolesListItems]{
        padding: 0rem;
    }

    div[class = userInformation]{
        display: flex;
        align-items: center;
        gap: 0.5rem;

        img{
            width: 2.1rem;
            border-radius: 50%;
        }
    }

    button{
        position: absolute;
        top: 2rem;
        right: 1.4rem;
        
        background: #fff;
    }
`

export const ListItemsInformations = styled.div`

    div{
        width: 100%;
        text-align: left;

        padding: 0.5rem 0;

        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }
`

export const ActionsButton = styled.button`
    width: 100%;
    height: 3.2rem;
    
    position: static !important;
    
    display: none;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    border-radius: 0.5rem;
    border: 2px solid #B5F1DD;

    margin-top: 1rem;
`

export const RolesInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 0.5rem;
`