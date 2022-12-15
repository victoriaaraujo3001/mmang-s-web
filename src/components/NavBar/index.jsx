import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListCategories } from "../ListCategories";
import * as S from "./style";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

export const Navbar = () => {
  //aparecer ou não modal de categorias
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  //navegação de tela
  const navigate = useNavigate();
  //navegar para tela de cadastro
  async function NavigateRegister() {
    navigate("/cadastro/usuario");
  }
  //navegar para tela de login
  async function NavigateLogin() {
    navigate("/login/usuario");
  }
  //navegar para home
  async function NavigateHome() {
    navigate("/home");
  }
  //navegar para tela de pedidos
  async function NavigateRequest() {
    navigate("/pedidos");
  }
  //navegar para tela favoritos
  async function NavigateFavorites() {
    navigate("/favoritos");
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
        <S.Item onClick={() => NavigateFavorites()}>
          <S.IconBag /> Meus favoritos
        </S.Item>
        <S.Item>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} rightIcon={<S.IconAccount />}>
                  <div
                    style={{
                      height: "70px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    {isOpen ? (
                      <S.IconAccount color="#808080" />
                    ) : (
                      <S.IconAccount />
                    )}
                    <span>Conta</span>
                  </div>
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => NavigateRegister()}
                    icon={<S.IconRegister />}
                  >
                    Cadasto
                  </MenuItem>
                  <MenuItem
                    onClick={() => NavigateLogin()}
                    icon={<S.IconLogin />}
                  >
                    Login
                  </MenuItem>
                  <MenuItem icon={<S.IconMyBag />}>Minha cesta</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </S.Item>
      </S.Items>
      {isMenuVisible && (
        <ListCategories closeModal={() => setIsMenuVisible(!isMenuVisible)} />
      )}
    </S.Nav>
  );
};
