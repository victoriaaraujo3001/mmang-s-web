import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../controller/loginUser";
import * as S from "./style";

export const FormLoginUser = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const notify = () =>
    toast("Hello World", {
      duration: 4000,
      position: "top-center",
      style: {},
      className: "",
      icon: "👏",
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  async function getUserData(e) {
    e.preventDefault();
    const response = await LoginUser(login, password);
  }

  async function NavigateRegister(){
    navigate("/register/user")
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
            />
            <S.LoginIcon />
          </S.BoxInput>
          <S.BoxInput>
            <S.Input
              type={"password"}
              placeholder="senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <S.PasswordIcon />
          </S.BoxInput>
        </S.Content>
        <S.Button type={"submit"} onClick={notify}>
          cadastrar
        </S.Button>
      </S.Form>
      <S.Footer>
        <span>Novo por aqui?</span>
        <S.LinkRegister onClick={() => NavigateRegister()}>Faça aqui seu cadastro</S.LinkRegister>
      </S.Footer>
      <Toaster />
    </S.Container>
  );
};
