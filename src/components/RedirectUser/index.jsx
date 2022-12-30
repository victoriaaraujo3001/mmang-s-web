import { ContainerTitle } from "../ContainerTitle";
import ImgRedirect from "../../assets/redirectUser.png";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const RedirectUser = () => {
  //navegar entre tela de home e cadastro
  const navigate = useNavigate();
  //função de ir para tela de cadastro
  function NavigateRegisterUser() {
    navigate("/cadastro/usuario");
  }
  //função de ir para tela de home
  function NavigateHome() {
    navigate("/home");
  }

  return (
    <S.Container>
      <ContainerTitle text={"Seja bem-vindo"} />
      <S.Container>
        <S.ContainerRedirectUser>
          <S.ImageRedirect src={ImgRedirect} />
        </S.ContainerRedirectUser>
        <S.InfoUser>
          Parece que você é novo por aqui, para saber mais informações sobre
          nossa loja basta se cadastar e fazer o login e você poderá navegar o
          quanto quiser pelo nosso site.
        </S.InfoUser>
      </S.Container>
      <S.Footer>
        <S.ButtonBack onClick={() => NavigateHome()}>
          Voltar para a home
        </S.ButtonBack>
        <S.Button onClick={() => NavigateRegisterUser()}>
          Ir para tela de cadastro
        </S.Button>
      </S.Footer>
    </S.Container>
  );
};
