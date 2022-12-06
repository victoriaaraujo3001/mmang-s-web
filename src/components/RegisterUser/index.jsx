import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../controller/registerUser";
import * as S from "./style";

export const FormRegisterUser = () => {
  const [login, setLogin] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const notify = () =>
    toast("Hello World", {
      duration: 4000,
      position: "top-center",
      // Styling
      style: {},
      className: "",
      // Custom Icon
      icon: "👏",
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  const navigate = useNavigate(); 

  async function getUserData(e) {
    e.preventDefault();
    const response = await RegisterUser(login, email, password);
  }
  async function NavigateLogin(){
    navigate("/login/user")
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
            />
            <S.EmailIcon />
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
        <span>Já é cadastrado?</span>
        <S.LinkLogin onClick={() => NavigateLogin()}>Faça aqui seu login</S.LinkLogin>
      </S.Footer>
      <Toaster />
    </S.Container>
  );
};
