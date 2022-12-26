import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ListCategories } from "../ListCategories";
import * as S from "./style";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { AllMangas } from "../../controller/getAllmangas";

export const Navbar = () => {
  //aparecer ou não modal de categorias
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  //guardar valores da api
  const [allMangas, setAllMangas] = useState([]);
  //guardar os valores do filtro de busca
  const [allMangasResult, setAllMangasResult] = useState([]);
  //guardar os valores da input
  const [search, setSearch] = useState("");
  //navegação de tela
  const navigate = useNavigate();
  //listagem de mangas
  async function GetAllMangas() {
    const response = await AllMangas();
    setAllMangas(response);
    setAllMangasResult(response);
  }
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
   //navegar para tela de visualizar o produto
   async function NavigateViewProduct(cod) {
    navigate(`/manga/${cod}`, {
      state: { cod: cod },
    });
  }
  //função de busca
  function SearchManga(text) {
    let listAllMangas = allMangas;
    if (text != "") {
      const formatedText = text.trim().toLowerCase();
      let search = listAllMangas.filter((mangaItens) => {
        const search = `
        ${mangaItens.nome.trim().toLowerCase().match(formatedText)} `;
        return search.indexOf(formatedText) > -1;
      });

      if (search) {
        setAllMangasResult(search);
      } else {
        setAllMangasResult(search);
      }
    } else {
      setAllMangasResult(listAllMangas);
    }
  }

  console.log("allMangas", allMangasResult);

  useEffect(() => {
    GetAllMangas();
  }, []);
  return (
    <S.Nav>
      <S.Title onClick={() => NavigateHome()}>mmangás</S.Title>
      <S.ContainerInput>
        <S.IconSearch />
        <S.InputSearch
          placeholder="o que você está buscando..."
          onChange={(e) => {SearchManga(e.target.value), setSearch(e.target.value)}}
        />
        <S.ContainerResult>
          {search.length !== 0 && allMangasResult?.map((index) => {
            return <S.ButtomItemResult onClick={() => NavigateViewProduct(index.cod_livro)}>{index.nome}</S.ButtomItemResult>;
          })}
        </S.ContainerResult>
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
          {allMangasResult == 0 ? (
            <></>
          ) : (
            allMangasResult?.map((index) => {
              return (
                <>
                  <datalist id={index.nome}>
                    <option value={index.nome}>{index.nome}</option>
                  </datalist>
                </>
              );
            })
          )}
        </S.Item>
      </S.Items>
      {isMenuVisible && (
        <ListCategories closeModal={() => setIsMenuVisible(!isMenuVisible)} />
      )}
    </S.Nav>
  );
};
