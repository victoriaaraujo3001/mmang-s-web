import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListCategories } from "../ListCategories";
import * as S from "./style";

export const Navbar = () => {
  //aparecer ou não modal de categorias
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  //navegação de tela
  const navigate = useNavigate();
  //navegar para tela de cadastro
  async function NavigateRegister() {
    navigate("/register/user");
  }
  //navegar para home
  async function NavigateHome() {
    navigate("/home");
  }
  //navegar para tela de pedidos
  async function NavigateRequest() {
    navigate("/pedidos");
  }
  return (
    <S.Nav>
      <S.Title onClick={() => NavigateHome()}>mmangás</S.Title>
      <S.ContainerInput>
        <S.IconSearch />
        <S.InputSearch placeholder="o que você está buscando..." />
      </S.ContainerInput>
      <S.Items>
        <S.Item onClick={() => setIsMenuVisible(!isMenuVisible)}>
          <S.IconCategory />
          Categorias
        </S.Item>
        <S.Item onClick={() => NavigateRequest()}>
          <S.IconRequest />
          Meus pedidos
        </S.Item>
        <S.Item>
          <S.IconBag /> Minha cesta
        </S.Item>
        <S.Item onClick={() => NavigateRegister()}>
          <S.IconAccount />
          Conta
        </S.Item>
      </S.Items>
      {isMenuVisible && (
        <ListCategories closeModal={() => setIsMenuVisible(!isMenuVisible)} />
      )}
    </S.Nav>
  );
};
