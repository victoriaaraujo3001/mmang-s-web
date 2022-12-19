import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { DisfavorMangaById } from "../../controller/disfavor";
import { AllFavoritesMangas } from "../../controller/favorites";
import { ContainerTitle } from "../ContainerTitle";
import * as S from "./style";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  async function ListFavorites() {
    const response = await AllFavoritesMangas();
    setFavorites(response);
  }

  useEffect(() => {
    ListFavorites();
  }, []);

  console.log("-------->",favorites);

  return (
    <>
      <ContainerTitle text={"Favoritos"} />
      <S.Container>
        {favorites.length == 0 ? (
          <span>teste</span>
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
                <S.Button>
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
