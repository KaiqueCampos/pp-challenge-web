import { CommonFontSize12 } from "../../styles/emotion/CommonFont";
import { TitleSize14 } from "../../styles/emotion/Titles";
import { Container } from "./emotion/ContainerStyled";
import { ProfileImage } from "./emotion/ProfileImageStyled";

export function ProfileInformation() {
  return (
    <Container>
      <ProfileImage src="profileImage.svg" />

      <div>
        <TitleSize14>Luiz Zlochevsky</TitleSize14>

        <CommonFontSize12
          color="#587169"
          isBold={false}
        >
          meus dados
        </CommonFontSize12>
      </div>
    </Container>
  )
}