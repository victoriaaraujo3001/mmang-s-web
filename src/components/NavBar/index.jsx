import { useState } from "react";
import { Link } from "react-router-dom";
import { ListCategories } from "../ListCategories";
import {
  ContainerImage,
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
} from "./style";

export const Navbar = () => {
  
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <Nav>
      <ContainerImage />
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
          <Link
            to="/pedidos"
            style={{
              textDecoration: "none",
              padding: "0",
              margin: "0px",
              width: "100%",
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconRequest />
            Meus pedidos
          </Link>
        </Item>
        <Item>
          <IconBag /> Minha cesta
        </Item>
        <Item>
          <IconAccount />
          Conta
        </Item>
      </Items>
      {isMenuVisible && <ListCategories closeModal={()=>setIsMenuVisible(!isMenuVisible)} />}
    </Nav>
  );
};
