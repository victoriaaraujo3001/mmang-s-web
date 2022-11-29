import { ButtonRegister } from "../ButtonRegister";
import { Input } from "../Input";
import * as S from "./style";

export const FormUser = () => {
  return (
    <S.Container>
      <S.Title>Cadastrar</S.Title>
      <S.Content>
        <Input type={"text"} placeholder={"login"} />
        <Input type={"email"} placeholder={"email"} />
        <Input type={"password"} placeholder={"senha"} />
      </S.Content>
      <ButtonRegister text={"cadastrar"}/>
    </S.Container>
  );
};
