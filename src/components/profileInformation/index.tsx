import { Font400Size12 } from "../../styles/emotion/Font400";
import { TitleSize14 } from "../../styles/emotion/Titles";
import { Container } from "./styles";

export function ProfileInformation() {
  return (
    <Container>
      <img src="/profileImage.svg" />

      <div>
        <TitleSize14>Luiz Zlochevsky</TitleSize14>

        <Font400Size12
          color="#587169"
        >
          meus dados
        </Font400Size12>
      </div>
    </Container>
  )
}