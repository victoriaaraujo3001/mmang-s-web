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
  const [nomeCompleto, setNomeCompleto] = useState();
  const [telefone, setTelefone] = useState();
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
    const response = await RegisterUser(
      login,
      email,
      password,
      nomeCompleto,
      telefone
    );
    //validando resposta da api e trazendo notificações
    if (response.status == 201) {
      setTimeout(() => {
        setLoading(false), toast.success("Usuário cadastrado com sucesso");
      }, 1500);
      //
      setTimeout(() => {
        navigate("/login/usuario");
      }, 3000);
    } else {
      setTimeout(() => {
        setLoading(false), toast.error("Credenciais inválidas");
      }, 2000);
    }
  }
  //função que navega para tela de login
  async function NavigateLogin() {
    navigate("/login/usuario");
  }

  return (
    <S.Container>
      <S.Title>Cadastrar</S.Title>
      <S.Form onSubmit={getUserData}>
        <S.Content>
          <S.BoxInput>
            <S.Input
              type={"text"}
              placeholder="nome completo"
              onChange={(e) => {
                setNomeCompleto(e.target.value);
              }}
              required
            />
            <S.NameIcon />
          </S.BoxInput>
          <S.BoxInput>
            <S.Input
              type={"tel"}
              placeholder="telefone"
              onChange={(e) => {
                setTelefone(e.target.value);
              }}
              required
            />
            <S.PhoneIcon />
          </S.BoxInput>
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
            background: "#eeeded",
            color: "##161B33",
          },
        }}
      />
    </S.Container>
  );
};
