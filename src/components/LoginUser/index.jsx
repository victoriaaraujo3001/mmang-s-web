import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CircularProgress } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../controller/loginUser";
import * as S from "./style";

export const FormLoginUser = () => {
  //informações para api
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  //logica para carregando
  const [loading, setLoading] = useState(false);
  //pegar valores da input
  const [inputType, setInputType] = useState("password");
  //navegação entre telas
  const navigate = useNavigate();
  //função que traz a rota da api
  async function getUserData(e) {
    e.preventDefault();
    setLoading(true);
    const response = await LoginUser(login, password);
    //validando resposta da api e trazendo notificações
    if (response.status == 200) {
      //para chamar a notificação depois de carregar
      setTimeout(() => {
        setLoading(false), toast.success("Seja bem-vindo");
      }, 2000);
      //para ser redirecionada para a home
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } else {
      setTimeout(() => {
        setLoading(false), toast.error("Credenciais inválidas");
      }, 2000);
    }
  }

  //função que navega para tela de cadastro
  async function NavigateRegister() {
    navigate("/cadastro/usuario");
  }
  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.Form onSubmit={getUserData}>
        <S.Content>
          <S.BoxInput>
            <S.Input
              type={"text"}
              placeholder="login"
              onChange={(e) => {
                setLogin(e.target.value);
              }}
              required
            />
            <S.LoginIcon />
          </S.BoxInput>
          <S.BoxInput>
            <S.Input
              type={inputType}
              placeholder="senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <div
              onClick={() =>
                setInputType(inputType == "password" ? "text" : "password")
              }
            >
              {inputType == "password" ? (
                <S.PasswordIcon />
              ) : (
                <S.ViewPasswordIcon />
              )}
            </div>
          </S.BoxInput>
        </S.Content>
        {loading ? (
          <CircularProgress isIndeterminate color="#161B33" height={10} />
        ) : (
          <S.Button type={"submit"}>
            entrar
          </S.Button>
        )}
      </S.Form>
      <S.Footer>
        <span>Novo por aqui?</span>
        <S.LinkRegister onClick={() => NavigateRegister()}>
          Faça aqui seu cadastro
        </S.LinkRegister>
      </S.Footer>
      <Toaster
        toastOptions={{
          style: {
            background: "#eeeded",
            color: "##161B33",
          },
        }}
      />
    </S.Container>
  );
};
