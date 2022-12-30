import notFoundImg from "../../assets/notFoundScreen.png";
import { Container, ContainerImg, Img, Name } from "./style";

export function NotFoundScreen() {
  return (
    <Container>
      <ContainerImg>
        <Name>Ops! Essa página não existe</Name>
        <Img src={notFoundImg} />
      </ContainerImg>
    </Container>
  );
}
