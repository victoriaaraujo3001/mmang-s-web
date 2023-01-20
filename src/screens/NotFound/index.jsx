import { useNavigate } from "react-router-dom";
import notFoundImg from "../../assets/notFoundScreen.png";
import { ButtonBack, Container, ContainerImg, Img, Name } from "./style";

export function NotFoundScreen() {
  const navigate = useNavigate();
  function NavigateHome() {
    navigate("/home");
  }
  return (
    <Container>
      <ContainerImg>
        <Name>Ops! Essa página não existe</Name>

        <Img src={notFoundImg} />
        <ButtonBack onClick={() => NavigateHome()}>
          Voltar para a home
        </ButtonBack>
      </ContainerImg>
    </Container>
  );
}
