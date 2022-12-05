import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListCategories } from "../ListCategories";
import {
  ContainerInput,
  IconAccount,
  IconBag,
  IconCategory,
  IconRequest,
  IconSearch,
  InputSearch,
  Item,
  Items,
  Nav,
  Title,
} from "./style";

export const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate();

  async function NavigateRegister() {
    navigate("/register/user");
  }
  async function NavigateHome() {
    navigate("/home");
  }

  return (
    <Nav>
      <Title onClick={() => NavigateHome()}>mmangás</Title>
      <ContainerInput>
        <IconSearch />
        <InputSearch placeholder="o que você está buscando..." />
      </ContainerInput>
      <Items>
        <Item onClick={() => setIsMenuVisible(!isMenuVisible)}>
          <IconCategory />
          Categorias
        </Item>
        <Item>
          <IconRequest />
          Meus pedidos
        </Item>
        <Item>
          <IconBag /> Minha cesta
        </Item>
        <Item onClick={() => NavigateRegister()}>
          <IconAccount />
          Conta
        </Item>
      </Items>
      {isMenuVisible && (
        <ListCategories closeModal={() => setIsMenuVisible(!isMenuVisible)} />
      )}
    </Nav>
  );
};
