import styled from "@emotion/styled";

type UserInformationProps = {
    isInactive: string
}

export const UserInformation = styled.div<UserInformationProps>({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    "img": {
        width: '2.1rem',
        borderRadius: '50%',
    }
},
    props => (
        props.isInactive === 'inactive' && {
            opacity: "0.5",
        }
    )
)