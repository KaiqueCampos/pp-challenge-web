import { ProfileInformation } from "../profileInformation";
import { Brand } from "./emotion/BrandStyled";
import { Container } from "./emotion/ContainerStyled";
import { Div } from "./emotion/DivStyled";

export function Header() {
    return (
        <Container>
            <Div
                width="6.6rem"
                borderRight="1px solid #EAEFED"
            >
                <Brand src="/brand.svg" />
            </Div>

            <Div
                width="14.5rem"
                borderLeft="1px solid #EAEFED"
            >
                <ProfileInformation />
            </Div>
        </Container>
    )
}