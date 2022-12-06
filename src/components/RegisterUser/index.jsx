import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CircularProgress } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../controller/registerUser";
import * as S from "./style";

export const FormRegisterUser = () => {
  //informações para api
  const [login, setLogin] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //logica para carregando
  const [loading, setLoading] = useState(false);
  //navegação entre telas
  const navigate = useNavigate();
  //pegar valores da input
  const [inputType, setInputType] = useState("password");
  //função que traz a rota da api
  async function getUserData(e) {
    e.preventDefault();
    setLoading(true);
    const response = await RegisterUser(login, email, password);

    if (response.status == 200) {
      setTimeout(() => {
        setLoading(false), toast.success("Seja bem-vindo");
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false), toast.error("Credenciais inválidas");
      }, 2000);
    }
  }
  async function NavigateLogin() {
    navigate("/login/user");
  }

  return (
    <S.Container>
      <S.Title>Cadastrar</S.Title>
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
              type={"email"}
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <S.EmailIcon />
          </S.BoxInput>
          <S.BoxInput>
            <S.Input
              type={inputType}
              placeholder="senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
          <S.Button type={"submit"}>cadastrar</S.Button>
        )}
      </S.Form>
      <S.Footer>
        <span>Já é cadastrado?</span>
        <S.LinkLogin onClick={() => NavigateLogin()}>
          Faça aqui seu login
        </S.LinkLogin>
      </S.Footer>
      <Toaster
        toastOptions={{
          style: {
            background: "#161B33",
            color: "#fff",
          },
        }}
      />
    </S.Container>
  );
};
