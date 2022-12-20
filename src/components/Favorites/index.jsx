import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { DisfavorMangaById } from "../../controller/disfavor";
import { AllFavoritesMangas } from "../../controller/favorites";
import { ContainerTitle } from "../ContainerTitle";
import notFoundImg from "../../assets/notFoundRequests.png";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const Favorites = () => {
  //guardando retorno de favoritos
  const [favorites, setFavorites] = useState([]);
  //desfavoritar manga
  const [disfavor, setDisfavor] = useState([]);
  //
  const navigate = useNavigate();
  //função que tras os favoritos da api
  async function ListFavorites() {
    const response = await AllFavoritesMangas();
    setFavorites(response);
  }
  //função de desfavoritar
  async function Disfavor(id) {
    const response = await DisfavorMangaById(id);
    setDisfavor(response);
    if (response.status == 200) {
      setTimeout(() => {
        toast.error("Removido dos favoritos", { icon: "💔" });
      }, 1500);
    }
  }
  // função para navegar para a tela de view product
  async function FilterManga(cod) {
    navigate(`/manga/${cod}`, {
      state: { cod: cod },
    });
  }
  //renderizar a tela de acordo com a função
  useEffect(() => {
    ListFavorites();
  }, []);

  return (
    <>
      <ContainerTitle text={"Favoritos"} />
      <S.Container>
        {favorites.length == 0 ? (
          <S.ContainerNotFound>
            <span>Você não tem favoritos!</span>
            <S.ContainerNotFoundImage>
              <S.ImageNotFound src={notFoundImg} />
            </S.ContainerNotFoundImage>
          </S.ContainerNotFound>
        ) : (
          favorites?.map((index) => {
            var preco = parseFloat(index.preco).toFixed(2);
            return (
              <S.Content>
                <S.ImgManga>
                  <S.Ticket>
                    <S.Heart />
                  </S.Ticket>
                  <S.Img src={index.capa} />
                </S.ImgManga>
                <S.Info>
                  <S.NameSale>{index.nome}</S.NameSale>
                  <S.Price>R${preco}</S.Price>
                  <span>cod.{index.cod_livro}</span>
                </S.Info>
                <S.Button onClick={() => FilterManga(index.cod_livro)}>
                  <S.Cart /> <span>Comprar</span>
                </S.Button>
                <S.ButtonDisfavor onClick={() => Disfavor(index.id_manga)}>
                  <S.IconDisfavor />
                  <span>Desfavoritar</span>
                </S.ButtonDisfavor>
              </S.Content>
            );
          })
        )}
      </S.Container>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#eeeded",
            color: "#161B33",
            marginTop: "4%",
          },
        }}
      />
    </>
  );
};
